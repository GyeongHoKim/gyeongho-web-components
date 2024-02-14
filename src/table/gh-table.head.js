import BaseComponent from '../base.js';
import {css, html} from 'lit';

export default class GhTableHead extends BaseComponent {
  static get styles() {
    return css`
      :host {
        display: table-header-group;
        position: sticky;
        top: 0;
        background-color: var(--gh-background-color, #fff);
        box-shadow: 0 -1px 0 0 var(--gh-border-color, gray) inset;
      }
    `;
  }

  render() {
    return html` <slot></slot>`;
  }
}

customElements.define('gh-table-head', GhTableHead);
