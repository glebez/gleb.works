import { html, TemplateResult } from 'lit';
import '../src/chat-glb.js';

export default {
  title: 'ChatGlb',
  component: 'chat-glb',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  header?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ header, backgroundColor = 'white' }: ArgTypes) => html`
  <chat-glb style="--chat-glb-background-color: ${backgroundColor}" .header=${header}></chat-glb>
`;

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
