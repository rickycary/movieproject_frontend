import {Outlet} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <h1>Welcome to my movies app</h1>
      <Outlet/>
    </div>
  );
}

export default App;
