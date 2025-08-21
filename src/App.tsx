import "./styles/global.css";
import "./styles/theme.css";

import { Container } from "./components/Container/index";
import { Heading } from "./components/Heading/index";

export function App(){
  return (
    <>
      <Container>
        <Heading>
          <section>LOGO</section>
        </Heading>
      </Container>
       <Container>
        <Heading>
          <section>MENU</section>
        </Heading>
      </Container>
    </>
  )
}
