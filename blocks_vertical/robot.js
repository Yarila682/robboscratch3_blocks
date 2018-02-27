'use strict';

goog.provide('Blockly.Blocks.robot');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');






Blockly.Blocks['robot_motors_on_for_seconds'] = {
  /**
   * Block to motors on for some seconds.
   * @this Blockly.Block
   */
  init: function() {
  //  console.log("MOTORS_ON_FOR_SECONDS: " + Blockly.Msg.MOTORS_ON_FOR_SECONDS);
    this.jsonInit({
      "message0": /*"move %1 steps",*/ Blockly.Msg.MOTORS_ON_FOR_SECONDS,
      "args0": [
        {
          "type": "input_value",
          "name": "SECONDS"
        }
      ],
      "category": Blockly.Categories.robot,
      "extensions": ["colours_robot", "shape_statement"]
    });
  }
};


Blockly.Blocks['robot_motors_on'] = {
  /**
   * Block to motors on.
   * @this Blockly.Block
   */
  init: function() {

    this.jsonInit({
      "message0":  Blockly.Msg.MOTORS_ON,

      "category": Blockly.Categories.robot,
      "extensions": ["colours_robot", "shape_statement"]
    });
  }
};

Blockly.Blocks['robot_motors_off'] = {
  /**
   * Block to motors off.
   * @this Blockly.Block
   */
  init: function() {

    this.jsonInit({
      "message0":  Blockly.Msg.MOTORS_OFF,

      "category": Blockly.Categories.robot,
      "extensions": ["colours_robot", "shape_statement"]
    });
  }
};

Blockly.Blocks['robot_directions'] = {
  /**
   * Block to motors off.
   * @this Blockly.Block
   */
  init: function() {

    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "ROBOT_DIRECTION",
          "options": [
            [Blockly.Msg.DIRECTION_FORWARD,   'direction_forward'],
            [Blockly.Msg.DIRECTION_BACKWARD,  'direction_backward'],
            [Blockly.Msg.DIRECTION_LEFT,      'direction_left'],
            [Blockly.Msg.DIRECTION_RIGHT,     'direction_right']
          ]
        }
      ],

      "colour": Blockly.Colours.robot.secondary,
      "colourSecondary": Blockly.Colours.robot.secondary,
      "colourTertiary": Blockly.Colours.robot.tertiary,
      "extensions": ["output_string"]
    });
  }
};

Blockly.Blocks['robot_set_direction_to'] = {
  /**
   * Block to switch the sprite's costume to the selected one.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SET_ROBOT_DIRECTION,
      "args0": [
        {
          "type": "input_value",
          "name": "ROBOT_DIRECTION"
        }
      ],
      "category": Blockly.Categories.robot,
      "extensions": ["colours_robot", "shape_statement"]
    });
  }
};

Blockly.Blocks['robot_motors_on_for_steps'] = {
  /**
   * Block to switch the sprite's costume to the selected one.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SET_ROBOT_MOTORS_ON_FOR_STEPS,
      "args0": [
        {
          "type": "input_value",
          "name": "STEPS"
        }
      ],
      "category": Blockly.Categories.robot,
      "extensions": ["colours_robot", "shape_statement"]
    });
  }
};

Blockly.Blocks['robot_reset_trip_meters'] = {
  /**
   * Block to motors off.
   * @this Blockly.Block
   */
  init: function() {

    this.jsonInit({
      "message0":  Blockly.Msg.ROBOT_RESET_TRIP_METERS,

      "category": Blockly.Categories.robot,
      "extensions": ["colours_robot", "shape_statement"]
    });
  }
};

Blockly.Blocks['robot_turnright'] = {
  /**
   * Block to turn right.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ROBOT_TURN_RIGHT,
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "rotate-right.svg",
          "width": 24,
          "height": 24
        },
        {
          "type": "input_value",
          "name": "DEGREES"
        }
      ],
      "category": Blockly.Categories.robot,
      "extensions": ["colours_robot", "shape_statement"]
    });
  }
};

Blockly.Blocks['robot_turnleft'] = {
  /**
   * Block to turn left.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ROBOT_TURN_LEFT,
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "rotate-left.svg",
          "width": 24,
          "height": 24
        },
        {
          "type": "input_value",
          "name": "DEGREES"
        }
      ],
      "category": Blockly.Categories.robot,
      "extensions": ["colours_robot", "shape_statement"]
    });
  }
};

Blockly.Blocks['robot_set_motors_power'] = {
  /**
   * Block to turn left.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ROBOT_SET_MOTORS_POWER,
      "args0": [
        {
          "type": "input_value",
          "name": "POWER"
        }
      ],
      "category": Blockly.Categories.robot,
      "extensions": ["colours_robot", "shape_statement"]
    });
  }
};

Blockly.Blocks['robot_set_motors_power_left_right_separately'] = {
  /**
   * Block to turn left.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ROBOT_SET_MOTORS_POWER_LEFT_RIGHT_SEPARATELY,
      "args0": [
        {
          "type": "input_value",
          "name": "POWER_LEFT"
        },
        {
          "type": "input_value",
          "name": "POWER_RIGHT"
        }
      ],
      "category": Blockly.Categories.robot,
      "extensions": ["colours_robot", "shape_statement"]
    });
  }
};

Blockly.Blocks['robot_one_motor_directions'] = {
  /**
   * Block to motors off.
   * @this Blockly.Block
   */
  init: function() {

    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "ROBOT_ONE_MOTOR_DIRECTION",
          "options": [
            [Blockly.Msg.DIRECTION_FORWARD,   'direction_forward'],
            [Blockly.Msg.DIRECTION_BACKWARD,  'direction_backward']

          ]
        }
      ],

      "colour": Blockly.Colours.robot.secondary,
      "colourSecondary": Blockly.Colours.robot.secondary,
      "colourTertiary": Blockly.Colours.robot.tertiary,
      "extensions": ["output_string"]
    });
  }
};

Blockly.Blocks['robot_set_motors_left_right_power_and_direction_separately'] = {
  /**
   * Block to turn left.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ROBOT_SET_MOTORS_LEFT_RIGHT_POWER_AND_DIRECTION_SEPARATELY,
      "args0": [
        {
          "type": "input_value",
          "name": "ROBOT_LEFT_MOTOR_DIRECTION"
        },
        {
          "type": "input_value",
          "name": "ROBOT_RIGHT_MOTOR_DIRECTION"
        },
        {
          "type": "input_value",
          "name": "POWER_LEFT"
        },
        {
          "type": "input_value",
          "name": "POWER_RIGHT"
        }
      ],
      "category": Blockly.Categories.robot,
      "extensions": ["colours_robot", "shape_statement"]
    });
  }

};

Blockly.Blocks['robot_sensors'] = {
  /**
   * Block to motors off.
   * @this Blockly.Block
   */
  init: function() {

    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "ROBOT_SENSORS",
          "options": [
            [Blockly.Msg.ROBOT_SENSOR1,                   'sensor1'],
            [Blockly.Msg.ROBOT_SENSOR2,                   'sensor2'],
            [Blockly.Msg.ROBOT_SENSOR3,                   'sensor3'],
            [Blockly.Msg.ROBOT_SENSOR4,                   'sensor4'],
            [Blockly.Msg.ROBOT_SENSOR5,                   'sensor5'],
            [Blockly.Msg.ROBOT_SENSOR_TRIP_METER_LEFT,    'sensor_trip_meter_left'],
            [Blockly.Msg.ROBOT_SENSOR_TRIP_METER_RIGHT,   'sensor_trip_meter_right'],




          ]
        }
      ],

      "colour": Blockly.Colours.robot.secondary,
      "colourSecondary": Blockly.Colours.robot.secondary,
      "colourTertiary": Blockly.Colours.robot.tertiary,
      "extensions": ["output_string"]
    });
  }
};

Blockly.Blocks['robot_get_sensor_data'] = {
  /**
   * Block to turn left.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({

    "message0": Blockly.Msg.ROBOT_GET_SENSOR_DATA,
    "args0": [
      {
        "type": "input_value",
        "name": "ROBOT_SENSORS"
      }
    ],
      "category": Blockly.Categories.robot,
      "extensions": ["colours_robot", "output_number"]
    });
  }

};

Blockly.Blocks['robot_sensors_for_rgb'] = {
  /**
   * Block to motors off.
   * @this Blockly.Block
   */
  init: function() {

    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "ROBOT_SENSORS_FOR_RGB",
          "options": [
            [Blockly.Msg.ROBOT_SENSOR1,                   'sensor1'],
            [Blockly.Msg.ROBOT_SENSOR2,                   'sensor2'],
            [Blockly.Msg.ROBOT_SENSOR3,                   'sensor3'],
            [Blockly.Msg.ROBOT_SENSOR4,                   'sensor4'],
            [Blockly.Msg.ROBOT_SENSOR5,                   'sensor5'],





          ]
        }
      ],

      "colour": Blockly.Colours.robot.secondary,
      "colourSecondary": Blockly.Colours.robot.secondary,
      "colourTertiary": Blockly.Colours.robot.tertiary,
      "extensions": ["output_string"]
    });
  }
};

Blockly.Blocks['rgb_values'] = {
  /**
   * Block to motors off.
   * @this Blockly.Block
   */
  init: function() {

    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "RGB_VALUES",
          "options": [
            [Blockly.Msg.ROBOT_RGB_RED,                     'red'],
            [Blockly.Msg.ROBOT_RGB_GREEN,                   'green'],
            [Blockly.Msg.ROBOT_RGB_BLUE,                    'blue']






          ]
        }
      ],

      "colour": Blockly.Colours.robot.secondary,
      "colourSecondary": Blockly.Colours.robot.secondary,
      "colourTertiary": Blockly.Colours.robot.tertiary,
      "extensions": ["output_string"]
    });
  }
};

Blockly.Blocks['robot_get_rgb_sensor_data'] = {
  /**
   * Block to turn left.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({

    "message0": Blockly.Msg.ROBOT_GET_RGB_SENSOR_DATA,
    "args0": [
      {
        "type": "input_value",
        "name": "ROBOT_SENSORS_FOR_RGB"
      },
      {
        "type": "input_value",
        "name": "RGB_VALUES"
      }
    ],
      "category": Blockly.Categories.robot,
      "extensions": ["colours_robot", "output_number"]
    });
  }

};

Blockly.Blocks['robot_start_button_pressed'] = {
  /**
   * Block to turn left.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({

    "message0": Blockly.Msg.ROBOT_START_BUTTON_PRESSED,

      "category": Blockly.Categories.robot,
      "extensions": ["colours_robot", "output_boolean"]
    });
  }

};

Blockly.Blocks["robot_positions"] = {
  /**
   * Block to motors off.
   * @this Blockly.Block
   */
  init: function() {

    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "ROBOT_POSITION",

            "options": [
              [Blockly.Msg.ROBOT_POSITION1,                   'position1'],
              [Blockly.Msg.ROBOT_POSITION2,                   'position2'],
              [Blockly.Msg.ROBOT_POSITION3,                   'position3'],
              [Blockly.Msg.ROBOT_POSITION4,                   'position4'],
              [Blockly.Msg.ROBOT_POSITION5,                   'position5']


              ]

            }
      ],

      "colour": Blockly.Colours.robot.secondary,
      "colourSecondary": Blockly.Colours.robot.secondary,
      "colourTertiary": Blockly.Colours.robot.tertiary,
      "extensions": ["output_string"]
    });
  }
};

Blockly.Blocks['robot_turn_led_on'] = {
  /**
   * Block to turn left.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({

    "message0": Blockly.Msg.ROBOT_TURN_LED_ON,
    "args0": [
      {
        "type": "input_value",
        "name": "ROBOT_POSITION"
      }
    ],
      "category": Blockly.Categories.robot,
      "extensions": ["colours_robot", "shape_statement"]
    });
  }

};

Blockly.Blocks['robot_turn_led_off'] = {
  /**
   * Block to turn left.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({

    "message0": Blockly.Msg.ROBOT_TURN_LED_OFF,
    "args0": [
      {
        "type": "input_value",
        "name": "ROBOT_POSITION"
      }
    ],
      "category": Blockly.Categories.robot,
      "extensions": ["colours_robot", "shape_statement"]
    });
  }

};

Blockly.Blocks['robot_claw_closed'] = {
  /**
   * Block to turn left.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ROBOT_CLAW_CLOSED,
      "args0": [
        {
          "type": "input_value",
          "name": "CLAW_CLOSED_PERCENT"
        }
      ],
      "category": Blockly.Categories.robot,
      "extensions": ["colours_robot", "shape_statement"]
    });
  }
};

Blockly.Blocks['claw_states'] = {
  /**
   * Block to motors off.
   * @this Blockly.Block
   */
  init: function() {

    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "CLAW_STATES",
          "options": [
            [Blockly.Msg.ROBOT_CLAW_OPEN_STATE,                               'claw_open'],
            [Blockly.Msg.ROBOT_CLAW_HALF_OPEN_STATE,                          'claw_half_open'],
            [Blockly.Msg.ROBOT_CLAW_CLOSED_STATE,                             'claw_closed']






          ]
        }
      ],

      "colour": Blockly.Colours.robot.secondary,
      "colourSecondary": Blockly.Colours.robot.secondary,
      "colourTertiary": Blockly.Colours.robot.tertiary,
      "extensions": ["output_string"]
    });
  }
};

Blockly.Blocks['robot_claw_state'] = {
  /**
   * Block to turn left.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({

    "message0": Blockly.Msg.ROBOT_CLAW_STATE,
    "args0": [
      {
        "type": "input_value",
        "name": "CLAW_STATES"
      }
    ],
      "category": Blockly.Categories.robot,
      "extensions": ["colours_robot", "shape_statement"]
    });
  }

};
