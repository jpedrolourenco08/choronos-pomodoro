import "../../styles/global.css";
import "../../styles/theme.css";

import { Container } from "../../components/Container/index";
import { Logo } from "../../components/Logo";
import { Menu } from "../../components/Menu";
import { Footer } from "../../components/Footer";

type MainTemplateProps = {
    children: React.ReactNode
}

export function MainTemplate({children}: MainTemplateProps) {

  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      {children}

      <Container>
        <Footer/>
      </Container>
    </>
  )
}
