import "./App.scss";
import Header from "./Container/Header/Header";
import SAT from "./Container/SAT/SAT";
import News from "./Container/News/News";
import Critics from "./Components/Critics/Critics";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <SAT />
      <News />
      <Critics />
      <Footer />
    </div>
  );
}

export default App;
