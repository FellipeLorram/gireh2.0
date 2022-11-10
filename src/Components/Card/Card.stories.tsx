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
        <Card.Text>Nome</Card.Text>
        <Card.Text>Fellipe</Card.Text>
      </Card.Row>
      <Card.Row>
        <Card.Text>Nome</Card.Text>
        <Card.Text>Fellipe</Card.Text>
      </Card.Row>
      <Card.Row>
        <Card.Text>Nome</Card.Text>
        <Card.Text>Fellipe</Card.Text>
      </Card.Row>
    </>
  ),
};
