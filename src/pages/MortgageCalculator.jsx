import React, { useState } from "react";

const MortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculatePayment = (e) => {
    e.preventDefault();

    const principal = parseFloat(loanAmount);
    const annualInterest = parseFloat(interestRate) / 100;
    const years = parseFloat(loanTerm);

    if (isNaN(principal) || isNaN(annualInterest) || isNaN(years)) {
      setMonthlyPayment(null);
      return;
    }

    const monthlyRate = annualInterest / 12;
    const totalPayments = years * 12;

    const monthly =
      (principal * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -totalPayments));

    setMonthlyPayment(monthly.toFixed(2));
  };

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-2xl mx-auto bg-gray-50 rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Mortgage Calculator
        </h2>
        <form onSubmit={calculatePayment} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-1">
              Loan Amount (PKR)
            </label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              placeholder="e.g. 1000000"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">
              Interest Rate (%)
            </label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              placeholder="e.g. 7.5"
              step="0.1"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">
              Loan Term (Years)
            </label>
            <input
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              placeholder="e.g. 20"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Calculate
          </button>
        </form>

        {monthlyPayment && (
          <div className="mt-6 p-4 bg-green-100 text-green-800 rounded text-center">
            <p className="text-lg font-semibold">Estimated Monthly Payment:</p>
            <p className="text-2xl font-bold">PKR {monthlyPayment}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MortgageCalculator;
