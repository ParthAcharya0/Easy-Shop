import { createContext } from "react";
import Home from "./components/pages/Home/Home";

const context = createContext();

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
