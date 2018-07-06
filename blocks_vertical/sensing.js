/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
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

'use strict';

goog.provide('Blockly.Blocks.sensing');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['sensing_touchingobject'] = {
  /**
   * Block to Report if its touching a Object.
   * @this Blockly.Block
   */
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly["Msg"][locale]["TOUCH"] ,
      "args0": [
        {
          "type": "input_value",
          "name": "TOUCHINGOBJECTMENU"
        }
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "output_boolean"]
    });
  }
};

Blockly.Blocks['sensing_touchingobjectmenu'] = {
  /**
   * "Touching [Object]" Block Menu.
   * @this Blockly.Block
   */
  init: function(locale) {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "TOUCHINGOBJECTMENU",
            "options": [
              [ Blockly["Msg"][locale]["MOUSE_POINTER"], '_mouse_'],
              [ Blockly["Msg"][locale]["EDGEE"], '_edge_']
            ]
          }
        ],
        "extensions": ["colours_sensing", "output_string"]
      });
  }
};

Blockly.Blocks['sensing_touchingcolor'] = {
  /**
   * Block to Report if its touching a certain Color.
   * @this Blockly.Block
   */
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly["Msg"][locale]["TOUCH_COLOR"],
      "args0": [
        {
          "type": "input_value",
          "name": "COLOR"
        }
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "output_boolean"]
    });
  }
};

Blockly.Blocks['sensing_coloristouchingcolor'] = {
  /**
   * Block to Report if a color is touching a certain Color.
   * @this Blockly.Block
   */
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly["Msg"][locale]["COLOR_TOUCH"] ,
      "args0": [
        {
          "type": "input_value",
          "name": "COLOR"
        },
        {
          "type": "input_value",
          "name": "COLOR2"
        }
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "output_boolean"]
    });
  }
};

Blockly.Blocks['sensing_distanceto'] = {
  /**
   * Block to Report distance to another Object.
   * @this Blockly.Block
   */
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly["Msg"][locale]["DISTANCE_TO"] ,
      "args0": [
        {
          "type": "input_value",
          "name": "DISTANCETOMENU"
        }
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "output_number"]
    });
  }
};

Blockly.Blocks['sensing_distancetomenu'] = {
  /**
   * "Distance to [Object]" Block Menu.
   * @this Blockly.Block
   */
  init: function(locale) {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "DISTANCETOMENU",
            "options": [
              [Blockly["Msg"][locale]["MOUSE_POINTER"], '_mouse_']
            ]
          }
        ],
        "extensions": ["colours_sensing", "output_string"]
      });
  }
};

Blockly.Blocks['sensing_askandwait'] = {
  /**
   * Block to ask a question and wait
   * @this Blockly.Block
   */
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly["Msg"][locale]["ASK_WAIT"] ,
      "args0": [
        {
          "type": "input_value",
          "name": "QUESTION"
        }
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "shape_statement"]
    });
  }
};

Blockly.Blocks['sensing_answer'] = {
  /**
   * Block to report answer
   * @this Blockly.Block
   */
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly["Msg"][locale]["ANSWER"] ,
      "category": Blockly.Categories.sensing,
      "checkboxInFlyout": true,
      "extensions": ["colours_sensing", "output_number"]
    });
  }
};

Blockly.Blocks['sensing_keypressed'] = {
  /**
   * Block to Report if a key is pressed.
   * @this Blockly.Block
   */
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly["Msg"][locale]["KEY_PRESS"] ,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "KEY_OPTION",
          "options": [
            // [localization, language-independent saved value]
            ['space', 'space'],
            ['←', 'left arrow'],
            ['→', 'right arrow'],
            ['↓', 'down arrow'],
            ['↑', 'up arrow'],
            ['любая', 'any'],
            ['a', 'a'],
            ['b', 'b'],
            ['c', 'c'],
            ['d', 'd'],
            ['e', 'e'],
            ['f', 'f'],
            ['g', 'g'],
            ['h', 'h'],
            ['i', 'i'],
            ['j', 'j'],
            ['k', 'k'],
            ['l', 'l'],
            ['m', 'm'],
            ['n', 'n'],
            ['o', 'o'],
            ['p', 'p'],
            ['q', 'q'],
            ['r', 'r'],
            ['s', 's'],
            ['t', 't'],
            ['u', 'u'],
            ['v', 'v'],
            ['w', 'w'],
            ['x', 'x'],
            ['y', 'y'],
            ['z', 'z'],
            ['0', '0'],
            ['1', '1'],
            ['2', '2'],
            ['3', '3'],
            ['4', '4'],
            ['5', '5'],
            ['6', '6'],
            ['7', '7'],
            ['8', '8'],
            ['9', '9']
          ]
        }
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "output_boolean"]
    });
  }
};

Blockly.Blocks['sensing_mousedown'] = {
  /**
   * Block to Report if the mouse is down.
   * @this Blockly.Block
   */
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly["Msg"][locale]["MOUSE_DOWN"] ,
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "output_boolean"]
    });
  }
};

Blockly.Blocks['sensing_mousex'] = {
  /**
   * Block to report mouse's x position
   * @this Blockly.Block
   */
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly["Msg"][locale]["MOUSE_X"] ,
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "output_number"]
    });
  }
};

Blockly.Blocks['sensing_mousey'] = {
  /**
   * Block to report mouse's y position
   * @this Blockly.Block
   */
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly["Msg"][locale]["MOUSE_Y"] ,
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "output_number"]
    });
  }
};

Blockly.Blocks['sensing_setdragmode'] = {
  /**
   * Block to set drag mode.
   * @this Blockly.Block
   */
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly["Msg"][locale]["I_WANT_TO_EAT"] ,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "DRAG_MODE",
          "options": [
            ['Перемещение есть', 'draggable'],
            ['Переещения нет', 'not draggable']
          ]
        }
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "shape_statement"]
    });
  }
};

Blockly.Blocks['sensing_loudness'] = {
  /**
   * Block to report loudness
   * @this Blockly.Block
   */
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly["Msg"][locale]["NO_BEER"] ,
      "category": Blockly.Categories.sensing,
      "checkboxInFlyout": true,
      "extensions": ["colours_sensing", "output_number"]
    });
  }
};

Blockly.Blocks['sensing_videoon'] = {
  /**
   * Block to Report the Video [Motion/Direction] of the Stage or Sprite (Not added Sprite's Option).
   * @this Blockly.Block
   */
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly["Msg"][locale]["NO_MONEY"] ,
      "args0": [
        {
          "type": "input_value",
          "name": "VIDEOONMENU1"
        },
        {
          "type": "input_value",
          "name": "VIDEOONMENU2"
        }
      ],
      "category": Blockly.Categories.sensing,
      "checkboxInFlyout": true,
      "extensions": ["colours_sensing", "output_number"]
    });
  }
};

Blockly.Blocks['sensing_videoonmenuone'] = {
  /**
   * "Video [Motion/Direction] of [Stage]" First Block Menu.
   * @this Blockly.Block
   */
  init: function(locale) {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "VIDEOONMENU1",
            "options": [
              [Blockly["Msg"][locale]["MOTION"], 'MOTION'],
              [Blockly["Msg"][locale]["DIRECTION"], 'DIRECTION']
            ]
          }
        ],
        "extensions": ["colours_sensing", "output_string"]
      });
  }
};
Blockly.Blocks['sensing_videoonmenutwo'] = {
  /**
   * "Video [Motion/Direction] of [Stage]" Second Block Menu.
   * @this Blockly.Block
   */
  init: function(locale) {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "VIDEOONMENU2",
            "options": [
              [Blockly["Msg"][locale]["STAGE"], 'STAGE']
            ]
          }
        ],
        "extensions": ["colours_sensing", "output_string"]
      });
  }
};

Blockly.Blocks['sensing_videotoggle'] = {
  /**
   * Block to toggle video
   * @this Blockly.Block
   */
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly["Msg"][locale]["TOO_MUCH_TRENSLATE"] ,
      "args0": [
        {
          "type": "input_value",
          "name": "VIDEOTOGGLEMENU"
        }
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "shape_statement"]
    });
  }
};

Blockly.Blocks['sensing_videotogglemenu'] = {
  /**
   * "Turn Video [On/Off/On-flipped]" Block Menu.
   * @this Blockly.Block
   */
  init: function(locale) {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "VIDEOTOGGLEMENU",
            "options": [
              ['вкл', 'ON'],
              ['выкл', 'OFF'],
              ['on-flipped', 'ONFLIPPED']
            ]
          }
        ],
        "extensions": ["colours_sensing", "output_string"]
      });
  }
};

Blockly.Blocks['sensing_setvideotransparency'] = {
  /**
   * Block to set the video transparency to a certain percent
   * @this Blockly.Block
   */
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly["Msg"][locale]["SET_VIDEO"] ,
      "args0": [
        {
          "type": "input_value",
          "name": "TRANSPARENCY"
        }
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "shape_statement"]
    });
  }
};

Blockly.Blocks['sensing_timer'] = {
  /**
   * Block to report timer
   * @this Blockly.Block
   */
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly["Msg"][locale]["TIMER"] ,
      "category": Blockly.Categories.sensing,
      "checkboxInFlyout": true,
      "extensions": ["colours_sensing", "output_number"]
    });
  }
};

Blockly.Blocks['sensing_resettimer'] = {
  /**
   * Block to reset timer
   * @this Blockly.Block
   */
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly["Msg"][locale]["RES_TIMER"],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "shape_statement"]
    });
  }
};

Blockly.Blocks['sensing_of_object_menu'] = {
  /**
   * "* of _" object menu.
   * @this Blockly.Block
   */
  init: function(locale) {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "OBJECT",
            "options": [
              ['Sprite1', 'Sprite1'],
              ['Stage', '_stage_']
            ]
          }
        ],
        "extensions": ["colours_sensing", "output_string"]
      });
  }
};


Blockly.Blocks['sensing_of'] = {
  /**
   * Block to report properties of sprites.
   * @this Blockly.Block
   */
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly["Msg"][locale]["IZ"],
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PROPERTY",
          "options": [
            [Blockly["Msg"][locale]["POSITION_X"], 'x position'],
            [Blockly["Msg"][locale]["POSITION_Y"], 'y position'],
            [Blockly["Msg"][locale]["DIRECTION"], 'direction'],
            [Blockly["Msg"][locale]["COST"], 'costume #'],
            [Blockly["Msg"][locale]["NC"], 'costume name'],
            [Blockly["Msg"][locale]["SIZE"], 'size'],
            [Blockly["Msg"][locale]["VOLUME"], 'volume'],
            [Blockly["Msg"][locale]["FON"], 'backdrop #'],
            [Blockly["Msg"][locale]["FONNAME"], 'backdrop name']
          ]
        },
        {
          "type": "input_value",
          "name": "OBJECT"
        }
      ],
      "output": true,
      "category": Blockly.Categories.sensing,
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "extensions": ["colours_sensing"]
    });
  }
};

Blockly.Blocks['sensing_current'] = {
  /**
   * Block to Report the current option.
   * @this Blockly.Block
   */
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly["Msg"][locale]["CURR"] ,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "CURRENTMENU",
          "options": [
            [Blockly["Msg"][locale]["YEAR"], 'YEAR'],
            [Blockly["Msg"][locale]["MONTH"], 'MONTH'],
            [Blockly["Msg"][locale]["DATA"], 'DATE'],
            [Blockly["Msg"][locale]["DOW"], 'DAYOFWEEK'],
            [Blockly["Msg"][locale]["HOUR"], 'HOUR'],
            [Blockly["Msg"][locale]["MIN"], 'MINUTE'],
            [Blockly["Msg"][locale]["SEC"], 'SECOND']
          ]
        }
      ],
      "category": Blockly.Categories.sensing,
      "checkboxInFlyout": true,
      "extensions": ["colours_sensing", "output_number"]
    });
  }
};

Blockly.Blocks['sensing_dayssince2000'] = {
  /**
   * Block to report days since 2000
   * @this Blockly.Block
   */
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly["Msg"][locale]["DAYS"] ,
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "output_number"]
    });
  }
};

Blockly.Blocks['sensing_username'] = {
  /**
   * Block to report user's username
   * @this Blockly.Block
   */
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly["Msg"][locale]["USERNAME"] ,
      "category": Blockly.Categories.sensing,
      "checkboxInFlyout": true,
      "extensions": ["colours_sensing", "output_number"]
    });
  }
};
