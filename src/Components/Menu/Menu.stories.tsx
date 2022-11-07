import { ComponentStory, Meta } from "@storybook/react";
import { Menu } from "./Menu";

export default {
  title: "Components/Menu",
  component: Menu,
} as Meta;

const Template: ComponentStory<typeof Menu> = (args) => <Menu  />;

export const Menus = Template.bind({});

Menus.args = {
  size: 'm',
  type: 'auxiliar',
  children: (
    <Menu />
  ),
};

