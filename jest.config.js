const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  maxWorkers: 1,
  transform: {
    ...tsJestTransformCfg,
  },
};
