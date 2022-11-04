import { ComponentStory, Meta } from "@storybook/react";
import { Envelope } from "../../Assets/Svgs/Icons/Envelope";
import { Input } from "../Input/Input";
import { Label } from "./Label";

export default {
  title: "Components/Label",
  component: Label,
} as Meta;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Labeled_input = Template.bind({});

Labeled_input.args = {
  text: "E-mail",
  children: (
    <Input.Wrapper>
      <Input.Icon>
        <Envelope />
      </Input.Icon>
      <Input.Input type="password" placeholder="E-mail" />
    </Input.Wrapper>
  ),
};

