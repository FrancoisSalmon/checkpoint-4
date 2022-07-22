const AbstractManager = require("./AbstractManager");

class HardwareManager extends AbstractManager {
  static table = "hardware";
}

module.exports = HardwareManager;
