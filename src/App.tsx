import { Card } from "./Components/Card/Card";
import { Text } from "./Components/Text/Text";
import { GlobalStyles } from "./Styles/GlobalStyles";
import { PageWrapper } from "./Widgets/PageWrapper/PageWrapper";

function App() {
  return (
    <>
      <GlobalStyles />
      <PageWrapper>
        <Card.Wrapper>
          <Card.Row>
            <Card.Text>Nome</Card.Text>
            <Card.Text>Nome</Card.Text>
          </Card.Row>
        </Card.Wrapper>
      </PageWrapper>
    </>
  );
}

export default App;
