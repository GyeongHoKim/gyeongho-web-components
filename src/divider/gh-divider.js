import BaseComponent from '../base.js';
import {css} from 'lit';
import {baseStyle} from '../base.style.js';

export default class GHDivider extends BaseComponent {
  constructor() {
    super();
    this.vertical = false;
  }

  static get properties() {
    return {
      vertical: {type: Boolean, reflect: true},
    };
  }

  static get styles() {
    return [
      baseStyle,
      css`
        :host {
          --color: var(--gh-border-color);
          --width: var(--gh-border-width);
          --spacing: var(--gh-spacing-medium);
        }

        :host(:not([vertical])) {
          display: block;
          border-top: solid var(--width) var(--color);
          margin: var(--spacing) 0;
        }

        :host([vertical]) {
          display: inline-block;
          height: 100%;
          border-left: solid var(--width) var(--color);
          margin: 0 var(--spacing);
        }
      `,
    ];
  }
}

customElements.define('gh-divider', GHDivider);
