import { useId } from "react";

function Input({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "inr",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    const amountInputId = useId();
    return (
        <div className={`bg-white p-4 rounded-lg text-sm flex flex-col ${className} shadow-md`}>
            <label htmlFor={amountInputId} className="text-black/60 mb-2">
                {label}
            </label>
            <div className="flex">
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-2 px-3 rounded-l-lg border border-r-0 border-gray-300 disabled:bg-gray-100"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
                <select
                    className="rounded-r-lg px-3 py-2 bg-gray-100 border border-l-0 border-gray-300 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((curr) => (
                        <option key={curr} value={curr}>
                            {curr.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default Input;
