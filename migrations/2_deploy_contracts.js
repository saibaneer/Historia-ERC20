const Historia = artifacts.require("Historia");

module.exports = function (deployer) {
  deployer.deploy(Historia, 1000000);
};
