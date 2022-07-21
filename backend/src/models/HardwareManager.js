const AbstractManager = require("./AbstractManager");

class HardwareManager extends AbstractManager {
  static table = "hardware";

  insert(hardware) {
    return this.connection.query(
      `insert into ${HardwareManager.table} (name) values (?)`,
      [hardware.title]
    );
  }

  update(hardware) {
    return this.connection.query(
      `update ${HardwareManager.table} set name = ? where id = ?`,
      [hardware.name, hardware.id]
    );
  }
}

module.exports = HardwareManager;
