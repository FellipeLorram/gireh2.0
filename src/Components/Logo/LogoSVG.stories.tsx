import { ComponentStory, Meta } from "@storybook/react";
import { Logo } from "./Logo";

export default {
  title: "Components/Logo",
  component: Logo.Svg,
} as Meta;

const Template: ComponentStory<typeof Logo.Svg> = (args) => <Logo.Svg  />;

export const Logo_Svg = Template.bind({});

Logo_Svg.args = {};

