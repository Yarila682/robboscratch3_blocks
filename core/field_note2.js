/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2018 Massachusetts Institute of Technology
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview note2 input field, for selecting a musical note2 on a piano.
 * @author ericr@media.mit.edu (Eric Rosenbaum)
 */
'use strict';

goog.provide('Blockly.Fieldnote2');

goog.require('Blockly.DropDownDiv');
goog.require('Blockly.FieldTextInput');
goog.require('goog.math');
goog.require('goog.userAgent');

/**
 * Class for a note2 input field, for selecting a musical note2 on a piano.
 * @param {(string|number)=} opt_value The initial content of the field. The
 *     value should cast to a number, and if it does not, '0' will be used.
 * @param {Function=} opt_validator An optional function that is called
 *     to validate any constraints on what the user entered.  Takes the new
 *     text as an argument and returns the accepted text or null to abort
 *     the change.
 * @extends {Blockly.FieldTextInput}
 * @constructor
 */
Blockly.Fieldnote2 = function(opt_value, opt_validator) {
  opt_value = (opt_value && !isNaN(opt_value)) ? String(opt_value) : '0';
  Blockly.Fieldnote2.superClass_.constructor.call(
      this, opt_value, opt_validator);
  this.addArgType('note2');

  /**
   * Width of the field. Computed when drawing it, and used for animation.
   * @type {number}
   * @private
   */
  this.fieldEditorWidth_ = 0;

  /**
   * Height of the field. Computed when drawing it.
   * @type {number}
   * @private
   */
  this.fieldEditorHeight_ = 0;

  /**
   * The piano SVG.
   * @type {SVGElement}
   * @private
   */
  this.pianoSVG_ = null;

  /**
   * Array of SVG elements representing the clickable piano keys.
   * @type {!Array<SVGElement>}
   * @private
   */
  this.keySVGs_ = [];

  /**
   * note2 name indicator at the top of the field.
   * @type {SVGElement}
   * @private
   */
  this.note2NameText_ = null;

  /**
   * note2 name indicator on the low C key.
   * @type {SVGElement}
   * @private
   */
  this.lowCText_ = null;

  /**
   * note2 name indicator on the low C key.
   * @type {SVGElement}
   * @private
   */
  this.highCText_ = null;

  /**
   * Octave number of the currently displayed range of keys.
   * @type {number}
   * @private
   */
  this.displayedOctave_ = null;

  /**
   * Current animation position of the piano SVG, as it shifts left or right to
   * change octaves.
   * @type {number}
   * @private
   */
  this.animationPos_ = 0;

  /**
   * Target position for the animation as the piano SVG shifts left or right.
   * @type {number}
   * @private
   */
  this.animationTarget_ = 0;

  /**
   * A flag indicating that the mouse is currently down. Used in combination with
   * mouse enter events to update the key selection while dragging.
   * @type {boolean}
   * @private
   */
  this.mouseIsDown_ = false;

  /**
   * An array of wrappers for mouse down events on piano keys.
   * @type {!Array.<!Array>}
   * @private
   */
  this.mouseDownWrappers_ = [];

  /**
   * A wrapper for the mouse up event.
   * @type {!Array.<!Array>}
   * @private
   */
  this.mouseUpWrapper_ = null;

  /**
   * An array of wrappers for mouse enter events on piano keys.
   * @type {!Array.<!Array>}
   * @private
   */
  this.mouseEnterWrappers_ = [];

  /**
   * A wrapper for the mouse down event on the octave down button.
   * @type {!Array.<!Array>}
   * @private
   */
  this.octaveDownMouseDownWrapper_ = null;

  /**
   * A wrapper for the mouse down event on the octave up button.
   * @type {!Array.<!Array>}
   * @private
   */
  this.octaveUpMouseDownWrapper_ = null;
};
goog.inherits(Blockly.Fieldnote2, Blockly.FieldTextInput);

/**
 * Inset in pixels of content displayed in the field, caused by parent properties.
 * The inset is actually determined by the CSS property blocklyDropDownDiv- it is
 * the sum of the padding and border thickness.
 */
Blockly.Fieldnote2.INSET = 5;

/**
 * Height of the top area of the field, in px.
 * @type {number}
 * @const
 */
Blockly.Fieldnote2.TOP_MENU_HEIGHT = 32 - Blockly.Fieldnote2.INSET;

/**
 * Padding on the top and sides of the field, in px.
 * @type {number}
 * @const
 */
Blockly.Fieldnote2.EDGE_PADDING = 1;

/**
 * Height of the drop shadow on the piano, in px.
 * @type {number}
 * @const
 */
Blockly.Fieldnote2.SHADOW_HEIGHT = 4;

/**
 * Color for the shadow on the piano.
 * @type {string}
 * @const
 */
Blockly.Fieldnote2.SHADOW_COLOR = '#000';

/**
 * Opacity for the shadow on the piano.
 * @type {string}
 * @const
 */
Blockly.Fieldnote2.SHADOW_OPACITY = .2;

/**
 * A color for the white piano keys.
 * @type {string}
 * @const
 */
Blockly.Fieldnote2.WHITE_KEY_COLOR = '#FFFFFF';

/**
 * A color for the black piano keys.
 * @type {string}
 * @const
 */
Blockly.Fieldnote2.BLACK_KEY_COLOR = '#323133';

/**
 * A color for stroke around black piano keys.
 * @type {string}
 * @const
 */
Blockly.Fieldnote2.BLACK_KEY_STROKE = '#555555';

/**
 * A color for the selected state of a piano key.
 * @type {string}
 * @const
 */
Blockly.Fieldnote2.KEY_SELECTED_COLOR = '#b0d6ff';

/**
 * The number of white keys in one octave on the piano.
 * @type {number}
 * @const
 */
Blockly.Fieldnote2.NUM_WHITE_KEYS = 8;

/**
 * Height of a white piano key, in px.
 * @type {string}
 * @const
 */
Blockly.Fieldnote2.WHITE_KEY_HEIGHT = 72;

/**
 * Width of a white piano key, in px.
 * @type {string}
 * @const
 */
Blockly.Fieldnote2.WHITE_KEY_WIDTH = 40;

/**
 * Height of a black piano key, in px.
 * @type {string}
 * @const
 */
Blockly.Fieldnote2.BLACK_KEY_HEIGHT = 40;

/**
 * Width of a black piano key, in px.
 * @type {string}
 * @const
 */
Blockly.Fieldnote2.BLACK_KEY_WIDTH = 32;

/**
 * Radius of the curved bottom corner of a piano key, in px.
 * @type {string}
 * @const
 */
Blockly.Fieldnote2.KEY_RADIUS = 6;

/**
 * Bottom padding for the labels on C keys.
 * @type {string}
 * @const
 */
Blockly.Fieldnote2.KEY_LABEL_PADDING = 8;

/**
 * An array of objects with data describing the keys on the piano.
 * @type {Array.<{name: String, pitch: Number, isBlack: boolean}>}
 * @const
 */
Blockly.Fieldnote2.KEY_INFO = [
  {name: 'C', pitch: 0},
  {name: 'C♯', pitch: 1, isBlack: true},
  {name: 'D', pitch: 2},
  {name: 'E♭', pitch: 3, isBlack: true},
  {name: 'E', pitch: 4},
  {name: 'F', pitch: 5},
  {name: 'F♯', pitch: 6, isBlack: true},
  {name: 'G', pitch: 7},
  {name: 'G♯', pitch: 8, isBlack: true},
  {name: 'A', pitch: 9},
  {name: 'B♭', pitch: 10, isBlack: true},
  {name: 'B', pitch: 11},
  {name: 'C', pitch: 12}
];

/**
 * The MIDI note2 number of the highest note2 selectable on the piano.
 * @type {number}
 * @const
 */
Blockly.Fieldnote2.MAX_note2 = 83;

/**
 * The fraction of the distance to the target location to move the piano at each
 * step of the animation.
 * @type {number}
 * @const
 */
Blockly.Fieldnote2.ANIMATION_FRACTION = 0.2;

/**
 * Path to the arrow svg icon, used on the octave buttons.
 * @type {string}
 * @const
 */
Blockly.Fieldnote2.ARROW_SVG_PATH = 'icons/arrow_button.svg';

/**
 * The size of the square octave buttons.
 * @type {number}
 * @const
 */
Blockly.Fieldnote2.OCTAVE_BUTTON_SIZE = 32;

/**
 * Construct a Fieldnote2 from a JSON arg object.
 * @param {!Object} options A JSON object with options.
 * @returns {!Blockly.Fieldnote2} The new field instance.
 * @package
 * @nocollapse
 */
Blockly.Fieldnote2.fromJson = function(options) {
  return new Blockly.Fieldnote2(options['note2']);
};

/**
 * Clean up this Fieldnote2, as well as the inherited FieldTextInput.
 * @return {!Function} Closure to call on destruction of the WidgetDiv.
 * @private
 */
Blockly.Fieldnote2.prototype.dispose_ = function() {
  var thisField = this;
  return function() {
    Blockly.Fieldnote2.superClass_.dispose_.call(thisField)();
    thisField.mouseDownWrappers_.forEach(function(wrapper) {
      Blockly.unbindEvent_(wrapper);
    });
    thisField.mouseEnterWrappers_.forEach(function(wrapper) {
      Blockly.unbindEvent_(wrapper);
    });
    if (thisField.mouseUpWrapper_) {
      Blockly.unbindEvent_(thisField.mouseUpWrapper_);
    }
    if (thisField.octaveDownMouseDownWrapper_) {
      Blockly.unbindEvent_(thisField.octaveDownMouseDownWrapper_);
    }
    if (thisField.octaveUpMouseDownWrapper_) {
      Blockly.unbindEvent_(thisField.octaveUpMouseDownWrapper_);
    }
    this.pianoSVG_ = null;
    this.keySVGs_.length = 0;
    this.note2NameText_ = null;
    this.lowCText_ = null;
    this.highCText_ = null;
  };
};

/**
 * Show a field with piano keys.
 * @private
 */
Blockly.Fieldnote2.prototype.showEditor_ = function() {
  var noFocus =
      goog.userAgent.MOBILE || goog.userAgent.ANDROID || goog.userAgent.IPAD;
  // Mobile browsers have issues with in-line textareas (focus & keyboards).
  Blockly.Fieldnote2.superClass_.showEditor_.call(this, noFocus);

  // If there is an existing drop-down someone else owns, hide it immediately and clear it.
  Blockly.DropDownDiv.hideWithoutAnimation();
  Blockly.DropDownDiv.clearContent();

  // Build the SVG DOM.
  var div = Blockly.DropDownDiv.getContentDiv();

  this.fieldEditorWidth_ = Blockly.Fieldnote2.NUM_WHITE_KEYS * Blockly.Fieldnote2.WHITE_KEY_WIDTH +
    Blockly.Fieldnote2.EDGE_PADDING;
  this.fieldEditorHeight_ = Blockly.Fieldnote2.TOP_MENU_HEIGHT +
    Blockly.Fieldnote2.WHITE_KEY_HEIGHT +
    Blockly.Fieldnote2.EDGE_PADDING;

  var svg = Blockly.utils.createSvgElement('svg', {
    'xmlns': 'http://www.w3.org/2000/svg',
    'xmlns:html': 'http://www.w3.org/1999/xhtml',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    'version': '1.1',
    'height': this.fieldEditorHeight_ + 'px',
    'width': this.fieldEditorWidth_ + 'px'
  }, div);

  // Add the white and black keys
  // Since we are adding the keys from left to right in order, they need
  // to be in two groups in order to layer correctly.
  this.pianoSVG_ = Blockly.utils.createSvgElement('g', {}, svg);
  var whiteKeyGroup = Blockly.utils.createSvgElement('g', {}, this.pianoSVG_);
  var blackKeyGroup = Blockly.utils.createSvgElement('g', {}, this.pianoSVG_);

  // Add three piano octaves, so we can animate moving up or down an octave.
  // Only the middle octave gets bound to events.
  this.keySVGs_ = [];
  this.addPianoOctave_(-this.fieldEditorWidth_ + Blockly.Fieldnote2.EDGE_PADDING,
      whiteKeyGroup, blackKeyGroup, null);
  this.addPianoOctave_(0, whiteKeyGroup, blackKeyGroup, this.keySVGs_);
  this.addPianoOctave_(this.fieldEditorWidth_ - Blockly.Fieldnote2.EDGE_PADDING,
      whiteKeyGroup, blackKeyGroup, null);

  // note2 name indicator at the top of the field
  this.note2NameText_ = Blockly.utils.createSvgElement('text',
      {
        'x': this.fieldEditorWidth_ / 2,
        'y': Blockly.Fieldnote2.TOP_MENU_HEIGHT / 2,
        'class': 'blocklyText',
        'text-anchor': 'middle',
        'dominant-baseline': 'middle',
      }, svg);

  // note2 names on the low and high C keys
  var lowCX = Blockly.Fieldnote2.WHITE_KEY_WIDTH / 2;
  this.lowCText_ = this.addCKeyLabel_(lowCX, svg);
  var highCX = lowCX + (Blockly.Fieldnote2.WHITE_KEY_WIDTH *
    (Blockly.Fieldnote2.NUM_WHITE_KEYS - 1));
  this.highCText_ = this.addCKeyLabel_(highCX, svg);

  // Horizontal line at the top of the keys
  Blockly.utils.createSvgElement('line',
      {
        'stroke': this.sourceBlock_.getColourTertiary(),
        'x1': 0,
        'y1': Blockly.Fieldnote2.TOP_MENU_HEIGHT,
        'x2': this.fieldEditorWidth_,
        'y2': Blockly.Fieldnote2.TOP_MENU_HEIGHT
      }, svg);

  // Drop shadow at the top of the keys
  Blockly.utils.createSvgElement('rect',
      {
        'x': 0,
        'y': Blockly.Fieldnote2.TOP_MENU_HEIGHT,
        'width': this.fieldEditorWidth_,
        'height': Blockly.Fieldnote2.SHADOW_HEIGHT,
        'fill': Blockly.Fieldnote2.SHADOW_COLOR,
        'fill-opacity': Blockly.Fieldnote2.SHADOW_OPACITY
      }, svg);

  // Octave buttons
  this.octaveDownButton = this.addOctaveButton_(0, true, svg);
  this.octaveUpButton = this.addOctaveButton_(
      (this.fieldEditorWidth_ + Blockly.Fieldnote2.INSET * 2) -
      Blockly.Fieldnote2.OCTAVE_BUTTON_SIZE, false, svg);

  this.octaveDownMouseDownWrapper_ =
    Blockly.bindEvent_(this.octaveDownButton, 'mousedown', this, function() {
      this.changeOctaveBy_(-1);
    });
  this.octaveUpMouseDownWrapper_ =
      Blockly.bindEvent_(this.octaveUpButton, 'mousedown', this,function() {
        this.changeOctaveBy_(1);
      });
  Blockly.DropDownDiv.setColour(this.sourceBlock_.parentBlock_.getColour(),
      this.sourceBlock_.getColourTertiary());
  Blockly.DropDownDiv.setCategory(this.sourceBlock_.parentBlock_.getCategory());
  Blockly.DropDownDiv.showPositionedByBlock(this, this.sourceBlock_);

  this.updateSelection_();
};

/**
 * Add one octave of piano keys drawn using SVG.
 * @param {number} x The x position of the left edge of this octave of keys.
 * @param {SVGElement} whiteKeyGroup The group for all white piano keys.
 * @param {SvgElement} blackKeyGroup The group for all black piano keys.
 * @param {!Array.<SvgElement>} keySVGarray An array containing all the key SVGs.
 * @private
 */
Blockly.Fieldnote2.prototype.addPianoOctave_ = function(x, whiteKeyGroup, blackKeyGroup, keySVGarray) {
  var xIncrement, width, height, fill, stroke, group;
  x += Blockly.Fieldnote2.EDGE_PADDING / 2;
  var y = Blockly.Fieldnote2.TOP_MENU_HEIGHT;
  for (var i = 0; i < Blockly.Fieldnote2.KEY_INFO.length; i++) {
    // Draw a black or white key
    if (Blockly.Fieldnote2.KEY_INFO[i].isBlack) {
      // Black keys are shifted back half a key
      x -= Blockly.Fieldnote2.BLACK_KEY_WIDTH / 2;
      xIncrement = Blockly.Fieldnote2.BLACK_KEY_WIDTH / 2;
      width = Blockly.Fieldnote2.BLACK_KEY_WIDTH;
      height = Blockly.Fieldnote2.BLACK_KEY_HEIGHT;
      fill = Blockly.Fieldnote2.BLACK_KEY_COLOR;
      stroke = Blockly.Fieldnote2.BLACK_KEY_STROKE;
      group = blackKeyGroup;
    } else {
      xIncrement = Blockly.Fieldnote2.WHITE_KEY_WIDTH;
      width = Blockly.Fieldnote2.WHITE_KEY_WIDTH;
      height = Blockly.Fieldnote2.WHITE_KEY_HEIGHT;
      fill = Blockly.Fieldnote2.WHITE_KEY_COLOR;
      stroke = this.sourceBlock_.getColourTertiary();
      group = whiteKeyGroup;
    }
    var attr = {
      'd': this.getPianoKeyPath_(x, y, width, height),
      'fill': fill,
      'stroke': stroke
    };
    x += xIncrement;

    var keySVG = Blockly.utils.createSvgElement('path', attr, group);

    if (keySVGarray) {
      keySVGarray[i] = keySVG;
      keySVG.setAttribute('data-pitch', Blockly.Fieldnote2.KEY_INFO[i].pitch);
      keySVG.setAttribute('data-name', Blockly.Fieldnote2.KEY_INFO[i].name);
      keySVG.setAttribute('data-isBlack', Blockly.Fieldnote2.KEY_INFO[i].isBlack);

      this.mouseDownWrappers_[i] =
          Blockly.bindEvent_(keySVG, 'mousedown', this, this.onMouseDownOnKey_);
      this.mouseEnterWrappers_[i] =
          Blockly.bindEvent_(keySVG, 'mouseenter', this, this.onMouseEnter_);
    }
  }
};

/**
 * Construct the SVG path string for a piano key shape: a rectangle with rounded
 * corners at the bottom.
 * @param {number} x the x position for the key.
 * @param {number} y the y position for the key.
 * @param {number} width the width of the key.
 * @param {number} height the height of the key.
 * @returns {string} the SVG path as a string.
 * @private
 */
Blockly.Fieldnote2.prototype.getPianoKeyPath_ = function(x, y, width, height) {
  return  'M' + x + ' ' + y + ' ' +
    'L' + x + ' ' + (y + height -  Blockly.Fieldnote2.KEY_RADIUS) + ' ' +
    'Q' + x + ' ' + (y + height) + ' ' +
    (x + Blockly.Fieldnote2.KEY_RADIUS) + ' ' + (y + height) + ' ' +
    'L' + (x + width - Blockly.Fieldnote2.KEY_RADIUS) + ' ' + (y + height) + ' ' +
    'Q' + (x + width) + ' ' + (y + height) + ' ' +
    (x + width) + ' ' + (y + height - Blockly.Fieldnote2.KEY_RADIUS) + ' ' +
    'L' + (x + width) + ' ' + y + ' ' +
    'L' + x +  ' ' + y;
};

/**
 * Add a button for switching the displayed octave of the piano up or down.
 * @param {number} x The x position of the button.
 * @param {boolean} flipped If true, the icon should be flipped.
 * @param {SvgElement} svg The svg element to add the buttons to.
 * @returns {SvgElement} A group containing the button SVG elements.
 * @private
 */
Blockly.Fieldnote2.prototype.addOctaveButton_ = function(x, flipped, svg) {
  var group = Blockly.utils.createSvgElement('g', {}, svg);
  var imageSize = Blockly.Fieldnote2.OCTAVE_BUTTON_SIZE;
  var arrow = Blockly.utils.createSvgElement('image',
      {
        'width': imageSize,
        'height': imageSize,
        'x': x - Blockly.Fieldnote2.INSET,
        'y': -1 * Blockly.Fieldnote2.INSET
      }, group);
  arrow.setAttributeNS(
      'http://www.w3.org/1999/xlink',
      'xlink:href',
      Blockly.mainWorkspace.options.pathToMedia + Blockly.Fieldnote2.ARROW_SVG_PATH
  );
  Blockly.utils.createSvgElement('line',
      {
        'stroke': this.sourceBlock_.getColourTertiary(),
        'x1': x - Blockly.Fieldnote2.INSET,
        'y1': 0,
        'x2': x - Blockly.Fieldnote2.INSET,
        'y2': Blockly.Fieldnote2.TOP_MENU_HEIGHT - Blockly.Fieldnote2.INSET
      }, group);
  if (flipped) {
    var translateX = -1 * Blockly.Fieldnote2.OCTAVE_BUTTON_SIZE + (Blockly.Fieldnote2.INSET * 2);
    group.setAttribute('transform', 'scale(-1, 1) ' +
      'translate(' + translateX + ', 0)');
  }
  return group;
};

/**
 * Add an SVG text label for display on the C keys of the piano.
 * @param {number} x The x position for the label.
 * @param {SvgElement} svg The SVG element to add the label to.
 * @returns {SvgElement} The SVG element containing the label.
 * @private
 */
Blockly.Fieldnote2.prototype.addCKeyLabel_ = function(x, svg) {
  return Blockly.utils.createSvgElement('text',
      {
        'x': x,
        'y': Blockly.Fieldnote2.TOP_MENU_HEIGHT + Blockly.Fieldnote2.WHITE_KEY_HEIGHT -
          Blockly.Fieldnote2.KEY_LABEL_PADDING,
        'class': 'scratchnote2PickerKeyLabel',
        'text-anchor': 'middle'
      }, svg);
};

/**
 * Set the visibility of the C key labels.
 * @param {boolean} visible If true, set labels to be visible.
 * @private
 */
Blockly.Fieldnote2.prototype.setCKeyLabelsVisible_ = function(visible) {
  if (visible) {
    this.fadeSvgToOpacity_(this.lowCText_, 1);
    this.fadeSvgToOpacity_(this.highCText_, 1);
  } else {
    this.fadeSvgToOpacity_(this.lowCText_, 0);
    this.fadeSvgToOpacity_(this.highCText_, 0);
  }
};

/**
 * Animate an SVG to fade it in or out to a target opacity.
 * @param {SvgElement} svg The SVG element to apply the fade to.
 * @param {number} opacity The target opacity.
 * @private
 */
Blockly.Fieldnote2.prototype.fadeSvgToOpacity_ = function(svg, opacity) {
  svg.setAttribute('style', 'opacity: ' + opacity + '; transition: opacity 0.1s;');
};

/**
 * Handle the mouse down event on a piano key.
 * @param {!Event} e Mouse down event.
 * @private
 */
Blockly.Fieldnote2.prototype.onMouseDownOnKey_ = function(e) {
  this.mouseIsDown_ = true;
  this.mouseUpWrapper_ = Blockly.bindEvent_(document.body, 'mouseup', this, this.onMouseUp_);
  this.selectnote2WithMouseEvent_(e);
};

/**
 * Handle the mouse up event following a mouse down on a piano key.
 * @private
 */
Blockly.Fieldnote2.prototype.onMouseUp_ = function() {
  this.mouseIsDown_ = false;
  Blockly.unbindEvent_(this.mouseUpWrapper_);
};

/**
 * Handle the event when the mouse enters a piano key.
 * @param {!Event} e Mouse enter event.
 * @private
 */
Blockly.Fieldnote2.prototype.onMouseEnter_ = function(e) {
  if (this.mouseIsDown_) {
    this.selectnote2WithMouseEvent_(e);
  }
};

/**
 * Use the data in a mouse event to select a new note2, and play it.
 * @param {!Event} e Mouse event.
 * @private
 */
Blockly.Fieldnote2.prototype.selectnote2WithMouseEvent_ = function(e) {
  var newnote2Num = Number(e.target.getAttribute('data-pitch')) + this.displayedOctave_ * 12;
  this.setnote2Num_(newnote2Num);
  this.playnote2Internal_();
};

/**
 * Play a note2, by calling the externally overriden play note2 function.
 * @private
 */
Blockly.Fieldnote2.prototype.playnote2Internal_ = function() {
  if (Blockly.Fieldnote2.playnote2_) {
    Blockly.Fieldnote2.playnote2_(
        this.getValue(),
        this.sourceBlock_.parentBlock_.getCategory()
    );
  }
};

/**
 * Function to play a musical note2 corresponding to the key selected.
 * Overridden externally.
 * @param {number} note2Num the MIDI note2 number to play.
 * @param {string} id An id to select a scratch extension to play the note2.
 * @private
 */
Blockly.Fieldnote2.playnote2_ = function(/* note2Num, id*/) {
  return;
};

/**
 * Change the selected note2 by a number of octaves, and start the animation.
 * @param {number} octaves The number of octaves to change by.
 * @private
 */
Blockly.Fieldnote2.prototype.changeOctaveBy_ = function(octaves) {
  this.displayedOctave_ += octaves;
  if (this.displayedOctave_ < 0) {
    this.displayedOctave_ = 0;
    return;
  }
  var maxOctave = Math.floor(Blockly.Fieldnote2.MAX_note2 / 12);
  if (this.displayedOctave_ > maxOctave) {
    this.displayedOctave_ = maxOctave;
    return;
  }

  var newnote2 = Number(this.getText()) + (octaves * 12);
  this.setnote2Num_(newnote2);

  this.animationTarget_ = this.fieldEditorWidth_ * octaves * -1;
  this.animationPos_ = 0;
  this.stepOctaveAnimation_();
  this.setCKeyLabelsVisible_(false);
};

/**
 * Animate the piano up or down an octave by sliding it to the left or right.
 * @private
 */
Blockly.Fieldnote2.prototype.stepOctaveAnimation_ = function() {
  var absDiff = Math.abs(this.animationPos_ - this.animationTarget_);
  if (absDiff < 1) {
    this.pianoSVG_.setAttribute('transform', 'translate(0, 0)');
    this.setCKeyLabelsVisible_(true);
    this.playnote2Internal_();
    return;
  }
  this.animationPos_ += (this.animationTarget_ - this.animationPos_) *
    Blockly.Fieldnote2.ANIMATION_FRACTION;
  this.pianoSVG_.setAttribute('transform', 'translate(' + this.animationPos_ + ',0)');
  requestAnimationFrame(this.stepOctaveAnimation_.bind(this));
};

/**
 * Set the selected note2 number, and update the piano display and the input field.
 * @param {number} note2Num The MIDI note2 number to select.
 * @private
 */
Blockly.Fieldnote2.prototype.setnote2Num_ = function(note2Num) {
  note2Num = this.callValidator(note2Num);
  this.setValue(note2Num);
  Blockly.FieldTextInput.htmlInput_.value = note2Num;
};

/**
 * Sets the text in this field.  Triggers a rerender of the source block, and
 * updates the selection on the field.
 * @param {?string} text New text.
 */
Blockly.Fieldnote2.prototype.setText = function(text) {
  Blockly.Fieldnote2.superClass_.setText.call(this, text);
  if (!this.textElement_) {
    // Not rendered yet.
    return;
  }
  this.updateSelection_();
  // Cached width is obsolete.  Clear it.
  this.size_.width = 0;
};

/**
 * For a MIDI note2 number, find the index of the corresponding piano key.
 * @param {number} note2Num The note2 number.
 * @returns {number} The index of the piano key.
 * @private
 */
Blockly.Fieldnote2.prototype.note2NumToKeyIndex_ = function(note2Num) {
  return Math.floor(note2Num) - (this.displayedOctave_ * 12);
};

/**
 * Update the selected note2 and labels on the field.
 * @private
 */
Blockly.Fieldnote2.prototype.updateSelection_ = function() {
  var note2Num = Number(this.getText());

  // If the note2 is outside the currently displayed octave, update it
  if (this.displayedOctave_ == null ||
      note2Num > ((this.displayedOctave_ * 12) + 12) ||
      note2Num < (this.displayedOctave_ * 12)) {
    this.displayedOctave_ = Math.floor(note2Num / 12);
  }

  var index = this.note2NumToKeyIndex_(note2Num);

  // Clear the highlight on all keys
  this.keySVGs_.forEach(function(svg) {
    var isBlack = svg.getAttribute('data-isBlack');
    if (isBlack === 'true') {
      svg.setAttribute('fill', Blockly.Fieldnote2.BLACK_KEY_COLOR);
    } else {
      svg.setAttribute('fill', Blockly.Fieldnote2.WHITE_KEY_COLOR);
    }
  });
  // Set the highlight on the selected key
  if (this.keySVGs_[index]) {
    this.keySVGs_[index].setAttribute('fill', Blockly.Fieldnote2.KEY_SELECTED_COLOR);
    // Update the note2 name text
    var note2Name =  Blockly.Fieldnote2.KEY_INFO[index].name;
    this.note2NameText_.textContent = note2Name + ' (' + Math.floor(note2Num) + ')';
    // Update the low and high C note2 names
    var lowCNum = this.displayedOctave_ * 12;
    this.lowCText_.textContent = 'C(' + lowCNum + ')';
    this.highCText_.textContent = 'C(' + (lowCNum + 12) + ')';
  }
};

/**
 * Ensure that only a valid MIDI note2 number may be entered.
 * @param {string} text The user's text.
 * @return {?string} A string representing a valid note2 number, or null if invalid.
 */
Blockly.Fieldnote2.prototype.classValidator = function(text) {
  if (text === null) {
    return null;
  }
  var n = parseFloat(text || 0);
  if (isNaN(n)) {
    return null;
  }
  if (n < 0) {
    n = 0;
  }
  if (n > Blockly.Fieldnote2.MAX_note2) {
    n = Blockly.Fieldnote2.MAX_note2;
  }
  return String(n);
};

Blockly.Field.register('field_note2', Blockly.Fieldnote2);
