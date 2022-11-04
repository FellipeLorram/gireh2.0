import { ComponentStory, Meta } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Button_Default = Template.bind({});

Button_Default.args = {
  children: "Logar",
};

