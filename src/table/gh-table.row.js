import {css, html} from 'lit';
import BaseComponent from '../base.js';

export default class GHTableRow extends BaseComponent {
  static get properties() {
    return {
      selected: {type: Boolean, reflect: true},
      zebra: {type: Boolean, reflect: true},
    };
  }

  static get styles() {
    return css`
      :host {
        position: relative;
        display: table-row;
        height: 2rem;
        background-color: #ffffff;
      }

      :host(:hover) {
        background-color: var(--gh-background-hover-color, #f5f5f5);
      }

      :host([zebra]) {
        background-color: var(--gh-background-zebra-color, #f4f4f4);
      }

      :host([selected]) {
        background-color: var(--gh-background-selected-color, #e7e7e7);
        color: var(--gh-selected-color, #1ea7fd);
      }

      ::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: var(--gh-selected-color, #1ea7fd);
        bottom: 0;
        left: 0;
        transform: scale(0);
        transition: 0.2s all ease-in-out;
      }

      :hover::after {
        transform: scale(1);
      }
    `;
  }

  updated(_changedProperties) {
    super.updated(_changedProperties);
    if (!this.id) {
      this.logger.warn('id is required', this.id);
    }
  }

  onClickRow() {
    this.selected = !this.selected;
    this.dispatchEvent(
      new CustomEvent('row-selected', {
        detail: {
          id: this.id,
          selected: this.selected,
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html` <slot @click=${this.onClickRow}></slot> `;
  }
}

customElements.define('gh-table-row', GHTableRow);
