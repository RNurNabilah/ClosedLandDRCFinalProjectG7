import React, { useState, useEffect } from "react";
import Select from "react-select";
import SWAP from "../images/swap.png";
import { Container } from "react-bootstrap";
import { RiArrowLeftRightFill, RiArrowUpDownFill } from "react-icons/ri";

const cryptoOptions = [{ value: "ETH", label: "ETH" }];

const fiatOptions = [
  { value: "USD", label: "USD" },
  { value: "MYR", label: "MYR" },
  { value: "JPY", label: "JPY" },
  { value: "EUR", label: "EUR" },
  { value: "GBP", label: "GBP" },
];

function Convert() {
  const [amount, setAmount] = useState(1);
  const [selectedCrypto, setSelectedCrypto] = useState(cryptoOptions[0]);
  const [selectedFiat, setSelectedFiat] = useState(fiatOptions[0]);

  const [selectedCryptoData, setSelectedCryptoData] = useState({});

  const [isInitialCrypto, setIsInitialCrypto] = useState(true);

  useEffect(() => {
    fetch(
      "https://coinlib.io/api/v1/coin?key=327b62b12af4dc20&pref=" +
        selectedFiat.value +
        "&symbol=" +
        selectedCrypto.value
    )
      .then((response) => response.json())

      .then((data) => setSelectedCryptoData(data));
  }, [selectedCrypto, selectedFiat]);

  const calcResult = () => {
    if (isInitialCrypto) {
      let total = amount * selectedCryptoData.price;
      return total.toLocaleString();
    } else {
      let total = amount * (1 / selectedCryptoData.price);
      return total.toLocaleString();
    }
  };

  const onChangeCrypto = (crypto) => {
    setSelectedCrypto(crypto);
  };
  const onChangeFiat = (fiat) => {
    setSelectedFiat(fiat);
    console.log(selectedFiat["value"]);
  };

  return (
    <div className="converterPage">
      <div className="converter-container">
        <form className="inputContainer">
          <h1 className="resultConverter1">
            {calcResult() === "NaN"
              ? selectedFiat["value"] === "USD"
                ? "$ " + 0
                : "RM " + 0
              : selectedFiat["value"] === "USD"
              ? "$ " + calcResult()
              : "RM " + calcResult()}
          </h1>
        </form>
      </div>

      <div className="selectContainer">
        <div className="input-converter">
          <form>
            <label>
              <input
                className="inputName"
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </label>
          </form>
        </div>

        <Select
          className="basic-single1"
          classNamePrefix="select"
          isSearchable
          defaultValue={isInitialCrypto ? cryptoOptions[0] : fiatOptions[0]}
          onChange={
            isInitialCrypto ? (e) => onChangeCrypto(e) : (e) => onChangeFiat(e)
          }
          options={isInitialCrypto ? cryptoOptions : fiatOptions}
          value={isInitialCrypto ? selectedCrypto : selectedFiat}
        />
        <div className="arrowsUpSide">
          <RiArrowLeftRightFill className="arrowLeftRight"></RiArrowLeftRightFill>
          <RiArrowUpDownFill className="arrowUpDown"></RiArrowUpDownFill>
        </div>
        <Select
          className="basic-single2"
          classNamePrefix="select"
          isSearchable
          defaultValue={!isInitialCrypto ? cryptoOptions[0] : fiatOptions[0]}
          onChange={
            !isInitialCrypto ? (e) => onChangeCrypto(e) : (e) => onChangeFiat(e)
          }
          options={!isInitialCrypto ? cryptoOptions : fiatOptions}
          value={!isInitialCrypto ? selectedCrypto : selectedFiat}
        />
      </div>
    </div>
  );
}

export default Convert;
