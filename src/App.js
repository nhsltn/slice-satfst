import "./App.scss";
import Header from "./Container/Header/Header";
import SAT from "./Container/SAT/SAT";
import News from "./Container/News/News";
import Critics from "./Components/Critics/Critics";

function App() {
  return (
    <div>
      <Header />
      <SAT />
      <News />
      <Critics />
    </div>
  );
}

export default App;
