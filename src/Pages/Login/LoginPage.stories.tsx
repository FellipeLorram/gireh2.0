import { ComponentStory, Meta } from "@storybook/react";
import { Login } from "./Login";

export default {
  title: "Pages/Login",
  component: Login,
} as Meta;

const Template: ComponentStory<typeof Login> = (args) => <Login />;

export const Login_Default = Template.bind({});

Login_Default.args = {
};

