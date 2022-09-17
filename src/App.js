import "./App.css";
import Earnings from "./components/Earnings/Earnings";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Whycrap from "./components/WhyCrap/Whycrappo";
// import WhyCrappo from "./components/WhyCrappo/Whycrappo";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Whycrap />
      <Earnings />
    </div>
  );
}

export default App;
