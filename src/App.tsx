import "./styles/global.css";
import "./styles/theme.css";

import { Container } from "./components/Container/index";
//import { Heading } from "./components/Heading/index";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";

export function App(){
  return (
    <>
      <Container>
          <Logo/>
      </Container>

       <Container>
          <Menu/>
      </Container>

       <Container>
          <CountDown/>
      </Container>

      <Container>
        <form className="form" action="">
          <div className="formRow">
            <DefaultInput labelText="Tempo" id="meuInput" type="text" placeholder="Digite aqui"/>
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>

          <div className="formRow">
            <p>Ciclos</p>
            <p>0 0 0 0 0</p>
          </div>
        </form>
      </Container>
    </>
  )
}
