import "./App.css";
import Grandpa from "./Grandpa/Grandpa";
import { Example } from "./components/Example/Example";
import ContextProvider from "./textContext/textContext";
function App() {
  return (
    <ContextProvider>
      <Grandpa /> 
    </ContextProvider>
  );
}
export default App;
