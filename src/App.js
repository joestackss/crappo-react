import "./App.css";
import Earnings from "./components/Earnings/Earnings";
import Features from "./components/Features/Features";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profit from "./components/Profit/Profit";
import Securetrade from "./components/SecureTrade/Securetrade";
import Statistics from "./components/Statitics/Statitics";
import Whycrap from "./components/WhyCrap/Whycrappo";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Whycrap />
      <Earnings />
      <Securetrade />
      <Features />
      <Statistics />
      <Profit />
    </div>
  );
}

export default App;
