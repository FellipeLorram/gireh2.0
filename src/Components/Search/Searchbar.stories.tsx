import { ComponentStory, Meta } from "@storybook/react";
import { Search } from "./Search";

export default {
  title: "Components/Search",
  component: Search,
} as Meta;

const Template: ComponentStory<typeof Search> = (args) => <Search  />;

export const Searchs = Template.bind({});

Searchs.args = {};

