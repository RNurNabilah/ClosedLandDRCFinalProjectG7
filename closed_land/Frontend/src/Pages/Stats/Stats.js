import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
// import Navbar from "../../Components/Navbar";
import Ethcall from "../../Components/CombNav/Ethcall";
import StatsMobile from "./StatsMobile";
import StatsLaptop from "./StatsLaptop";
import { Container, Col, Row, Dropdown, Button } from "react-bootstrap";
import "./Stats.css";
import { FaEthereum } from "react-icons/fa";
import axios from "axios";

const Stats = () => {
  let collectionsStats = [
    {
      image_url:
        "https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s120",
      name: "Doodles",
      stats: {
        floor_price: 12.7498,
        one_day_change: -0.06642826407543108,
        seven_day_change: -0.22917061264882083,
        num_owners: 6058,
        count: 10000,
        total_volume: 81902.37776033413,
      },
    },
    {
      image_url:
        "https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s120",
      name: "Bored Ape Yacht Club",
      stats: {
        floor_price: 91.8,
        one_day_change: 0.7902130730188586,
        seven_day_change: -0.15093345095012342,
        num_owners: 6300,
        count: 10000,
        total_volume: 400191.08569358353,
      },
    },
    {
      image_url:
        "https://lh3.googleusercontent.com/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT=s120",
      name: "Azuki",
      stats: {
        floor_price: 11.5,
        one_day_change: -0.2019592268996558,
        seven_day_change: 0.01030311973340186,
        num_owners: 5424,
        count: 10000,
        total_volume: 117597.23224187162,
      },
    },
    {
      image_url:
        "https://lh3.googleusercontent.com/DIafQlRW63pQ8UJqmdQBBOHZcubAE9rAkbovVx_WU_-TmIg3hF7z0y60gUGvah85_uYVgBxmhNfWUXwajaUmYZsrCPp8ZdYE0Z-wrt0=s120",
      name: "NFT Worlds",
      stats: {
        floor_price: 15.35,
        one_day_change: 0.1607692233795617,
        seven_day_change: 2.263430986766646,
        num_owners: 4583,
        count: 10000,
        total_volume: 29697.929594975805,
      },
    },
    {
      image_url:
        "https://lh3.googleusercontent.com/pFx2k4GbEd30FbIPOGagqG646QGUk-0Ns8n6kSgozxY4aJSI2AYm1a_Acvu0jngeIx7hSeZeZTHLKUiUEt9qXfE-DWRmJyZJQ_AnKA=s120",
      name: "Tasty Bones XYZ",
      stats: {
        floor_price: 1.36,
        one_day_change: 0.1996455178896861,
        seven_day_change: 0.6206373646305791,
        num_owners: 3478,
        count: 5049,
        total_volume: 9042.611033725618,
      },
    },
    {
      image_url:
        "https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s120",
      name: "Doodles",
      stats: {
        floor_price: 12.7498,
        one_day_change: -0.06642826407543108,
        seven_day_change: -0.22917061264882083,
        num_owners: 6058,
        count: 10000,
        total_volume: 81902.37776033413,
      },
    },
    {
      image_url:
        "https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s120",
      name: "Bored Ape Yacht Club",
      stats: {
        floor_price: 91.8,
        one_day_change: 0.7902130730188586,
        seven_day_change: -0.15093345095012342,
        num_owners: 6300,
        count: 10000,
        total_volume: 400191.08569358353,
      },
    },
    {
      image_url:
        "https://lh3.googleusercontent.com/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT=s120",
      name: "Azuki",
      stats: {
        floor_price: 11.5,
        one_day_change: -0.2019592268996558,
        seven_day_change: 0.01030311973340186,
        num_owners: 5424,
        count: 10000,
        total_volume: 117597.23224187162,
      },
    },
  ];

  const [data, setData] = useState([
    {
      image_url: "",
      name: "",
      stats: {
        floor_price: 0,
        one_day_change: 0,
        seven_day_change: 0,
        num_owners: 0,
        count: 0,
        total_volume: 0,
      },
    },
  ]);

  useEffect(() => {
    axios.get(`http://localhost:4561/`).then((res) => {
      setData(res.data);
      console.log(res.data);
    }, []);
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      {/* <Navbar></Navbar> */}
      <Ethcall />
      <StatsMobile props={data}></StatsMobile>
      <StatsLaptop props={data}></StatsLaptop>
      <Footer />
    </div>
  );
};

export default Stats;
