import "./styles/global.css";
import "./styles/theme.css";

import { Container } from "./components/Container/index";
import { Heading } from "./components/Heading/index";
import { Logo } from "./components/Logo";

export function App(){
  return (
    <>
      <Container>
        <Heading>
          <Logo/>
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
