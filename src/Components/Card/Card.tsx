import { ReactNode } from "react";
import { Text } from "../Text/Text";
import { CardText, CardWrapper, Row } from "./Card.styled";

interface CardProps {
  children: ReactNode;
}

interface CardWrapperProps extends CardProps {
  action: () => void;
}

export const Card = {
  Wrapper: ({ children, action }: CardWrapperProps) => {
    return <CardWrapper onClick={action}>{children}</CardWrapper>;
  },
  Row: ({ children }: CardProps) => {
    return <Row>{children}</Row>;
  },
  Text: ({ children }: CardProps) => (
    <CardText>
      <Text size="m" className="card-text">
        {children}
      </Text>
    </CardText>
  ),
};
