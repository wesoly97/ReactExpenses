import React, { useState } from "react";
import uniqid from "uniqid";
import M from "materialize-css";

export default function Input({ list, setList }) {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  const addExpense = (text, amount, date) => {
    const newExpense = {
      id: uniqid(),
      text: text,
      amount,
      date,
    };

    if (text.length > 0 && date.length > 0 && amount.length > 0) {
      const myList = [...list, newExpense];
      myList.sort((a, b) => {
        if (a.date < b.date) {
          return -1;
        }
        if (a.date > b.date) {
          return 1;
        }
        return 0;
      });
      setList(myList);
    } else if (text.length == 0) {
      M.toast({
        html: "Nie można wpisać wydatku bez nazwy",
        classes: "rounded",
      });
    } else if (amount.length == 0) {
      M.toast({ html: "Nie można wydatku bez wartości", classes: "rounded" });
    } else {
      M.toast({
        html: "Nie można dodać wydatku bez podania daty",
        classes: "rounded",
      });
    }
  };

  return (
    <div>
      <div className="row">
        <div className="input-field col s12">
          <i className="material-icons prefix">mode_edit</i>
          <textarea
            type="text"
            id="text"
            className="autocomplete materialize-textarea"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <label htmlFor="text">Expenses</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12 xd">
          <i className="material-icons prefix">attach_money</i>
          <input
            type="number"
            id="amount"
            className="autocomplete "
            min="1"
            step="any"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <label htmlFor="amount">Amount</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <i className="material-icons prefix">date_range</i>
          <input
            type="date"
            id="date1"
            className="datepicker"
            value={date}
            format="dd-MM-yyyy"
            min={new Date().toISOString().slice(0, 10)}
            onChange={(e) => setDate(e.target.value)}
          />
          <label htmlFor="date1">date:</label>
        </div>
      </div>

      <button
        className="btn waves-effect waves-light brown darken-1"
        type="submit"
        onClick={() => {
          addExpense(text, amount, date);
          setText("");
          setDate("");
          setAmount("");
        }}
      >
        <i className="material-icons right">send</i> dodaj
      </button>
    </div>
  );
}
