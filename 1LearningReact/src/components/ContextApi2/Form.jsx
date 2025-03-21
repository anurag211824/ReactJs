import Panel from "./Panel";
import Button from "./Button";
const Form = ({children}) => {
    return (
        <Panel title="Welcome">
          <Button>Sign up</Button>
          <Button>Log in</Button>
        </Panel>
      );
}

export default Form
