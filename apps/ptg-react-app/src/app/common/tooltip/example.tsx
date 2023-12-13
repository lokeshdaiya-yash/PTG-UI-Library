import { Button } from "react-bootstrap";
import TooltipComponent from "./tooltip";
import CodeIcon from '@mui/icons-material/Code';

export interface ExampleProps {}
    

export function Example(props: ExampleProps) {

 

  return (
    <div>
        <TooltipComponent text={"Hiiiiii huuuuuuuuu"}>
           <h6>Click Me</h6>
        </TooltipComponent>

        <br/>
        <br/>

        <TooltipComponent text={"helllllllllllllllllll jsssssssssssssssssssssssssssssss hjdssssssssssssssss"}>
           <Button>Open</Button>
        </TooltipComponent>

        <br/>
        <br/>

        <TooltipComponent text={"Open"}>
           <CodeIcon></CodeIcon>
        </TooltipComponent>
    </div>
  );
}

export default Example;
