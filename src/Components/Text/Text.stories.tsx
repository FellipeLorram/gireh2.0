import { ComponentStory, Meta } from "@storybook/react";
import { Text } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
} as Meta;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Texts = Template.bind({});

Texts.args = {
  size: 'm',
  type: 'auxiliar',
  children: (
    <Text type="auxiliar" size={Texts.args?.size}>
      <p>
        Olá
      </p>
    </Text>
  ),
};

