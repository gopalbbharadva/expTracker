import React, { useContext, useEffect, useState } from "react";
import { uuid } from "uuidv4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaGithub, FaTwitter, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import {
  faRupeeSign,
  faTag,
  faCheck,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import emptyCart from "../Images/emptyCart.png";
import OutputComp from "./OutputComp";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { themeContext } from "../Contexts/Themecontext";

toast.configure();
const InputComp = () => {
  let [total, setTotal] = useState("");
  let [expenseItem, setExpenseItem] = useState("");
  let [expenseAmount, setExpenseAmount] = useState("");
  let [expenseList, setExpenseList] = useState([]);
  let [isEdit, setEdit] = useState(false);
  let [id, setId] = useState(0);
  let d = new Date();

  const { light, dark, isLightTheme, toggleTheme } = useContext(themeContext);
  const currentTheme = isLightTheme ? light : dark;

  useEffect(() => {
    getTotal();
  });

  const getTotal = () => {
    setTotal(
      expenseList.reduce((acc, item) => {
        return (acc += Number(item.expenseAmount));
      }, 0)
    );
  };

  const updateExpense = (id) => {
    let editExpense = expenseList.find((item) => item.id === id);
    let { expenseItem, expenseAmount } = editExpense;
    setExpenseItem(expenseItem);
    setExpenseAmount(expenseAmount);
    setEdit(true);
    setId(id);
  };

  const deleteExpense = (id) => {
    let deleteExpense = expenseList.find((item) => item.id === id);
    let deleteExpenseIndex = expenseList.findIndex(
      (item) => item.id === deleteExpense.id
    );
    let isDelete = window.confirm(
      `Are you sure you want to delete ${deleteExpense.expenseItem}`
    );
    if (isDelete) {
      let tempExpenseArray = expenseList.slice();
      tempExpenseArray.splice(deleteExpenseIndex, 1);
      setExpenseList(tempExpenseArray);
      toast.warning(`${deleteExpense.expenseItem} deleted Successfully.`, {
        autoClose: 2000,
      });
      if (
        expenseAmount === deleteExpense.expenseAmount ||
        expenseItem === deleteExpense.expenseItem
      ) {
        setExpenseAmount("");
        setExpenseItem("");
        setEdit(false);
      }
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (expenseAmount > 0) {
      if (isEdit) {
        let tempExpenseList = expenseList.map((item) => {
          return item.id === id
            ? { ...item, expenseItem, expenseAmount }
            : item;
        });
        setExpenseList(tempExpenseList);
        setEdit(false);
        toast.info(`${expenseItem} expense updated successfully`, {
          position: toast.POSITION.BOTTOM_CENTER,
          autoClose: 2000,
        });
      } else {
        setTimeout(() => {
          let tempExpense = {
            id: uuid(),
            expenseAmount: Number(expenseAmount),
            expenseItem,
            time: d.toLocaleTimeString(),
          };
          setExpenseList([...expenseList, tempExpense]);
          toast.success(
            `${tempExpense.expenseItem} expense added successfully`,
            {
              position: toast.POSITION.BOTTOM_CENTER,
              autoClose: 2000,
            }
          );
        }, 1000);
      }
    } else {
      toast.error("Price should be greater than 0", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
    }
    setExpenseItem("");
    setExpenseAmount("");
  };

  return (
    <div
      style={{
        backgroundColor: currentTheme.bgColor,
      }}
      className="main"
    >
      <header
        style={{
          backgroundColor: currentTheme.bgColor,
          border: `2px solid ${currentTheme.borderColor} `,
        }}
      >
        <p
          style={{
            color: currentTheme.textColor,
          }}
        >
          Expense Tracker App
        </p>
        <button
          onClick={toggleTheme}
          style={{
            color: isLightTheme ? "black" : "white",
          }}
          className="theme-button"
        >
          {isLightTheme ? <FaMoon /> : <FaSun />}
        </button>
      </header>
      <div className="main-container">
        <div
          style={{
            backgroundColor: currentTheme.formBG,
            boxShadow: `inset 10px 5px 20px rgba(0, 0, 0, 0.1), inset 10px 5px 10px ${currentTheme.formBG}`,
          }}
          className="inputDiv"
        >
          {total > 0 ? (
            <h3>
              Total Spending : <span style={{ color: "red" }}>{total}</span>
            </h3>
          ) : null}
          <form onSubmit={submitHandler}>
            <div className="both">
              <input
                required
                onChange={(e) => setExpenseAmount(e.target.value)}
                value={expenseAmount}
                type="number"
                placeholder="e.g 650"
                id="expenseAmount"
              />
              <div>
                <FontAwesomeIcon
                  style={{
                    color: currentTheme.textColor,
                  }}
                  icon={faRupeeSign}
                ></FontAwesomeIcon>
              </div>
            </div>
            <div className="both">
              <input
                required
                placeholder="Shoes"
                onChange={(e) => setExpenseItem(e.target.value)}
                value={expenseItem}
                type="text"
                id="expenseDesc"
              />
              <div>
                <FontAwesomeIcon
                  style={{
                    color: currentTheme.textColor,
                  }}
                  icon={faTag}
                ></FontAwesomeIcon>
              </div>
            </div>
            <button
              style={{
                backgroundColor: currentTheme.bgColor,
                color: currentTheme.textColor,
                border: `2px solid ${currentTheme.borderColor}`,
              }}
              className="group-button"
              type="submit"
            >
              {isEdit ? (
                <FontAwesomeIcon icon={faWrench}></FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
              )}
            </button>
          </form>
        </div>
        {expenseList.length > 0 ? (
          expenseList.map((currentItem) => {
            return (
              <OutputComp
                key={currentItem.id}
                id={currentItem.id}
                itemName={currentItem.expenseItem}
                itemAmt={currentItem.expenseAmount}
                time={currentItem.time}
                deleteExpense={deleteExpense}
                updateExpense={updateExpense}
              />
            );
          })
        ) : (
          <div className="empty-list">
            <p>Empty List</p>
            <img src={emptyCart} alt="no preview available" />
          </div>
        )}
      </div>
      <footer
        style={{
          backgroundColor: currentTheme.bgColor,
          border: `2px solid ${currentTheme.borderColor}`,
        }}
      >
        <p
          style={{
            color: currentTheme.textColor,
          }}
        >
          Say Hi 👋
        </p>
        <ul>
          <li>
            <a
              style={{
                color: currentTheme.textColor,
              }}
              href="https://github.com/gopalbbharadva"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              style={{
                color: currentTheme.textColor,
              }}
              href="https://twitter.com/Gopal_33_gb"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              style={{
                color: currentTheme.textColor,
              }}
              href="https://www.linkedin.com/in/gopal-bharadva-1aa880176/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </footer>
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
