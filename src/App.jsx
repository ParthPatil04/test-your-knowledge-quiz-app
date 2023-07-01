import Quiz from "./Components/Quiz";
import Result from "./Components/Result";
import Start from "./Components/Start";
import { QuizContextConst } from "./Context/QuizContext";
import { useContext } from "react";

function App() {
  const { start, exit } = useContext(QuizContextConst);
  return (
    <>{exit === false ? <>{start ? <Quiz /> : <Start />}</> : <Result />}</>
  );
}

export default App;
