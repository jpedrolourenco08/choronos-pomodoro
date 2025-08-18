import { Heading, HeadingChildren } from "./components/Heading";
import "./styles/global.css";
import "./styles/theme.css";

export function App(){
  return (
    <div>
      <Heading/>
      <HeadingChildren>Olá filho</HeadingChildren>
       <p>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente dolore quod odio fugiat quaerat harum aspernatur. Inventore, incidunt iste veniam numquam architecto nihil earum, error sint quis quae debitis dicta.
        </p>
    </div>
  )
}
