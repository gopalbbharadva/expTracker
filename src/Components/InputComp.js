import React, { useEffect, useState } from "react";
import { uuid } from "uuidv4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRupeeSign,
  faTag,
  faCheck,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import clock from "../Images/clock.gif";
import OutputComp from "./OutputComp";

const InputComp = () => {
  let [flag, setFlag] = useState(false);
  let [total, setTotal] = useState(0);
  let [expenseItem, setExpenseItem] = useState("");
  let [expenseAmount, setExpenseAmount] = useState("");
  let [expenseList, setExpenseList] = useState([
    {
      id: uuid(),
      expenseItem: "shoes",
      expenseAmount: 350,
    },
  ]);
  let [isEdit, setEdit] = useState(false);
  let [id, setId] = useState(0);

  const getTotal = async () => {
    await setTotal(
      expenseList.reduce((acc, item) => {
        return (acc += parseInt(item.amt));
      }, 0)
    );
  };

  const updateExpense = (id) => {
    let tempExpense = expenseList.find((item) => item.id === id);
    let { expenseItem, expenseAmount } = tempExpense;
    setExpenseItem(expenseItem);
    setExpenseAmount(expenseAmount);
    setEdit(true);
    setId(id);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (expenseItem.length > 0 && expenseAmount !== 0) {
      console.log(flag);
      if (isEdit) {
        let tempExpenseList = expenseList.map((item) => {
          return item.id === id
            ? { ...item, expenseItem, expenseAmount }
            : item;
        });
        setExpenseList(tempExpenseList);
        setEdit(false);
      } else {
        flag = true;
        setFlag(flag);

        console.log("else");
        setTimeout(() => {
          let tempExpense = { id: uuid(), expenseAmount, expenseItem };
          setExpenseList([...expenseList, tempExpense]);
        }, 1500);
      }
      flag = false;
      setFlag(flag);
      console.log(flag);

      setExpenseAmount("");
      setExpenseItem("");
    } else alert("Plz enter item data");
  };

  return (
    <div className="main">
      <header>
        <p style={{ margin: 0, fontSize: "larger" }}>Expense Tracker App</p>
      </header>
      <img
        style={{ display: flag ? "block" : "none", margin: "1rem auto" }}
        src={clock}
      />
      <div className="inputDiv">
        {total > 0 ? (
          <h3>
            Bill : <span style={{ color: "red" }}>{total}</span>
          </h3>
        ) : (
          <h3>No expenses</h3>
        )}
        <form onSubmit={submitHandler}>
          <div className="both">
            <input
              onChange={(e) => setExpenseAmount(e.target.value)}
              value={expenseAmount}
              type="number"
              placeholder="What's Amount?"
              id="expenseAmount"
            />
            <div>
              <FontAwesomeIcon icon={faRupeeSign}></FontAwesomeIcon>
            </div>
          </div>
          <div className="both">
            <input
              placeholder="which expense"
              onChange={(e) => setExpenseItem(e.target.value)}
              value={expenseItem}
              type="text"
              id="expenseDesc"
            />
            <div>
              <FontAwesomeIcon icon={faTag}></FontAwesomeIcon>
            </div>
          </div>
          <button type="submit" style={{ cursor: "pointer" }}>
            {isEdit ? (
              <FontAwesomeIcon icon={faWrench}></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
            )}
          </button>
        </form>
      </div>
      {expenseList.map((currentItem) => {
        return (
          <OutputComp
            key={currentItem.id}
            id={currentItem.id}
            itemName={currentItem.expenseItem}
            itemAmt={currentItem.expenseAmount}
            // date={currentItem.date}
            updateExpense={updateExpense}
          />
        );
      })}

      {/* expense model */}

      {/* {selectExpense && ( 
      <div
        className="main-model"
        onClick={checkClick}
        style={{
          display: show ? "block" : "none",
        }}
      >
        <div className="model-container">
          <div className="model">
            <input
              type="number"
              onChange={(e) => setAmount(e.target.value)}
              value={amt}
            />
            <input
              onChange={(e) => setItem(e.target.value)}
              type="text"
              value={item}
            />
            <button>Update</button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default InputComp;
