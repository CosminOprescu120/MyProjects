import './MainPage.css';
// import personIcon from '../images/People_Icon.png';
import React, {useEffect, useState} from 'react';
const tips = [5, 10, 15, 25, 50];

const MainPage = () => {
  const [billAmount, setBillAmount] = useState(0);
  const [personsNumber, setPersonsNumber] = useState(1);
  const [tipAmount, setTipAmount] = useState(0);
  const [tipAmountTotal, setTipAmountTotal] = useState(0);
  const [selectedTip, setSelectedTip] = useState(null);
  const [customTipActiv, setCustomTipActiv] = useState(false);
  const [customTip, setCustomTip] = useState(null);
  function handleBillAmountChange(event) {
    setBillAmount(Number(event.target.value) || 0);
  }

  function handlePersonsNumberChange(event) {
    setPersonsNumber(Number(event.target.value) || 1);
  }
  function fcustomTipActiv() {
    setCustomTipActiv(true);
    setSelectedTip(null);
  }
  function handleCustomTipChange(event) {
    let targetvalue = event.target.value;
    setCustomTip(Number(targetvalue));
    setSelectedTip(Number(targetvalue));
  }
  useEffect(() => {
    if (billAmount > 0 && personsNumber >= 1 && selectedTip > 0) {
      const newTipAmount = (billAmount * selectedTip) / 100;
      setTipAmount(newTipAmount / personsNumber);
      setTipAmountTotal(newTipAmount);
    } else {
      setTipAmount(0);
      setTipAmountTotal(0);
      setSelectedTip(0);
    }
  }, [billAmount, selectedTip, personsNumber]);
  return (
    <div className="container-main-page">
      <h1 className="header-main-page">
        <p>SPLI</p>
        <p>TTER</p>
      </h1>
      <div className="white-square-main-page">
        <div className="left-col-main-page">
          <div className="subtitle-main-page">Bill</div>
          <div className="input-with-sign">
            <div className="dollar-text input-icon">$</div>
            <input
              className="input-text-main-page"
              type="number"
              value={billAmount}
              inputMode="decimal"
              onChange={handleBillAmountChange}
            ></input>
          </div>

          <div className="subtitle-main-page">Select Tip%</div>
          <div className="tips-container-main-page">
            {tips.map(tipPercentage => (
              <button
                key={tipPercentage}
                onClick={() => {
                  setSelectedTip(tipPercentage);
                  setCustomTipActiv(false);
                }}
                className={`${
                  selectedTip === tipPercentage
                    ? 'tip-square-hovered-main-page'
                    : 'tip-square-main-page'
                } `}
              >
                {tipPercentage}%
              </button>
            ))}
            {customTipActiv ? (
              <input
                value={customTip}
                className="input-text-custom-main-page"
                onChange={handleCustomTipChange}
              ></input>
            ) : (
              <button
                id="custom-main-page"
                className="tip-square-main-page"
                onClick={fcustomTipActiv}
              >
                Custom
              </button>
            )}
          </div>
          <div className="subtitle-main-page">Number of People</div>
          <div className="number-of-people-main-page input-with-icon">
            <img
              src="/images/People_Icon.png"
              className="people-icon-main-page input-icon"
              alt=""
            ></img>
            <input
              className="input-text-main-page"
              type="number"
              value={personsNumber}
              onChange={handlePersonsNumberChange}
            ></input>
          </div>
        </div>
        <div className="right-col-main-page">
          <div className="tip-amount-main-page">
            <div className="tip-amount-left-text-main-page">
              <div className="tip-amount-upper-text-main-page">Tip Amount</div>
              <div className="tip-amount-subtext-main-page">/person</div>
            </div>
            <div className="tip-amount-value-right-page">
              ${tipAmount.toFixed(2)}
            </div>
          </div>
          <div className="tip-amount-main-page">
            <div className="tip-amount-left-text-main-page">
              <div className="tip-amount-upper-text-main-page">Tip Amount</div>
              <div className="tip-amount-subtext-main-page">/total</div>
            </div>
            <div className="tip-amount-value-right-page">
              ${tipAmountTotal.toFixed(2)}
            </div>
          </div>
          <button
            className="reset-button-main-page"
            onClick={() => {
              setSelectedTip(null);
              setBillAmount(0);
              setPersonsNumber(1);
              setCustomTipActiv(false);
              setCustomTip(null);
            }}
            placeholder="%"
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
