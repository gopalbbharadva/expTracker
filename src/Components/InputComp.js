import React, { Component, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRupeeSign,
  faTag,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { firestoreRef } from "../config";
import firebase from "firebase";
import OutputComp from "./OutputComp";

const InputComp = () => {
  const [item, setItem] = useState("");
  const [amt, setAmount] = useState("");
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
    firestoreRef.collection("expenses").add({
      item: item,
      itemAmount: amt,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setItem("");
    setAmount("");
    console.log(itemList);
  };
  return (
    <div>
      <header>
        <p style={{ margin: 0, fontSize: "larger" }}>Expense Tracker App</p>
      </header>
      <div className="inputDiv">
        <h3>Total:</h3>
        <div className="inputDiv-amt">
          <input
            onChange={(e) => setItem(e.target.value)}
            value={item}
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
            onChange={(e) => setAmount(e.target.value)}
            value={amt}
            type="text"
            style={{ fontSize: "1rem" }}
            placeholder="Which expense"
            id="expenseDesc"
          />
          <div>
            <FontAwesomeIcon icon={faTag}></FontAwesomeIcon>
          </div>
        </div>
        <button onClick={submitHandler}>
          <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
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
