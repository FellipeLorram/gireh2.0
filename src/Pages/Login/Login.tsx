import { Envelope } from "../../Assets/Svgs/Icons/Envelope";
import { Eye } from "../../Assets/Svgs/Icons/Eye";
import { Lock } from "../../Assets/Svgs/Icons/Lock";
import { Button } from "../../Components/Button/Button";
import { Input } from "../../Components/Input/Input";
import { Label } from "../../Components/Label/Label";
import { Logo } from "../../Components/Logo/Logo";
import { PageContainer } from "../../Components/PageContainer/PageContainer";
import { Text } from "../../Components/Text/Text";
import { Form, LoginPageWrapper } from "./Login.styled";

export const Login = () => {
  return (
    <LoginPageWrapper>
      <PageContainer>
        <Logo.Svg />
        <Text className="text" type="auxiliar">
          Insira suas credenciais para fazer login no sistema
        </Text>
        <Form>
          <Label text="E-mail">
            <Input.Wrapper>
              <Input.Icon>
                <Envelope />
              </Input.Icon>
              <Input.Input type="email" placeholder="E-mail" />
            </Input.Wrapper>
          </Label>
          <Label text="Password">
            <Input.Wrapper>
              <Input.Icon>
                <Lock />
              </Input.Icon>
              <Input.Input type="password" placeholder="Password" />
              <Input.Icon cursor="pointer">
                <Eye />
              </Input.Icon>
            </Input.Wrapper>
          </Label>
          <Button type="submit">Login</Button>
        </Form>
      </PageContainer>
    </LoginPageWrapper>
  );
};
