import { ComponentStory, Meta } from "@storybook/react";
import { Card } from "./Card";

export default {
  title: "Components/Card",
  component: Card.Wrapper,
} as Meta;

const Template: ComponentStory<typeof Card.Wrapper> = (args) => (
  <Card.Wrapper {...args} />
);

export const Card_Default = Template.bind({});

Card_Default.args = {
  children: (
    <>
      <Card.Row>
        <span>Nome</span>
        <span>Fellipe</span>
      </Card.Row>
      <Card.Row>
        <span>Nome</span>
        <span>Fellipe</span>
      </Card.Row>
      <Card.Row>
        <span>Nome</span>
        <span>Fellipe</span>
      </Card.Row>
    </>
  ),
};
