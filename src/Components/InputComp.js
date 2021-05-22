import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRupeeSign,
  faTag,
  faAngleDoubleRight,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { firestoreRef } from "../config";
import firebase from "firebase";
import OutputComp from "./OutputComp";

const InputComp = () => {
  let [total, setTotal] = useState(0);
  let [item, setItem] = useState('');
  let [amt, setAmount] = useState('');
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = () => {
    firestoreRef.collection("expenses").onSnapshot(function (snap) {
      setItemList(
        snap.docs.map((item) => ({
          id: item.id,
          item: item.data().item,
          itemAmount: item.data().itemAmount,
          date: item.data().createdAt,
        }))
      );
    });
  };
  const submitHandler = () => {
    if (item && amt) {
      firestoreRef.collection("expenses").add({
        item: item,
        itemAmount: amt,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      total += parseInt(amt);
      setTotal(total);
      setAmount("");
      setItem("");
    } else alert("Plz enter item data");
  };

  // const formHandler=()=>{

  // }
  // const getTotal = () => {
  //   itemList.map((item) => {
  //     console.log(item.itemAmount)
  //     total += parseInt(item.itemAmount);
  //     // console.log(item);
  //   });
  //   setTotal(total);
  //   console.log(total);
  // };
  const itemHandler = (e) => {
    item = e.target.value;
    if (item) setItem(item);
  };
  const itemAmtHandler = (e) => {
    amt = e.target.value;
    if (amt) setAmount(amt);
  };
  return (
    <div>
      <header>
        <p style={{ margin: 0, fontSize: "larger" }}>Expense Tracker App</p>
      </header>
      <div className="inputDiv">
        <h3>{`Total:${total}`}</h3>
        <form>
          <div className="inputDiv-amt">
            <input
              onChange={itemAmtHandler}
              value={amt}
              style={{ fontSize: "1rem" }}
              type="number"
              placeholder="What's Amount?"
              id="expenseAmount"
            />
            <div>
              <FontAwesomeIcon icon={faRupeeSign}></FontAwesomeIcon>
            </div>
          </div>
          <div className="inputDiv-amt">
            <input
              onChange={itemHandler}
              value={item}
              type="text"
              style={{ fontSize: "1rem" }}
              placeholder="Which expense"
              id="expenseDesc"
            />
            <div>
              <FontAwesomeIcon icon={faTag}></FontAwesomeIcon>
            </div>
          </div>
        </form>
        <button
          style={{ cursor: "pointer" }}
          // disabled={flag}
          onClick={submitHandler}
        >
          <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
        </button>
      </div>
      {itemList.map((currentItem) => {
        return (
          <OutputComp
            key={currentItem.id}
            id={currentItem.id}
            itemName={currentItem.item}
            itemAmt={currentItem.itemAmount}
            date={currentItem.date}
          />
        );
      })}
    </div>
  );
};

export default InputComp;
