import { ComponentStory, Meta } from "@storybook/react";
import { Input } from "../Input/Input";
import { PageContainer } from "./PageContainer";

export default {
  title: "Components/PageContainer",
  component: PageContainer,
} as Meta;

const Template: ComponentStory<typeof PageContainer> = (args) => <PageContainer {...args} />;

export const PageContainer_Default = Template.bind({});

PageContainer_Default.args = {
  children: <Input.Wrapper>
    <Input.Input placeholder="Some placeholder" />
  </Input.Wrapper>,
};

