import { ComponentStory, Meta } from "@storybook/react";
import { Logo } from "./Logo";

export default {
  title: "Components/Logo",
  component: Logo.Text,
} as Meta;

const Template: ComponentStory<typeof Logo.Text> = (args) => <Logo.Text  />;

export const Logo_Text = Template.bind({});

Logo_Text.args = {};

