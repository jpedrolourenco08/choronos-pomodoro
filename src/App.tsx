import { Heading } from "./components/Heading";
import "./styles/global.css";
import "./styles/theme.css";
import { TimerIcon } from "lucide-react";

export function App(){
  return (
    <div>
      <Heading>
        Olá Mundo!
        <button>
          <TimerIcon/>
        </button>
      </Heading>
       <p>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente dolore quod odio fugiat quaerat harum aspernatur. Inventore, incidunt iste veniam numquam architecto nihil earum, error sint quis quae debitis dicta.
        </p>
    </div>
  )
}
