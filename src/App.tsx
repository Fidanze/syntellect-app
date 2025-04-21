import "./App.css";
import FirstControl from "./components/custom-controls/first-control/control";
import SecondControl from "./components/custom-controls/second-control/control";
import ThirdControl from "./components/custom-controls/third-control/control";

function App() {
  return <div className="app">
    <FirstControl />
    <SecondControl />
    <ThirdControl maxHints={3} />
    <ThirdControl maxHints={10} />
  </div>;
}

export default App;
