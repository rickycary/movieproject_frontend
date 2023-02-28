import {Outlet} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <h1 className="title">Movie Watchlist</h1>
      <Outlet/>
    </div>
  );
}

export default App;
