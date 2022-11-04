import { ComponentStory, Meta } from "@storybook/react";
import { Logo } from "./Logo";

export default {
  title: "Components/Logo",
  component: Logo,
} as Meta;

const Template: ComponentStory<typeof Logo> = (args) => <Logo  />;

export const Logo_Default = Template.bind({});

Logo_Default.args = {};

