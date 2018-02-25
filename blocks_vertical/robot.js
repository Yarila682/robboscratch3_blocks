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
