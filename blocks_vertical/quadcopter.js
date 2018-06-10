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
  init: function() {

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
  init: function() {

    this.jsonInit({
      "message0":  Blockly.Msg.COPTER_LAND,

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
  init: function() {

    this.jsonInit({
      "message0":  Blockly.Msg.COPTER_STATUS,

      "category": Blockly.Categories.quadcopter,
      "extensions": ["colours_quadcopter", "output_number"]
    });
  }
};



Blockly.Blocks['copter_fly_forward'] = {
  /**
   * Block to land.
   * @this Blockly.Block
   */
  init: function() {

    this.jsonInit({
      "message0":  Blockly.Msg.COPTER_FLY_FORWARD,
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

Blockly.Blocks['copter_fly_backward'] = {
  /**
   * Block to land.
   * @this Blockly.Block
   */
  init: function() {

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
  init: function() {

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
  init: function() {

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
  init: function() {

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
  init: function() {

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
  init: function() {

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
  init: function() {

    this.jsonInit({
      "message0":  Blockly.Msg.COPTER_Z_COORD,

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
  init: function() {

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
  init: function() {

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
  init: function() {

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

Blockly.Blocks['copter_set_direction'] = {
  /**
   * Block to land.
   * @this Blockly.Block
   */
  init: function() {

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
  init: function() {

    this.jsonInit({
      "message0":  Blockly.Msg.COPTER_DIRECTION,

      "category": Blockly.Categories.quadcopter,
      "extensions": ["colours_quadcopter", "output_number"]
    });
  }
};
