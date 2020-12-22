import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Cards from "./Components/Cards";

function App() {
  return (
    <div className="m-3 bg-gray-200 p-5">
      <Header />
      <Main />
      <Cards />
    </div>
  );
}

export default App;
