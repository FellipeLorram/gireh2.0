import { ComponentStory, Meta } from "@storybook/react";
import { Search } from "./Search";

export default {
  title: "Widgets/Search",
  component: Search,
} as Meta;

const Template: ComponentStory<typeof Search> = (args) => <Search  />;

export const Search_default = Template.bind({});

Search_default.args = {};

