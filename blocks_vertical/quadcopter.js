'use strict';

goog.provide('Blockly.Blocks.quadcopter');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');





Blockly.Blocks['copter_fly_up'] = {
  /**
   * Block to fly up.
   * @this Blockly.Block
   */
  init: function(locale) {



  //  console.log("copter_fly_up init: " + locale);

    this.jsonInit({
      "message0":  Blockly.Msg.COPTER_FLY_UP,

      "category": Blockly.Categories.quadcopter,
      "extensions": ["colours_quadcopter", "shape_statement"]
    });
  }
};

Blockly.Blocks['copter_land'] = {
  /**
   * Block to land.
   * @this Blockly.Block
   */
  init: function(locale) {

    this.jsonInit({
      "message0":  Blockly.Msg.COPTER_LAND,

      "category": Blockly.Categories.quadcopter,
      "extensions": ["colours_quadcopter", "shape_statement"]
    });
  }
};

Blockly.Blocks['copter_stop'] = {
  /**
   * Block to land.
   * @this Blockly.Block
   */
  init: function(locale) {

    this.jsonInit({
      "message0":  Blockly.Msg.COPTER_STOP,

      "category": Blockly.Categories.quadcopter,
      "extensions": ["colours_quadcopter", "shape_statement"]
    });
  }
};

Blockly.Blocks['copter_status'] = {
  /**
   * Block to land.
   * @this Blockly.Block
   */
  init: function(locale) {

    this.jsonInit({
      "message0":  Blockly.Msg.COPTER_STATUS,

      "category": Blockly.Categories.quadcopter,
      "extensions": ["colours_quadcopter", "output_number"]
    });
  }
};



Blockly.Blocks['copter_fly_distance'] = {
  /**
   * Block to land.
   * @this Blockly.Block
   */
  init: function(locale) {

    this.jsonInit({
      "message0":  Blockly.Msg.COPTER_FLY_DISTANCE,
      "args0": [
        {
          "type": "input_value",
          "name": "CENTIMETERS"
        }
      ],
      "category": Blockly.Categories.quadcopter,
      "extensions": ["colours_quadcopter", "shape_statement"]
    });
  }
};

Blockly.Blocks['copter_fly_time'] = {
  /**
   * Block to land.
   * @this Blockly.Block
   */
  init: function(locale) {

    this.jsonInit({
      "message0":  Blockly.Msg.COPTER_FLY_TIME,
      "args0": [
        {
          "type": "input_value",
          "name": "SECONDS"
        }
      ],
      "category": Blockly.Categories.quadcopter,
      "extensions": ["colours_quadcopter", "shape_statement"]
    });
  }
};

Blockly.Blocks['copter_fly_for_time_with_speed'] = {
  /**
   * Block to land.
   * @this Blockly.Block
   */
  init: function(locale) {

    this.jsonInit({
      "message0":  Blockly.Msg.COPTER_FLY_FOR_TIME_WITH_SPEED,
      "args0": [
        {
          "type": "input_value",
          "name": "SECONDS"
        },
        {
          "type": "input_value",
          "name": "X_SPEED"
        },
        {
          "type": "input_value",
          "name": "Y_SPEED"
        },
      ],
      "category": Blockly.Categories.quadcopter,
      "extensions": ["colours_quadcopter", "shape_statement"]
    });
  }
};

Blockly.Blocks['copter_fly_backward'] = {
  /**
   * Block to land.
   * @this Blockly.Block
   */
  init: function(locale) {

    this.jsonInit({
      "message0":  Blockly.Msg.COPTER_FLY_BACKWARD,
      "args0": [
        {
          "type": "input_value",
          "name": "CENTIMETERS"
        }
      ],
      "category": Blockly.Categories.quadcopter,
      "extensions": ["colours_quadcopter", "shape_statement"]
    });
  }
};

Blockly.Blocks['copter_change_x_by'] = {
  /**
   * Block to land.
   * @this Blockly.Block
   */
  init: function(locale) {

    this.jsonInit({
      "message0":  Blockly.Msg.COPTER_CHANGE_X_BY,
      "args0": [
        {
          "type": "input_value",
          "name": "DISTANCE_DELTA"
        }
      ],
      "category": Blockly.Categories.quadcopter,
      "extensions": ["colours_quadcopter", "shape_statement"]
    });
  }
};

Blockly.Blocks['copter_change_y_by'] = {
  /**
   * Block to land.
   * @this Blockly.Block
   */
  init: function(locale) {

    this.jsonInit({
      "message0":  Blockly.Msg.COPTER_CHANGE_Y_BY,
      "args0": [
        {
          "type": "input_value",
          "name": "DISTANCE_DELTA"
        }
      ],
      "category": Blockly.Categories.quadcopter,
      "extensions": ["colours_quadcopter", "shape_statement"]
    });
  }
};

Blockly.Blocks['copter_change_z_by'] = {
  /**
   * Block to land.
   * @this Blockly.Block
   */
  init: function(locale) {

    this.jsonInit({
      "message0":  Blockly.Msg.COPTER_CHANGE_Z_BY,
      "args0": [
        {
          "type": "input_value",
          "name": "DISTANCE_DELTA"
        }
      ],
      "category": Blockly.Categories.quadcopter,
      "extensions": ["colours_quadcopter", "shape_statement"]
    });
  }
};

Blockly.Blocks['copter_x_coord'] = {
  /**
   * Block to land.
   * @this Blockly.Block
   */
  init: function(locale) {

    this.jsonInit({
      "message0":  Blockly.Msg.COPTER_X_COORD,

      "category": Blockly.Categories.quadcopter,
      "extensions": ["colours_quadcopter", "output_number"]
    });
  }
};

Blockly.Blocks['copter_y_coord'] = {
  /**
   * Block to land.
   * @this Blockly.Block
   */
  init: function(locale) {

    this.jsonInit({
      "message0":  Blockly.Msg.COPTER_Y_COORD,

      "category": Blockly.Categories.quadcopter,
      "extensions": ["colours_quadcopter", "output_number"]
    });
  }
};

Blockly.Blocks['copter_z_coord'] = {
  /**
   * Block to land.
   * @this Blockly.Block
   */
  init: function(locale) {

    this.jsonInit({
      "message0":  Blockly.Msg.COPTER_Z_COORD,

      "category": Blockly.Categories.quadcopter,
      "extensions": ["colours_quadcopter", "output_number"]
    });
  }
};

Blockly.Blocks['copter_yaw'] = {
  /**
   * Block to land.
   * @this Blockly.Block
   */
  init: function(locale) {

    this.jsonInit({
      "message0":  Blockly.Msg.COPTER_YAW,

      "category": Blockly.Categories.quadcopter,
      "extensions": ["colours_quadcopter", "output_number"]
    });
  }
};

Blockly.Blocks['copter_fly_for_seconds_to_coords'] = {
  /**
   * Block to land.
   * @this Blockly.Block
   */
  init: function(locale) {

    this.jsonInit({
      "message0":  Blockly.Msg.COPTER_FLY_FOR_SECONDS_TO_COORDS,
      "args0": [
        {
          "type": "input_value",
          "name": "SECONDS"
        },
        {
          "type": "input_value",
          "name": "X_COORD"
        },
        {
          "type": "input_value",
          "name": "Y_COORD"
        },
        {
          "type": "input_value",
          "name": "Z_COORD"
        }
      ],
      "category": Blockly.Categories.quadcopter,
      "extensions": ["colours_quadcopter", "shape_statement"]
    });
  }
};

Blockly.Blocks['copter_fly_to_coords'] = {
  /**
   * Block to land.
   * @this Blockly.Block
   */
  init: function(locale) {

    this.jsonInit({
      "message0":  Blockly.Msg.COPTER_FLY_TO_COORDS,
      "args0": [

        {
          "type": "input_value",
          "name": "X_COORD"
        },
        {
          "type": "input_value",
          "name": "Y_COORD"
        },
        {
          "type": "input_value",
          "name": "Z_COORD"
        }
      ],
      "category": Blockly.Categories.quadcopter,
      "extensions": ["colours_quadcopter", "shape_statement"]
    });
  }
};

Blockly.Blocks['copter_rotate'] = {
  /**
   * Block to land.
   * @this Blockly.Block
   */
  init: function(locale) {

    this.jsonInit({
      "message0":  Blockly.Msg.COPTER_ROTATE,
      "args0": [

        {
          "type": "input_value",
          "name": "DEGREES"
        }
      ],
      "category": Blockly.Categories.quadcopter,
      "extensions": ["colours_quadcopter", "shape_statement"]
    });
  }
};

Blockly.Blocks['copter_directions'] = {
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
          "name": "COPTER_DIRECTIONS",
          "options": [
            [Blockly.Msg.COPTER_DIRECTION_FORWARD,   'direction_forward'],
            [Blockly.Msg.COPTER_DIRECTION_BACKWARD,  'direction_backward'],
            [Blockly.Msg.COPTER_DIRECTION_LEFT,      'direction_left'],
            [Blockly.Msg.COPTER_DIRECTION_RIGHT,     'direction_right']
          ]
        }
      ],

      "colour": Blockly.Colours.quadcopter.secondary,
      "colourSecondary": Blockly.Colours.quadcopter.secondary,
      "colourTertiary": Blockly.Colours.quadcopter.tertiary,
      "extensions": ["output_string"]
    });
  }
};

Blockly.Blocks['copter_set_direction'] = {
  /**
   * Block to land.
   * @this Blockly.Block
   */
  init: function(locale) {

    this.jsonInit({
      "message0":  Blockly.Msg.COPTER_SET_DIRECTION,
      "args0": [

        {
          "type": "input_value",
          "name": "DIRECTION"
        }
      ],
      "category": Blockly.Categories.quadcopter,
      "extensions": ["colours_quadcopter", "shape_statement"]
    });
  }
};

Blockly.Blocks['copter_direction'] = {
  /**
   * Block to land.
   * @this Blockly.Block
   */
  init: function(locale) {

    this.jsonInit({
      "message0":  Blockly.Msg.COPTER_DIRECTION,

      "category": Blockly.Categories.quadcopter,
      "extensions": ["colours_quadcopter", "output_number"]
    });
  }
};
