import Counter from "./components/counter";
import TodoList from "./components/todolist";
import Input from "./components/input";
import RandomQuote from "./components/newComponent";

function App() {
  return (
    <div className="App">
      <Counter />
      <Input />
      <TodoList />
      <RandomQuote />
    </div>
  );
}

export default App;
