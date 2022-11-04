import { ComponentStory, Meta, StoryObj } from "@storybook/react";
import { Envelope } from "../../Assets/Svgs/Icons/Envelope";
import { Eye } from "../../Assets/Svgs/Icons/Eye";
import { Lock } from "../../Assets/Svgs/Icons/Lock";
import { Input } from "./Input";

export default {
  title: "Components/Input",
  component: Input.Wrapper,
} as Meta;

const Template: ComponentStory<typeof Input.Icon> = (args) => (
  <Input.Wrapper {...args} />
);

export const Just_Input = Template.bind({});

Just_Input.args = {
  children: <Input.Input placeholder="E-mail" />,
};

export const Input_with_Icon = Template.bind({});

Input_with_Icon.args = {
  children: (
    <>
      <Input.Icon>
        <Envelope />
      </Input.Icon>
      <Input.Input placeholder="E-mail" />
    </>
  ),
};

export const Input_with_Two_Icons = Template.bind({});

Input_with_Two_Icons.args = {
  children: (
    <>
      <Input.Icon>
        <Lock />
      </Input.Icon>
      <Input.Input type="password" placeholder="Senha" />
      <Input.Icon cursor="pointer">
        <Eye />
      </Input.Icon>
    </>
  ),
};
