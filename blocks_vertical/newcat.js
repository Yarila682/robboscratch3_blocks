'use strict';

goog.provide('Blockly.Blocks.newcat');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['high_low'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "HIGH_LOW",
          "options": [
            [Blockly.Msg.NEWCAT_HIGH,                               '1'],
            [Blockly.Msg.NEWCAT_LOW,                               '0']
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
Blockly.Blocks['sosonic'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "SOSONIC",
          "options": [
            ["2",                               '2'],
            ["3",                               '3']
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



Blockly.Blocks['newcat_firstblock'] = {
  init: function() {
    this.jsonInit({
      "message0": "YOUR %1 NUMBER!!!",
      "args0": [
        {
          "type": "input_value",
          "name": "ARG_FOR_BLOCKS_NAME"
        }
      ],
      "category": Blockly.Categories.newcat,
      "extensions": ["colours_newcat", "shape_statement"]
    });
  }
};

Blockly.Blocks['newcat_set_dig'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.NEWCAT_SET_DIG,
      "args0": [
        {
          "type": "input_value",
          "name": "PIN"
        },
        {
          "type": "input_value",
          "name": "HIGH_LOW"
        }
      ],
      "category": Blockly.Categories.newcat,
      "extensions": ["colours_newcat", "shape_statement"]
    });
  }
};

Blockly.Blocks['pwm_pins'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PWM_PINS",
          "options": [
            ["3",                               '3'],
            ["5",                               '5'],
            ["6",                               '6'],
            ["9",                               '9'],
            ["10",                               '10'],
            ["11",                               '11']
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

Blockly.Blocks['newcat_set_ana'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.NEWCAT_SET_ANA,
      "args0": [
        {
          "type": "input_value",
          "name": "PWM_PINS"
        },
        {
          "type": "input_value",
          "name": "NUM"
        }
      ],
      "category": Blockly.Categories.newcat,
      "extensions": ["colours_newcat", "shape_statement"]
    });
  }
};

Blockly.Blocks['newcat_read_ana'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.NEWCAT_READ_ANA,
      "args0": [
        {
          "type": "input_value",
          "name": "PIN"
        }],
      "category": Blockly.Categories.newcat,
      "extensions": ["colours_newcat", "output_number"]
    });
  }
};
Blockly.Blocks['pin_anal'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN_ANAL",
          "options": [
            ["a0",                               '14'],
            ["a1",                               '15'],
            ["a2",                               '16'],
            ["a3",                               '17'],
            ["a4",                               '18'],
            ["a5",                               '19']
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
Blockly.Blocks['newcat_go_dig'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.NEWCAT_GO_DIG,
      "args0": [
        {
          "type": "input_value",
          "name": "PIN"
        }],
      "category": Blockly.Categories.newcat,
      "extensions": ["colours_newcat", "shape_statement"]
    });
  }
};
Blockly.Blocks['newcat_go_sonic'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.NEWCAT_GO_SONIC,
      "args0": [
        {
          "type": "input_value",
          "name": "SOSONIC"
        },
        {
          "type": "input_value",
          "name": "PIN2"
        }
      ],
      "category": Blockly.Categories.newcat,
      "extensions": ["colours_newcat", "shape_statement"]
    });
  }
};

Blockly.Blocks['newcat_go_anal'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.NEWCAT_GO_ANAL,
      "args0": [
        {
          "type": "input_value",
          "name": "PIN_ANAL"
        }],
      "category": Blockly.Categories.newcat,
      "extensions": ["colours_newcat", "shape_statement"]
    });
  }
};
Blockly.Blocks['newcat_read_dig'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.NEWCAT_READ_DIG,
      "args0": [
        {
          "type": "input_value",
          "name": "PIN"
        }],
      "category": Blockly.Categories.newcat,
      "extensions": ["colours_newcat", "output_boolean"]
    });
  }
};
Blockly.Blocks['newcat_play_sound'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.NEWCAT_PLAY_SOUND,
      "args0": [
        {
          "type": "input_value",
          "name": "PIN"
        },
        {
          "type": "input_value",
          "name": "NOTE_TYPE"
        },
        {
          "type": "input_value",
          "name": "NOTE_DURA"
        }
      ],
      "category": Blockly.Categories.newcat,
      "extensions": ["colours_newcat", "shape_statement"]
    });
  }
};
Blockly.Blocks['newcat_servo'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.NEWCAT_SERVO,
      "args0": [
        {
          "type": "input_value",
          "name": "PIN"
        },
        {
          "type": "input_value",
          "name": "ANGLE"
        }
      ],
      "category": Blockly.Categories.newcat,
      "extensions": ["colours_newcat", "shape_statement"]
    });
  }
};
Blockly.Blocks['stolb'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "STOLB",
          "options": [
            ["0",                               '0'],
            ["1",                               '1']
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
Blockly.Blocks['newcat_set_kursor'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.NEWCAT_SET_CURSE,
      "args0": [
        {
          "type": "input_value",
          "name": "NUM"
        },
        {
          "type": "input_value",
          "name": "STOLB"
        }
      ],
      "category": Blockly.Categories.newcat,
      "extensions": ["colours_newcat", "shape_statement"]
    });
  }
};
Blockly.Blocks['newcat_set_hum'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.NEWCAT_SET_HUM,
      "args0": [
        {
          "type": "input_value",
          "name": "NUM"
        },
        {
          "type": "input_value",
          "name": "NUM2"
        }
      ],
      "category": Blockly.Categories.newcat,
      "extensions": ["colours_newcat", "shape_statement"]
    });
  }
};

Blockly.Blocks['newcat_set_pult'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.NEWCAT_SET_PULT,
      "args0": [
        {
          "type": "input_value",
          "name": "NUM"
        }
      ],
      "category": Blockly.Categories.newcat,
      "extensions": ["colours_newcat", "shape_statement"]
    });
  }
};
Blockly.Blocks['newcat_set_text'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.NEWCAT_SET_TEXT,
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.newcat,
      "extensions": ["colours_newcat", "shape_statement"]
    });
  }
};
Blockly.Blocks['newcat_init_lcd'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.NEWCAT_INIT_LCD,
      "category": Blockly.Categories.newcat,
      "extensions": ["colours_newcat", "shape_statement"]
    });
  }
};
