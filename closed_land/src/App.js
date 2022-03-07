import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Chart from "./Pages/Chart/Chart";
import Collection from "./Pages/Collection/Collection";
import CollectionLaptop from "./Components/CollectionLaptop/Collection";
import LandingPage from "./Pages/LandingPage/LandingPage";
// import NFTAssets from "./Pages/NFTAssets/NFTAssets";
import Profile from "./Pages/Profile/Profile";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SIgnUp/SignUp";
import Stats from "./Pages/Stats/Stats";
import Explore from "./Pages/Explore/Explore";
import { Testcharts } from "./Pages/Chart/testchart";
import WrongPage from "./Pages/WrongPage/WrongPage";

// const options = {
//   method: "GET",
//   url: "https://solanart-scan1.p.rapidapi.com/all_collections",
//   headers: {
//     "x-rapidapi-host": "solanart-scan1.p.rapidapi.com",
//     "x-rapidapi-key": "216a1820eemshb4925bfba0c07fep18e0f3jsnd125af0248bd",
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

// const options2 = {
//   method: "GET",
//   url: "https://solanart-scan1.p.rapidapi.com/full_collection",
//   params: { collection: "solpunks" },
//   headers: {
//     "x-rapidapi-host": "solanart-scan1.p.rapidapi.com",
//     "x-rapidapi-key": "216a1820eemshb4925bfba0c07fep18e0f3jsnd125af0248bd",
//   },
// };

// axios
//   .request(options2)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

// fetch(
//   "https://api.opensea.io/api/v1/collections?offset=1000&limit=300",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

// const [data, setData] = useState([]);

// useEffect(() => {
//   axios
//     .get("https://api.opensea.io/api/v1/collection/boredapeyachtclub")
//     .then((res) => {
//       setData(res.data.collection.editors);
//       console.log(res);
//       console.log(res.data.collection.editors[0]);
//     });
// }, []);

// for (let i = 0; i < data.length; i++) {
//   axios.get("https://api.opensea.io/api/v1/asset/" + data[i]).then((res) => {
//     console.log(res);
//   });
// }

// fetch(
//   "https://api.opensea.io/api/v1/asset/https://etherscan.io/address/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/5465/",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

// fetch(
//   "https://testnets-api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

// const [ethTick, setEthTick] = useState(0);

// var ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=1089");

// ws.onopen = function (evt) {
//   ws.send(JSON.stringify({ ticks: "cryETHUSD" }));
// };

// ws.onmessage = function (msg) {
//   var data = JSON.parse(msg.data);
//   setEthTick(data.tick.quote);
//   console.log("Ethereum Price: $" + ethTick);
//   // console.log("Ticks update: %o", data);
// };

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/chart" element={<Chart />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
          <Route path="/collection" element={<CollectionLaptop />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/stats" element={<Stats />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="*" element={<WrongPage />}></Route>
        </Switch>
      </BrowserRouter>
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
