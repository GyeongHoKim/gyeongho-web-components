export class LoggerController {
  constructor(host) {
    (this.host = host).addController(this);
  }

  formatMessage(message) {
    return this._prependTagName(message);
  }

  _prependTagName(message) {
    return `<${this.host.tagName.toLowerCase()}>: ${message}`;
  }

  info(message, ...data) {
    console.info(this.formatMessage(message), ...data);
  }

  warn(message, ...data) {
    console.warn(this.formatMessage(message), ...data);
  }

  error(message, ...data) {
    console.error(this.formatMessage(message), ...data);
  }
}
