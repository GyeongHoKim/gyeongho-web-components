import {LitElement} from 'lit';
import {LoggerController} from './logger.controller.js';

export default class BaseComponent extends LitElement {
  constructor() {
    super();
    this.logger = new LoggerController(this);
  }
}
