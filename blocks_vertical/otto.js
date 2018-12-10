'use strict';

goog.provide('Blockly.Blocks.otto');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

// [Blockly.Msg.DIRECTION_FORWARD,   'direction_forward'],
// [Blockly.Msg.DIRECTION_BACKWARD,  'direction_backward'],
// [Blockly.Msg.DIRECTION_LEFT,      'direction_left'],
// [Blockly.Msg.DIRECTION_RIGHT,     'direction_right']

// ['direction_forward',   'direction_forward'],
// ['direction_backward',  'direction_backward'],
// ['direction_left',      'direction_left'],
// ['direction_right',     'direction_right']

Blockly.Blocks['otto_directions'] = {
  /**
   * Block to motors off.
   * @this Blockly.Block
   */
  init: function(locale) {

    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "OTTO_DIRECTION",
          "options": [
            [Blockly.Msg.DIRECTION_FORWARD,   'direction_forward'],
            [Blockly.Msg.DIRECTION_BACKWARD,  'direction_backward']]

        }
      ],

      "colour": Blockly.Colours.otto.secondary,
      "colourSecondary": Blockly.Colours.otto.secondary,
      "colourTertiary": Blockly.Colours.otto.tertiary,
      "extensions": ["output_string"]
    });
  }
};

Blockly.Blocks['otto_lr_directions'] = {
  /**
   * Block to motors off.
   * @this Blockly.Block
   */
  init: function(locale) {

    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "OTTO_DIRECTION",
          "options": [
            [Blockly.Msg.DIRECTION_LEFT,   'direction_left'],
            [Blockly.Msg.DIRECTION_RIGHT,  'direction_right']]

        }
      ],

      "colour": Blockly.Colours.otto.secondary,
      "colourSecondary": Blockly.Colours.otto.secondary,
      "colourTertiary": Blockly.Colours.otto.tertiary,
      "extensions": ["output_string"]
    });
  }
};

Blockly.Blocks['otto_move_walk'] = {
  /**
   *
   * @this Blockly.Block
   *
   */
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly.Msg.OTTO_MOVE_STYLE_WALK,
      "args0": [
        {
          "type": "input_value",
          "name": "OTTO_DIRECTION"
        },
        {
          "type": "input_value",
          "name": "STEPS"
        },
        {
          "type": "input_value",
          "name": "STEP_DURATION"
        }
      ],
      "category": Blockly.Categories.otto,
      "extensions": ["colours_otto", "shape_statement"]
    });
  }
};

Blockly.Blocks['otto_move_flapping'] = {
  /**
   *
   * @this Blockly.Block
   *
   */
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly.Msg.OTTO_MOVE_STYLE_FLAPPING,
      "args0": [
        {
          "type": "input_value",
          "name": "OTTO_DIRECTION"
        },
        {
          "type": "input_value",
          "name": "STEPS"
        },
        {
          "type": "input_value",
          "name": "STEP_DURATION"
        },
        {
          "type": "input_value",
          "name": "STEP_HEIGHT"
        }
      ],
      "category": Blockly.Categories.otto,
      "extensions": ["colours_otto", "shape_statement"]
    });
  }
};

Blockly.Blocks['otto_move_crusaito'] = {
  /**
   *
   * @this Blockly.Block
   *  ,
   */
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly.Msg.OTTO_MOVE_STYLE_CRUSAITO,
      "args0": [
        {
          "type": "input_value",
          "name": "OTTO_DIRECTION"
        },
        {
          "type": "input_value",
          "name": "STEPS"
        },
        {
          "type": "input_value",
          "name": "STEP_DURATION"
        },
        {
          "type": "input_value",
          "name": "STEP_HEIGHT"
        }
      ],
      "category": Blockly.Categories.otto,
      "extensions": ["colours_otto", "shape_statement"]
    });
  }
};

Blockly.Blocks['otto_distance'] = {
  /**
   * Block to turn left.
   * @this Blockly.Block
   */
  init: function(locale) {
    this.jsonInit({

    "message0": Blockly.Msg.OTTO_GET_DISTANCE,

      "category": Blockly.Categories.otto,
      "extensions": ["colours_otto", "output_number"]
    });
  }

};

Blockly.Blocks['otto_moonwalker'] = {
  /**
   *
   * @this Blockly.Block
   *  ,
   */
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly.Msg.OTTO_MOONWALKER,
      "args0": [
        {
          "type": "input_value",
          "name": "OTTO_DIRECTION"
        },
        {
          "type": "input_value",
          "name": "STEPS"
        },
        {
          "type": "input_value",
          "name": "STEP_DURATION"
        },
        {
          "type": "input_value",
          "name": "STEP_HEIGHT"
        }
      ],
      "category": Blockly.Categories.otto,
      "extensions": ["colours_otto", "shape_statement"]
    });
  }
};

Blockly.Blocks['otto_shake_leg'] = {
  /**
   *
   * @this Blockly.Block
   *  ,
   */
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly.Msg.OTTO_SHAKE_LEG,
      "args0": [
        {
          "type": "input_value",
          "name": "OTTO_DIRECTION"
        },
        {
          "type": "input_value",
          "name": "STEPS"
        },
        {
          "type": "input_value",
          "name": "STEP_DURATION"
        }
      ],
      "category": Blockly.Categories.otto,
      "extensions": ["colours_otto", "shape_statement"]
    });
  }
};

Blockly.Blocks['otto_turn'] = {
  /**
   *
   * @this Blockly.Block
   *  ,
   */
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly.Msg.OTTO_TURN,
      "args0": [
        {
          "type": "input_value",
          "name": "OTTO_DIRECTION"
        },
        {
          "type": "input_value",
          "name": "STEPS"
        },
        {
          "type": "input_value",
          "name": "STEP_DURATION"
        }
      ],
      "category": Blockly.Categories.otto,
      "extensions": ["colours_otto", "shape_statement"]
    });
  }
};

Blockly.Blocks['otto_bend'] = {
  /**
   *
   * @this Blockly.Block
   *  ,
   */
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly.Msg.OTTO_BEND,
      "args0": [
        {
          "type": "input_value",
          "name": "OTTO_DIRECTION"
        },
        {
          "type": "input_value",
          "name": "STEPS"
        },
        {
          "type": "input_value",
          "name": "STEP_DURATION"
        }
      ],
      "category": Blockly.Categories.otto,
      "extensions": ["colours_otto", "shape_statement"]
    });
  }
};

Blockly.Blocks['otto_ascending_turn'] = {
  /**
   *
   * @this Blockly.Block
   *  ,
   */
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly.Msg.OTTO_ASCENDING_TURN,
      "args0": [

        {
          "type": "input_value",
          "name": "STEPS"
        },
        {
          "type": "input_value",
          "name": "STEP_DURATION"
        },
        {
          "type": "input_value",
          "name": "STEP_HEIGHT"
        }
      ],
      "category": Blockly.Categories.otto,
      "extensions": ["colours_otto", "shape_statement"]
    });
  }
};

Blockly.Blocks['otto_jitter'] = {
  /**
   *
   * @this Blockly.Block
   *  ,
   */
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly.Msg.OTTO_JITTER,
      "args0": [

        {
          "type": "input_value",
          "name": "STEPS"
        },
        {
          "type": "input_value",
          "name": "STEP_DURATION"
        },
        {
          "type": "input_value",
          "name": "STEP_HEIGHT"
        }
      ],
      "category": Blockly.Categories.otto,
      "extensions": ["colours_otto", "shape_statement"]
    });
  }
};

Blockly.Blocks['otto_jump'] = {
  /**
   *
   * @this Blockly.Block
   *  ,
   */
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly.Msg.OTTO_JUMP,
      "args0": [

        {
          "type": "input_value",
          "name": "STEPS"
        },
        {
          "type": "input_value",
          "name": "STEP_DURATION"
        }
      ],
      "category": Blockly.Categories.otto,
      "extensions": ["colours_otto", "shape_statement"]
    });
  }
};

Blockly.Blocks['otto_tiptoe_swing'] = {
  /**
   *
   * @this Blockly.Block
   *  ,
   */
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly.Msg.OTTO_TIPTOE_SWING,
      "args0": [

        {
          "type": "input_value",
          "name": "STEPS"
        },
        {
          "type": "input_value",
          "name": "STEP_DURATION"
        },
        {
          "type": "input_value",
          "name": "STEP_HEIGHT"
        }
      ],
      "category": Blockly.Categories.otto,
      "extensions": ["colours_otto", "shape_statement"]
    });
  }
};

Blockly.Blocks['otto_swing'] = {
  /**
   *
   * @this Blockly.Block
   *  ,
   */
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly.Msg.OTTO_SWING,
      "args0": [

        {
          "type": "input_value",
          "name": "STEPS"
        },
        {
          "type": "input_value",
          "name": "STEP_DURATION"
        },
        {
          "type": "input_value",
          "name": "STEP_HEIGHT"
        }
      ],
      "category": Blockly.Categories.otto,
      "extensions": ["colours_otto", "shape_statement"]
    });
  }
};

Blockly.Blocks['otto_updown'] = {
  /**
   *
   * @this Blockly.Block
   *  ,
   */
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly.Msg.OTTO_UPDOWN,
      "args0": [

        {
          "type": "input_value",
          "name": "STEPS"
        },
        {
          "type": "input_value",
          "name": "STEP_DURATION"
        },
        {
          "type": "input_value",
          "name": "STEP_HEIGHT"
        }
      ],
      "category": Blockly.Categories.otto,
      "extensions": ["colours_otto", "shape_statement"]
    });
  }
};
