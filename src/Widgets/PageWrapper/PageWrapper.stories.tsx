import { ComponentStory, Meta } from "@storybook/react";
import { PageWrapper } from "./PageWrapper";

export default {
  title: "Widgets/PageWrapper",
  component: PageWrapper,
} as Meta;

const Template: ComponentStory<typeof PageWrapper> = (args) => (
  <PageWrapper {...args} />
);

export const PageWrapper_Default = Template.bind({});

PageWrapper_Default.args = {};
