'use strict';

goog.provide('Blockly.Blocks.iot');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['iot_broker_init'] = {
  /**
   * Enter a brocker port
   * @this Blockly.Block
   */
  init: function(locale) {
      this.jsonInit({
        "message0": Blockly.Msg.IOT_SET_BROKER_ADDR_AND_PORT,
        "args0": [
          {
            "type": "input_value",
            "name": "BPROTCOL"
          },
          {
            "type": "input_value",
            "name": "BADDR"
          },
          {
            "type": "input_value",
            "name": "BPORT"
          }
        ],
        "category": Blockly.Categories.iotblocks,
        "extensions": ["colours_iot","shape_statement"]
    });
  }
}

Blockly.Blocks['iot_mess_to_topic'] = {
  /**
   * Publication text message to topic
   * @this Blockly.Block
   */
  init: function(locale) {
      this.jsonInit({
        "message0": Blockly.Msg.IOT_MESSAGE_TO_TOPIC,
        "args0": [
          {
            "type": "input_value",
            "name": "TNAME"
          },
          {
            "type": "input_value",
            "name": "MESSAGE"
          }
        ],
        "category": Blockly.Categories.iotblocks,
        "extensions": ["colours_iot","shape_statement"]
    });
  }
}

Blockly.Blocks['iot_subscribe_to_topic'] = {
  /**
   * Publication text message to topic
   * @this Blockly.Block
   */
  init: function(locale) {
      this.jsonInit({
        "message0": Blockly.Msg.IOT_SUBSCRIBE_TO_TOPIC,
        "args0": [
          {
            "type": "input_value",
            "name": "TNAME"
          }
        ],
        "category": Blockly.Categories.iotblocks,
        "extensions": ["colours_iot","shape_statement"]
    });
  }
}

Blockly.Blocks['iot_receive_message'] = {
  /**
   * Publication text message to topic
   * @this Blockly.Block
   */
  init: function(locale) {
      this.jsonInit({
        "message0": Blockly.Msg.IOT_RECEIVE_MESSAGE,
        "args0": [
          {
            "type": "input_value",
            "name": "TNAME"
          }
        ],
        "category": Blockly.Categories.iotblocks,
        "extensions": ["colours_iot","output_string"]
    });
  }
}

Blockly.Blocks['iot_set_logpass'] = {
  /**
   * Publication text message to topic
   * @this Blockly.Block
   */
  init: function(locale) {
      this.jsonInit({
        "message0": Blockly.Msg.IOT_SET_LOGPASS,
        "args0": [
          {
            "type": "input_value",
            "name": "UNAME"
          },
          {
            "type": "input_value",
            "name": "PASS"
          }
        ],
        "category": Blockly.Categories.iotblocks,
        "extensions": ["colours_iot","shape_statement"]
    });
  }
}

Blockly.Blocks['iot_set_wifi'] = {
  /**
   * Publication text message to topic
   * @this Blockly.Block
   */
  init: function(locale) {
      this.jsonInit({
        "message0": Blockly.Msg.IOT_SET_WIFI,
        "args0": [
          {
            "type": "input_value",
            "name": "SSID"
          },
          {
            "type": "input_value",
            "name": "PASS"
          }
        ],
        "category": Blockly.Categories.iotblocks,
        "extensions": ["colours_iot","shape_statement"]
    });
  }
}


Blockly.Blocks['iot_set_client_id'] = {
  /**
   * Publication text message to topic
   * @this Blockly.Block
   */
  init: function(locale) {
      this.jsonInit({
        "message0": Blockly.Msg.IOT_SET_CLIENT_ID,
        "args0": [
          {
            "type": "input_value",
            "name": "ID"
          },
        ],
        "category": Blockly.Categories.iotblocks,
        "extensions": ["colours_iot","shape_statement"]
    });
  }
}

Blockly.Blocks['iot_set_delay_for_topic'] = {
  /**
   * Publication text message to topic
   * @this Blockly.Block
   */
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly.Msg.IOT_SET_DELAY,
      "args0": [
        {
          "type": "input_value",
          "name": "DELAY"
        },
        {
          "type": "input_value",
          "name": "TNAME"
        }
      ],
      "category": Blockly.Categories.iotblocks,
      "extensions": ["colours_iot","shape_statement"]
    });
  }
}

Blockly.Blocks['iot_trigger_on_topic'] = {
  /**
   * Publication text message to topic
   * @this Blockly.Block
   */
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly.Msg.IOT_TRIGGER_ON_TOPIC,
      "args0": [
        {
          "type": "input_value",
          "name": "TNAME"
        },
      ],
      "category": Blockly.Categories.iotblocks,
      "extensions": ["colours_iot","output_boolean"]
    });
  }
}

Blockly.Blocks['iot_parse_data'] = {
  /**
   * Publication text message to topic
   * @this Blockly.Block
   */
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly.Msg.IOT_PARSE_DATA,
      "args0": [
        {
          "type": "input_value",
          "name": "TNAME"
        },
      ],
      "category": Blockly.Categories.iotblocks,
      "extensions": ["colours_iot","shape_statement"]
    });
  }
}

/******************** */

Blockly.Blocks['iot_topic'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "TNAME",
          "options": [
            ["air quality"/*Blockly.Msg.IOT_1*/,             'air'],
            ["distance",              'dis'],
            ["temperature",           'tem'],
            ["humidity",              'hum'],
            ["lux",                   'lux'],
            ["wind",                  'wind'],
            ["sound",                 'snd'],
            ["text",                  'txt'],
            ["text2",                 'txt2']
            /*[Blockly.Msg.IOT_5,             'acc/y'],
            [Blockly.Msg.IOT_6,             'acc/z']*/
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

Blockly.Blocks['iot_topic2'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "TNAME2",
          "options": [
            ["led red"/*Blockly.Msg.IOT_1*/,             'led/r'],
            ["led green"/*Blockly.Msg.IOT_1*/,             'led/g'],
            ["led blue"/*Blockly.Msg.IOT_1*/,             'led/b'],
            ["servomotor",             'servo'],
            ["rele",             'rele'],
            ["buzzer",             'buz']
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
Blockly.Blocks['iot_event_more'] = {
  /**
   * Block for when a sprite is touching an object.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.IOT_EVENT_MORE,
      "args0": [
        {
          "type": "input_value",
          "name": "TNAME"
        }
      ],
      "category": Blockly.Categories.event,
      "extensions": ["colours_iot", "shape_hat"]
    });
  }
};
Blockly.Blocks['iot_event_less'] = {
  /**
   * Block for when a sprite is touching an object.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.IOT_EVENT_LESS,
      "args0": [
        {
          "type": "input_value",
          "name": "TNAME"
        }
      ],
      "category": Blockly.Categories.event,
      "extensions": ["colours_iot", "shape_hat"]
    });
  }
};

Blockly.Blocks['iot_set_under_treshold'] = {
  /**
   * Publication text message to topic
   * @this Blockly.Block
   */
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly.Msg.IOT_SET_TRESH_UND,
      "args0": [
        {
          "type": "input_value",
          "name": "TRESH"
        },
        {
          "type": "input_value",
          "name": "TNAME"
        }
      ],
      "category": Blockly.Categories.iotblocks,
      "extensions": ["colours_iot","shape_statement"]
    });
  }
}

Blockly.Blocks['iot_set_upper_treshold'] = {
  /**
   * Publication text message to topic
   * @this Blockly.Block
   */
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly.Msg.IOT_SET_TRESH_UPP,
      "args0": [
        {
          "type": "input_value",
          "name": "TRESH"
        },
        {
          "type": "input_value",
          "name": "TNAME"
        }
      ],
      "category": Blockly.Categories.iotblocks,
      "extensions": ["colours_iot","shape_statement"]
    });
  }
}

Blockly.Blocks['iot_set_both_treshold'] = {
  /**
   * Publication text message to topic
   * @this Blockly.Block
   */
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly.Msg.IOT_SET_TRESH_BOTH,
      "args0": [
        {
          "type": "input_value",
          "name": "TRESH"
        },
        {
          "type": "input_value",
          "name": "TRESH2"
        },
        {
          "type": "input_value",
          "name": "TNAME"
        }
      ],
      "category": Blockly.Categories.iotblocks,
      "extensions": ["colours_iot","shape_statement"]
    });
  }
}


Blockly.Blocks['iot_set_prefix'] = {
  /**
   * Publication text message to topic
   * @this Blockly.Block
   */
  init: function(locale) {
      this.jsonInit({
        "message0": Blockly.Msg.IOT_SET_PREFIX,
        "args0": [
          {
            "type": "input_value",
            "name": "PREFIX"
          }
        ],
        "category": Blockly.Categories.iotblocks,
        "extensions": ["colours_iot","shape_statement"]
    });
  }
 }

 Blockly.Blocks['iot_connection_status'] = {
  /**
   * Connection status
   * @this Blockly.Block
   */
  init: function(locale) {
      this.jsonInit({
        "message0": Blockly.Msg.IOT_CONNECTION_STATUS,
        "category": Blockly.Categories.iotblocks,
        "extensions": ["colours_iot","output_string"]
    });
  }
 }

 Blockly.Blocks['iot_connection_log'] = {
  /**
   * Connection log
   * @this Blockly.Block
   */
   init: function(locale) {
    this.jsonInit({
      "message0": Blockly.Msg.IOT_CONNECTION_LOG,
      "category": Blockly.Categories.iotblocks,
      "extensions": ["colours_iot","output_string"],
  });
}
}

Blockly.Blocks['iot_set_delay_for_publish'] = {
  /**
   * Publication text message to topic
   * @this Blockly.Block
   */
  init: function(locale) {
    this.jsonInit({
      "message0": Blockly.Msg.IOT_SET_DELAY_FOR_PUBLISH,
      "args0": [
        {
          "type": "input_value",
          "name": "DELAY"
        },
        {
          "type": "input_value",
          "name": "TNAME"
        }
      ],
      "category": Blockly.Categories.iotblocks,
      "extensions": ["colours_iot","shape_statement"]
    });
  }
}