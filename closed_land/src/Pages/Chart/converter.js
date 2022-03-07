import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import SWAP from "../images/swap.png";
import {Container} from "react-bootstrap";

const cryptoOptions = [
  { value:'ETH', label:'ETH'}
];

const fiatOptions = [
  { value: 'USD', label: 'USD'},
  { value: 'MYR', label:'MYR'},
];

function Convert() {
  const [amount, setAmount] = useState(1);
  const [selectedCrypto, setSelectedCrypto] = useState(cryptoOptions[0]);
  const [selectedFiat, setSelectedFiat] = useState(fiatOptions[0]);

  const [selectedCryptoData, setSelectedCryptoData] = useState({});

  const[isInitialCrypto, setIsInitialCrypto] = useState(true);

  useEffect(() => {
    fetch('https://coinlib.io/api/v1/coin?key=327b62b12af4dc20&pref=' + selectedFiat.value + '&symbol=' + selectedCrypto.value)
    .
    then(response => response.json())
    
    .then(data => setSelectedCryptoData(data))
  }, [selectedCrypto, selectedFiat])

  const calcResult = () => {
    if(isInitialCrypto){
      let total = amount*selectedCryptoData.price;
      return total.toLocaleString();
    }
    else{
      let total = amount*(1/selectedCryptoData.price);
      return total.toLocaleString();
    }
  };

  const onChangeCrypto = (crypto) => {
    setSelectedCrypto(crypto);
  };
  const onChangeFiat = (fiat) => {
    setSelectedFiat(fiat);
  };

  return (
    <div className='main-root'>
      <Container className = 'converter-container'>
      <form className='inputContainer'>
        <label>  <Container className='resultConverter1'>{calcResult()}</Container></label>
      </form>
        </Container>
          <Container className='resultConverter2'>{calcResult()} </Container>
            <Container className='selectContainer'>
              <form className='input-converter'>
                <label> 
                  <input
                    className='inputName'
                    type="text" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                 />
                </label>
              </form>

            <Select
            className="basic-single1"
            classNamePrefix="select"
            isSearchable
            defaultValue={isInitialCrypto ? cryptoOptions[0] : fiatOptions[0]}
            onChange={isInitialCrypto ? (e) => onChangeCrypto(e) : (e) => onChangeFiat(e)}
            options={isInitialCrypto ? cryptoOptions : fiatOptions}
            value={isInitialCrypto ? selectedCrypto : selectedFiat}
            />
            <img className ='eth-pic' src={SWAP} alt= "swap" onClick={() => setIsInitialCrypto(!isInitialCrypto)} />
            <Select
              className="basic-single2"
              classNamePrefix="select"
              isSearchable
              defaultValue={!isInitialCrypto ? cryptoOptions[0] : fiatOptions[0]}
              onChange={!isInitialCrypto ? (e) => onChangeCrypto(e) : (e) => onChangeFiat(e)}
              options={!isInitialCrypto ? cryptoOptions : fiatOptions}
              value={!isInitialCrypto ? selectedCrypto : selectedFiat}
            />
          </Container>
          
      
      
    </div>
  );
}

export default Convert;