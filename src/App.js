// import logo from './logo.svg';
import "./App.css";
import ClickCount from "./components/ClickCount";
import Counter from "./components/Counter";
import MouseOver from "./components/MouseOver";

function App() {
  return (
    <div className="App">
      <Counter
        render={(count, increment) => (
          <ClickCount count={count} increment={increment} />
        )}
      />
      <Counter
        render={(count, increment) => (
          <MouseOver count={count} increment={increment} />
        )}
      />
    </div>
  );
}

export default App;
