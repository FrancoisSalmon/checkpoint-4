const AbstractManager = require("./AbstractManager");

class GameManager extends AbstractManager {
  static table = "game";

  find(id) {
    return this.connection.query(
      `SELECT * FROM  ${this.table} WHERE hardware_id = ?`,
      [id]
    );
  }

  insert(game) {
    return this.connection.query(
      `INSERT INTO ${GameManager.table} (name, releaseDate, description, hardware_id) values (?,?,?,?)`,
      [game.name, game.releaseDate, game.description, game.hardware_id]
    );
  }

  update(game) {
    return this.connection.query(
      `UPDATE ${GameManager.table} set name = ?, releaseDate = ?, description = ?, hardware_id = ? WHERE id = ?`,
      [game.name, game.releaseDate, game.description, game.id, game.hardware_id]
    );
  }
}

module.exports = GameManager;
