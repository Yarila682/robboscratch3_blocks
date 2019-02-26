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
Blockly.Blocks['otto_dura'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "LED_NUMS",
          "options": [
            [Blockly.Msg.OTTO_NOTE_NUM_1,                               '1'],
            [Blockly.Msg.OTTO_NOTE_NUM_2,                               '2'],
            [Blockly.Msg.OTTO_NOTE_NUM_3,                               '3'],
            [Blockly.Msg.OTTO_NOTE_NUM_4,                               '4'],
            [Blockly.Msg.OTTO_NOTE_NUM_5,                               '5'],
            [Blockly.Msg.OTTO_NOTE_NUM_6,                               '6'],
            [Blockly.Msg.OTTO_NOTE_NUM_7,                               '7'],
            [Blockly.Msg.OTTO_NOTE_NUM_8,                               '8']
          ]
        }
      ],
      "colour": Blockly.Colours.laboratory.secondary,
      "colourSecondary": Blockly.Colours.laboratory.secondary,
      "colourTertiary": Blockly.Colours.laboratory.tertiary,
      "extensions": ["output_string"]
    });
  }
};

Blockly.Blocks['otto_on_off'] = {
  init: function(locale) {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "ON_OFF",
          "options": [
            [Blockly.Msg.LAB_DIGITAL_PIN_STATE_ON,   '1'],
            [Blockly.Msg.LAB_DIGITAL_PIN_STATE_OFF,  '0']]

        }
      ],

      "colour": Blockly.Colours.otto.secondary,
      "colourSecondary": Blockly.Colours.otto.secondary,
      "colourTertiary": Blockly.Colours.otto.tertiary,
      "extensions": ["output_string"]
    });
  }
};

Blockly.Blocks['otto_servo_nums'] = {
  init: function(locale) {

    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "OTTO_SERVO",
          "options": [
            [Blockly.Msg.LEFT_LEG,    '0'],
            [Blockly.Msg.RIGHT_LEG,   '1'],
            [Blockly.Msg.LEFT_FOOT,   '2'],
            [Blockly.Msg.RIGHT_FOOT,  '3'],
            [Blockly.Msg.LEFT_HAND,   '4'],
            [Blockly.Msg.RIGHT_HAND,  '5']]
        }
      ],
      "colour": Blockly.Colours.otto.secondary,
      "colourSecondary": Blockly.Colours.otto.secondary,
      "colourTertiary": Blockly.Colours.otto.tertiary,
      "extensions": ["output_string"]
    });
  }
};

Blockly.Blocks['otto_servo_speed'] = {
  init: function(locale) {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "SERVO_SPEED",
          "options": [
            [Blockly.Msg.VERY_SLOW,   '5'],
            [Blockly.Msg.SLOW,        '3'],
            [Blockly.Msg.NORMALLY,    '2'],
            [Blockly.Msg.FAST,        '1'],
            [Blockly.Msg.VERY_FAST,   '0']]
        }
      ],
      "colour": Blockly.Colours.otto.secondary,
      "colourSecondary": Blockly.Colours.otto.secondary,
      "colourTertiary": Blockly.Colours.otto.tertiary,
      "extensions": ["output_string"]
    });
  }
};

Blockly.Blocks['otto_text_speed'] = {
  init: function(locale) {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "SERVO_SPEED",
          "options": [
            [Blockly.Msg.VERY_SLOW,   '15'],
            [Blockly.Msg.SLOW,        '10'],
            [Blockly.Msg.NORMALLY,    '7'],
            [Blockly.Msg.FAST,        '5'],
            [Blockly.Msg.VERY_FAST,   '3']]
        }
      ],
      "colour": Blockly.Colours.otto.secondary,
      "colourSecondary": Blockly.Colours.otto.secondary,
      "colourTertiary": Blockly.Colours.otto.tertiary,
      "extensions": ["output_string"]
    });
  }
};

Blockly.Blocks['otto_move_servo'] = {
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly.Msg.OTTO_MOVE_SERVO,
      "args0": [
        {
          "type": "input_value",
          "name": "OTTO_SERVO"
        },
        {
          "type": "input_value",
          "name": "SERVO_DIST"
        },
        {
          "type": "input_value",
          "name": "SERVO_SPEED"
        }
      ],
      "category": Blockly.Categories.otto,
      "extensions": ["colours_otto", "shape_statement"]
    });
  }
};

Blockly.Blocks['otto_move_servo_foot'] = {
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly.Msg.OTTO_MOVE_SERVO_FOOT,
      "args0": [
        {
          "type": "input_value",
          "name": "OTTO_LL"
        },
        {
          "type": "input_value",
          "name": "OTTO_RL"
        },
        {
          "type": "input_value",
          "name": "OTTO_LF"
        },
        {
          "type": "input_value",
          "name": "OTTO_RF"
        },
        {
          "type": "input_value",
          "name": "SERVO_SPEED"
        }
      ],
      "category": Blockly.Categories.otto,
      "extensions": ["colours_otto", "shape_statement"]
    });
  }
};

Blockly.Blocks['otto_move_servo_hand'] = {
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly.Msg.OTTO_MOVE_SERVO_HAND,
      "args0": [
        {
          "type": "input_value",
          "name": "OTTO_LH"
        },
        {
          "type": "input_value",
          "name": "OTTO_RH"
        },
        {
          "type": "input_value",
          "name": "SERVO_SPEED"
        }
      ],
      "category": Blockly.Categories.otto,
      "extensions": ["colours_otto", "shape_statement"]
    });
  }
};

Blockly.Blocks['otto_matrix_pix'] = {
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly.Msg.OTTO_MATRIX_PIX,
      "args0": [
        {
          "type": "input_value",
          "name": "MATRIX_STROK"
        },
        {
          "type": "input_value",
          "name": "MATRIX_STOLB"
        },
        {
          "type": "input_value",
          "name": "ON_OFF"
        }
      ],
      "category": Blockly.Categories.otto,
      "extensions": ["colours_otto", "shape_statement"]
    });
  }
};

Blockly.Blocks['otto_matrix_all_pix'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.OTTO_ALL_PIX,
      "args0": [
        {
          "type": "input_value",
          "name": "MATRIX"
        }
      ],
      "category": Blockly.Categories.otto,
      "extensions": ["colours_otto", "shape_statement"]
    });
  }
};

Blockly.Blocks['otto_text'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.OTTO_TEXTT,
      "args0": [
        {
          "type": "input_value",
          "name": "OTTO_TEXT"
        },
        {
          "type": "input_value",
          "name": "TEXT_SPEED"
        }
      ],
      "category": Blockly.Categories.otto,
      "extensions": ["colours_otto", "shape_statement"]
    });
  }
};

Blockly.Blocks['otto_led'] = {
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly.Msg.OTTO_LED,
      "args0": [
        {
          "type": "input_value",
          "name": "ON_OFF_R"
        },
        {
          "type": "input_value",
          "name": "ON_OFF_G"
        },
        {
          "type": "input_value",
          "name": "ON_OFF_B"
        }
      ],
      "category": Blockly.Categories.otto,
      "extensions": ["colours_otto", "shape_statement"]
    });
  }
};
/*
Blockly.Blocks['otto_directions'] = {
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
*/
Blockly.Blocks['otto_play_sound'] = {
  /**
   *
   * @this Blockly.Block
   *
   */
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly.Msg.OTTO_PLAY_SOUND,
      "args0": [
        {
          "type": "input_value",
          "name": "NOTE_TYPE"
        },
        {
          "type": "input_value",
          "name": "NOTE_DURA"
        }
      ],
      "category": Blockly.Categories.otto,
      "extensions": ["colours_otto", "shape_statement"]
    });
  }
};
/*
Blockly.Blocks['otto_move_flapping'] = {

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
*/
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

Blockly.Blocks['otto_hearing'] = {
  /**
   * Block to turn left.
   * @this Blockly.Block
   */
  init: function(locale) {
    this.jsonInit({

    "message0": Blockly.Msg.OTTO_GET_HEAR,

      "category": Blockly.Categories.otto,
      "extensions": ["colours_otto", "output_number"]
    });
  }

};
/*
Blockly.Blocks['otto_moonwalker'] = {

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
*/
