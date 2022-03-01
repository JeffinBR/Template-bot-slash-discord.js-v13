class Command {
  /**
   * @param {Object} options description
   * @param {string} options.name description
   * @param {string} options.description description
   * @param {array} options.aliases description
   * @param {} options.run description
   * @param {string} options.category description
   */
  constructor(options) {
    this.name = options.name
    this.description = options.description
    this.aliases = options.aliases
    this.execute = options.execute
    this.category = options.category
  }
}

module.exports = Command
