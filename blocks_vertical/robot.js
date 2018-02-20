'use strict';

goog.provide('Blockly.Blocks.robot');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['robot_movesteps'] = {
  /**
   * Block to move steps.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "move %1 steps",
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
