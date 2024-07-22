import { useState } from "react";
import Input from "./components/Input";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { FaExchangeAlt } from "react-icons/fa";

function App() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("inr");
    const [to, setTo] = useState("usd");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(from);
    const options = Object.keys(currencyInfo);
    const BackgroundImage = "https://images.pexels.com/photos/1629172/pexels-photo-1629172.jpeg?auto=compress&cs=tinysrgb&w=600";

    const swap = () => {
        setFrom(to);
        setTo(from);
        setConvertedAmount(amount);
        setAmount(convertedAmount);
    };

    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to]);
    };

    return (
        <div
            className="w-full h-screen flex flex-col justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('${BackgroundImage}')`,
            }}
        >
                        <h1 className="text-3xl font-bold text-center mb-6 bg-red-600 text-white p-4 rounded-lg shadow-md animate__animated animate__fadeIn animate__delay-1s">
                    REAL-TIME CURRENCY CONVERTER IN REACTJS
                </h1>
            <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/40 shadow-lg animate__animated animate__fadeIn">

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                    }}
                >
                    <div className="w-full mb-4">
                        <Input
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(curr) => setFrom(curr)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-12 flex justify-center items-center mb-4">
                        <button
                            type="button"
                            className="transform transition-transform duration-300 hover:scale-110 bg-blue-600 text-white p-3 rounded-full shadow-md"
                            onClick={swap}
                        >
                            <FaExchangeAlt />
                        </button>
                    </div>
                    <div className="w-full mb-6">
                        <Input
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(curr) => setTo(curr)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg transform transition-transform duration-300 hover:scale-105 shadow-lg"
                    >
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default App;
