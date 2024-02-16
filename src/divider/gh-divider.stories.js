import {html} from 'lit';
import './index.js';

export default {
  title: 'Components/gh-divider',
  component: 'gh-divider',
  tags: ['autodocs'],
  argTypes: {
    vertical: {control: 'boolean'},
    styles: {control: 'text'},
  },
};

export const Horizontal = {
  args: {
    vertical: false,
  },
  render: ({vertical}) => html`
    <gh-divider ?vertical=${vertical}></gh-divider>
  `,
};

export const Vertical = {
  args: {
    vertical: true,
  },
  render: ({vertical}) => html`
    <div style="height: 100px">
      <gh-divider ?vertical=${vertical}></gh-divider>
    </div>
  `,
};

export const CustomStyles = {
  args: {
    styles: '--color: blue; --width: 2px; --spacing: 10px;',
  },
  render: ({styles}) => html` <gh-divider style=${styles}></gh-divider> `,
};
