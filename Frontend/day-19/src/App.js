import Counter from "./components/Counter";

var array = [];

for (let i = 0; i < 4; i++) {
 array.push(<Counter key = {i} />)
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {array}
      </header>
    </div>
  );
}

export default App;
