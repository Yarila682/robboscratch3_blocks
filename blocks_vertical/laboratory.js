Blockly.Blocks['led_nums'] = {
  /**
   * Block.
   * @this Blockly.Block
   */
  init: function() {

    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "LED_NUMS",
          "options": [
            [Blockly.Msg.LAB_LED_NUM_0,                               '0'],
            [Blockly.Msg.LAB_LED_NUM_1,                               '1'],
            [Blockly.Msg.LAB_LED_NUM_2,                               '2'],
            [Blockly.Msg.LAB_LED_NUM_3,                               '3'],
            [Blockly.Msg.LAB_LED_NUM_4,                               '4'],
            [Blockly.Msg.LAB_LED_NUM_5,                               '5'],
            [Blockly.Msg.LAB_LED_NUM_6,                               '6'],
            [Blockly.Msg.LAB_LED_NUM_7,                               '7'],







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

Blockly.Blocks['lab_led_turn_on'] = {
  /**
   * Block.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({

    "message0": Blockly.Msg.LAB_LED_TURN_ON,
    "args0": [
      {
        "type": "input_value",
        "name": "LED_NUMS"
      }
    ],
      "category": Blockly.Categories.laboratory,
      "extensions": ["colours_laboratory", "shape_statement"]
    });
  }

};

Blockly.Blocks['lab_led_turn_off'] = {
  /**
   * Block.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({

    "message0": Blockly.Msg.LAB_LED_TURN_OFF,
    "args0": [
      {
        "type": "input_value",
        "name": "LED_NUMS"
      }
    ],
      "category": Blockly.Categories.laboratory,
      "extensions": ["colours_laboratory", "shape_statement"]
    });
  }

};


Blockly.Blocks['led_colors'] = {
  /**
   * Block.
   * @this Blockly.Block
   */
  init: function() {

    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "LED_COLORS",
          "options": [
            [Blockly.Msg.LAB_COLOR_LED_RED,                                   'red'],
            [Blockly.Msg.LAB_COLOR_LED_YELLOW,                                'yellow'],
            [Blockly.Msg.LAB_COLOR_LED_GREEN,                                 'green']







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


Blockly.Blocks['lab_color_led_turn_on'] = {
  /**
   * Block.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({

    "message0": Blockly.Msg.LAB_COLOR_LED_TURN_ON,
    "args0": [
      {
        "type": "input_value",
        "name": "LED_COLORS"
      }
    ],
      "category": Blockly.Categories.laboratory,
      "extensions": ["colours_laboratory", "shape_statement"]
    });
  }

};

Blockly.Blocks['lab_color_led_turn_off'] = {
  /**
   * Block.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({

    "message0": Blockly.Msg.LAB_COLOR_LED_TURN_OFF,
    "args0": [
      {
        "type": "input_value",
        "name": "LED_COLORS"
      }
    ],
      "category": Blockly.Categories.laboratory,
      "extensions": ["colours_laboratory", "shape_statement"]
    });
  }

};


Blockly.Blocks['lab_sensors'] = {
  /**
   * Block.
   * @this Blockly.Block
   */
  init: function() {

    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "LAB_SENSORS",
          "options": [
            [Blockly.Msg.LAB_SENSOR_LIGHT,                                    'light'],
            [Blockly.Msg.LAB_SENSOR_SOUND,                                    'sound'],
            [Blockly.Msg.LAB_SENSOR_SLIDER,                                   'slider']







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

Blockly.Blocks['lab_sensor'] = {
  /**
   * Block.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({

    "message0": Blockly.Msg.LAB_SENSOR,
    "args0": [
      {
        "type": "input_value",
        "name": "LAB_SENSOR"
      }
    ],
      "category": Blockly.Categories.laboratory,
      "extensions": ["colours_laboratory", "output_number"]
    });
  }

};

Blockly.Blocks['button_numbers'] = {
  /**
   * Block.
   * @this Blockly.Block
   */
  init: function() {

    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "BUTTON_NUMBERS",
          "options": [
          
            [Blockly.Msg.LAB_BUTTON_NUM_1,                               '1'],
            [Blockly.Msg.LAB_BUTTON_NUM_2,                               '2'],
            [Blockly.Msg.LAB_BUTTON_NUM_3,                               '3'],
            [Blockly.Msg.LAB_BUTTON_NUM_4,                               '4'],
            [Blockly.Msg.LAB_BUTTON_NUM_5,                               '5']








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

Blockly.Blocks['lab_button_pressed'] = {
  /**
   * Blocks.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({

    "message0": Blockly.Msg.LAB_BUTTON_PRESSED,

    "args0": [
      {
        "type": "input_value",
        "name": "BUTTON_NUMBER"
      }
    ],

      "category": Blockly.Categories.laboratory,
      "extensions": ["colours_laboratory", "output_boolean"]
    });
  }

};

Blockly.Blocks['lab_external_sensors'] = {
  /**
   * Block.
   * @this Blockly.Block
   */
  init: function() {

    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "EXTERNAL_SENSORS",
          "options": [
            [Blockly.Msg.LAB_EXTERNAL_SENSOR_A0,                                'A0'],
            [Blockly.Msg.LAB_EXTERNAL_SENSOR_A1,                                'A1']









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

Blockly.Blocks['lab_external_sensor'] = {
  /**
   * Blocks.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({

    "message0": Blockly.Msg.LAB_EXTERNAL_SENSOR,

    "args0": [
      {
        "type": "input_value",
        "name": "LAB_EXTERNAL_SENSOR"
      }
    ],

      "category": Blockly.Categories.laboratory,
      "extensions": ["colours_laboratory", "output_number"]
    });
  }

};

Blockly.Blocks['lab_analog_pins'] = {
  /**
   * Block.
   * @this Blockly.Block
   */
  init: function() {

    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "LAB_ANALOG_PINS",
          "options": [
            [Blockly.Msg.LAB_ANALOG_PIN_NUM_0,                               'A0'],
            [Blockly.Msg.LAB_ANALOG_PIN_NUM_1,                               'A1'],
            [Blockly.Msg.LAB_ANALOG_PIN_NUM_2,                               'A2'],
            [Blockly.Msg.LAB_ANALOG_PIN_NUM_3,                               'A3'],
            [Blockly.Msg.LAB_ANALOG_PIN_NUM_4,                               'A4'],
            [Blockly.Msg.LAB_ANALOG_PIN_NUM_5,                               'A5']








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

Blockly.Blocks['lab_analog_pin'] = {
  /**
   * Blocks.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({

    "message0": Blockly.Msg.LAB_ANALOG_PIN,

    "args0": [
      {
        "type": "input_value",
        "name": "LAB_ANALOG_PIN"
      }
    ],

      "category": Blockly.Categories.laboratory,
      "extensions": ["colours_laboratory", "output_number"]
    });
  }

};

Blockly.Blocks['lab_digital_pins_stack1'] = {
  /**
   * Block.
   * @this Blockly.Block
   */
  init: function() {

    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "LAB_DIGITAL_PINS_STACK1",
          "options": [

            [Blockly.Msg.LAB_DIGITAL_PIN_NUM_8,                               'D8'],
            [Blockly.Msg.LAB_DIGITAL_PIN_NUM_9,                               'D9'],
            [Blockly.Msg.LAB_DIGITAL_PIN_NUM_10,                              'D10'],
            [Blockly.Msg.LAB_DIGITAL_PIN_NUM_11,                              'D11'],
            [Blockly.Msg.LAB_DIGITAL_PIN_NUM_12,                              'D12'],
            [Blockly.Msg.LAB_DIGITAL_PIN_NUM_13,                              'D13']








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

Blockly.Blocks['lab_digital_pin'] = {
  /**
   * Blocks.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({

    "message0": Blockly.Msg.LAB_DIGITAL_PIN,

    "args0": [
      {
        "type": "input_value",
        "name": "LAB_DIGITAL_PIN"
      }
    ],

      "category": Blockly.Categories.laboratory,
      "extensions": ["colours_laboratory", "output_boolean"]
    });
  }

};

Blockly.Blocks['lab_digital_pins_stack2'] = {
  /**
   * Block.
   * @this Blockly.Block
   */
  init: function() {

    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "LAB_DIGITAL_PINS_STACK2",
          "options": [

            [Blockly.Msg.LAB_DIGITAL_PIN_NUM_2,                               'D2'],
            [Blockly.Msg.LAB_DIGITAL_PIN_NUM_3,                               'D3'],
            [Blockly.Msg.LAB_DIGITAL_PIN_NUM_4,                               'D4'],
            [Blockly.Msg.LAB_DIGITAL_PIN_NUM_5,                               'D5'],
            [Blockly.Msg.LAB_DIGITAL_PIN_NUM_6,                               'D6'],
            [Blockly.Msg.LAB_DIGITAL_PIN_NUM_7,                               'D7']








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

Blockly.Blocks['lab_digital_pins_states'] = {
  /**
   * Block.
   * @this Blockly.Block
   */
  init: function() {

    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "LAB_DIGITAL_PINS_STATES",
          "options": [

            [Blockly.Msg.LAB_DIGITAL_PIN_STATE_ON,                                'on'],
            [Blockly.Msg.LAB_DIGITAL_PIN_STATE_OFF,                               'off'],

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

Blockly.Blocks['lab_digital_pin_set_on_off'] = {
  /**
   * Blocks.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({

    "message0": Blockly.Msg.LAB_DIGITAL_PIN_SET_ON_OFF,

    "args0": [
      {
        "type": "input_value",
        "name": "LAB_DIGITAL_PIN"
      },
      {
        "type": "input_value",
        "name": "LAB_DIGITAL_PIN_STATE"
      }
    ],

      "category": Blockly.Categories.laboratory,
      "extensions": ["colours_laboratory", "shape_statement"]
    });
  }

};

Blockly.Blocks['lab_digital_pins_stack3'] = {
  /**
   * Block.
   * @this Blockly.Block
   */
  init: function() {

    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "LAB_DIGITAL_PINS_STACK3",
          "options": [

            [Blockly.Msg.LAB_DIGITAL_PIN_NUM_3,                               'D3'],
            [Blockly.Msg.LAB_DIGITAL_PIN_NUM_5,                               'D5'],
            [Blockly.Msg.LAB_DIGITAL_PIN_NUM_6,                               'D6']


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


Blockly.Blocks['lab_digital_pin_set_pwm_value'] = {
  /**
   * Blocks.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({

    "message0": Blockly.Msg.LAB_DIGITAL_PIN_SET_PWM_VALUE,

    "args0": [
      {
        "type": "input_value",
        "name": "LAB_DIGITAL_PIN"
      },
      {
        "type": "input_value",
        "name": "PWM_VALUE"
      }
    ],

      "category": Blockly.Categories.laboratory,
      "extensions": ["colours_laboratory", "shape_statement"]
    });
  }

};
