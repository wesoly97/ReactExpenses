import React from "react";
import styles from "./Input.module.css";
import { useState } from "react";
import { Select, TextInput } from "react-materialize";
export default function List({
  list,
  setList,
  setSummaryValue,
  setCountValue,
}) {
  const DeleteALlExpense = () => {
    setList([]);
  };

  const [selectedString, setSelectedString] = useState("");
  const [selected, setSelected] = useState(true);
  const [search, setSearch] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [amountFrom, setAmountFrom] = useState("");
  const [amountTo, setAmountTo] = useState("");
  function handleChange(e) {
    if (e.target.value == "true") {
      setSelected(true);
      setAmountFrom("");
      setAmountTo("");
    } else {
      setSelected(false);
      setDateFrom("");
      setDateTo("");
    }
  }
  let sum = 0;
  let count = 0;
  const htmlList = list
    .filter((item) => item.text.includes(search))
    .map(({ id, text, amount, date }) => {
      if (selected) {
        if (dateFrom == "" && dateTo == "") {
          {
            sum = sum + Number(amount);
            count = count + 1;
          }
          return (
            <tr key={id}>
              <td>
                <b>{text}</b>
                <p>{date}</p>
              </td>
              <td>
                <b>{"$" + amount}</b>
              </td>
            </tr>
          );
        } else if (dateFrom <= date && dateTo >= date) {
          {
            sum = sum + Number(amount);
            count = count + 1;
          }
          return (
            <tr key={id}>
              <td>
                <b>{text}</b>
                <p>{date}</p>
              </td>
              <td>
                <b>{"$" + amount}</b>
              </td>
            </tr>
          );
        } else if (dateFrom <= date && dateTo == "") {
          {
            sum = sum + Number(amount);
            count = count + 1;
          }
          return (
            <tr key={id}>
              <td>
                <b>{text}</b>
                <p>{date}</p>
              </td>
              <td>
                <b>{"$" + amount}</b>
              </td>
            </tr>
          );
        } else if (dateTo >= date && dateFrom == "") {
          {
            sum = sum + Number(amount);
            count = count + 1;
          }
          return (
            <tr key={id}>
              <td>
                <b>{text}</b>
                <p>{date}</p>
              </td>
              <td>
                <b>{"$" + amount}</b>
              </td>
            </tr>
          );
        }
      } else {
        if (amountFrom == "" && amountTo == "") {
          {
            sum = sum + Number(amount);
            count = count + 1;
          }
          return (
            <tr key={id}>
              <td>
                <b>{text}</b>
                <p>{date}</p>
              </td>
              <td>
                <b>{"$" + amount}</b>
              </td>
            </tr>
          );
        } else if (
          Number(amountFrom) <= Number(amount) &&
          Number(amountTo) >= Number(amount)
        ) {
          {
            sum = sum + Number(amount);
            count = count + 1;
          }
          return (
            <tr key={id}>
              <td>
                <b>{text}</b>
                <p>{date}</p>
              </td>
              <td>
                <b>{"$" + amount}</b>
              </td>
            </tr>
          );
        } else if (Number(amountFrom) <= Number(amount) && amountTo == "") {
          {
            sum = sum + Number(amount);
            count = count + 1;
          }
          return (
            <tr key={id}>
              <td>
                <b>{text}</b>
                <p>{date}</p>
              </td>
              <td>
                <b>{"$" + amount}</b>
              </td>
            </tr>
          );
        } else if (Number(amountTo) >= Number(amount) && amountFrom == "") {
          {
            sum = sum + Number(amount);
            count = count + 1;
          }
          return (
            <tr key={id}>
              <td>
                <b>{text}</b>
                <p>{date}</p>
              </td>
              <td>
                <b>{"$" + amount}</b>
              </td>
            </tr>
          );
        }
      }
    });

  if (!list.length) {
    return (
      <div>
        <div className={styles.container}>
          <h5>No expenses to show! click on "Add Expense" button to add new!</h5>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className={styles.container}>
          <div className="row">
            <div className="input-field col s3 ">
              <TextInput
                id="TextInput-4"
                label="Search Expenses"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="input-field col s3">
              <Select
                id="Select"
                multiple={false}
                options={{
                  classes: "",
                  dropdownOptions: {
                    alignment: "left",
                    autoTrigger: true,
                    closeOnClick: true,
                    constrainWidth: true,
                    coverTrigger: true,
                    hover: false,
                    inDuration: 150,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 250,
                  },
                }}
                value={selectedString}
                onChange={handleChange}
              >
                <option selected Value="true">DATE</option>
                <option value="false">AMOUNT</option>
              </Select>
            </div>
            <div className="input-field col s6">
              {selected ? (
                <div>
                  <div className="input-field col s6">
                    <input
                      type="date"
                      id="date11"
                      className="datepicker"
                      value={dateFrom}
                      format="dd-MM-yyyy"
                      onChange={(e) => setDateFrom(e.target.value)}
                    />
                    <label htmlFor="date11">DATE FROM:</label>
                  </div>
                  <div className="input-field col s6">
                    <input
                      type="date"
                      id="date12"
                      className="datepicker"
                      value={dateTo}
                      format="dd-MM-yyyy"
                      min={dateFrom}
                      onChange={(e) => setDateTo(e.target.value)}
                    />
                    <label htmlFor="date12">DATE TO:</label>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="input-field col s6">
                    <input
                      type="number"
                      id="amount1"
                      className="autocomplete "
                      min="1"
                      step="any"
                      value={amountFrom}
                      onChange={(e) => setAmountFrom(e.target.value)}
                    />
                    <label htmlFor="amount1">Amount FROM:</label>
                  </div>

                  <div className="input-field col s6">
                    <input
                      type="number"
                      id="amount2"
                      className="autocomplete "
                      min={amountFrom}
                      step="any"
                      value={amountTo}
                      onChange={(e) => setAmountTo(e.target.value)}
                    />
                    <label htmlFor="amount2">Amount TO:</label>
                  </div>
                </div>
              )}
            </div>
          </div>

          <h5>
            <a
              className="btn-floating btn-small waves-effect waves-light red"
              onClick={() => DeleteALlExpense()}
            >
              <i className="material-icons">delete_sweep</i>
            </a>
          </h5>

          <table className="centered">
            <thead className="grey lighten-4">
              <tr>
                <th>Expense</th>

                <th>Amount</th>
              </tr>
            </thead>
            <tbody>{htmlList}</tbody>
            {setSummaryValue(Math.round(sum * 100) / 100)}
            {setCountValue(count)}
          </table>
        </div>
      </div>
    );
  }
}
