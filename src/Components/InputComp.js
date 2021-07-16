import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign, faTag, faCheck } from "@fortawesome/free-solid-svg-icons";
import { firestoreRef } from "../config";
import firebase from "firebase";
import OutputComp from "./OutputComp";

const InputComp = () => {
  let [total, setTotal] = useState(0);
  let [item, setItem] = useState("");
  let [amt, setAmount] = useState("");
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    getTotal();
  }, [itemList]);

  const getTotal = async () => {
    await setTotal(
      itemList.reduce((acc, item) => {
        return (acc += parseInt(item.itemAmount));
      }, 0)
    );
  };

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

  const submitHandler = async (e) => {
    e.preventDefault();
    if (item && amt) {
      await firestoreRef.collection("expenses").add({
        item: item,
        itemAmount: amt,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setAmount(" ");
      setItem(" ");
    } else alert("Plz enter item data");
  };

  return (
    <div>
      <header>
        <p style={{ margin: 0, fontSize: "larger" }}>Expense Tracker App</p>
      </header>
      <div className="inputDiv">
        {total > 0? <h3>{`Total:${total}`}</h3>: <h3>No expenses</h3>}
        <form onSubmit={submitHandler}>
          <div className="both">
            <input
              onChange={(e) => setAmount(e.target.value)}
              value={amt}
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
              onChange={(e) => setItem(e.target.value)}
              value={item}
              type="text"
              placeholder="Which Expense?"
              id="expenseDesc"
            />
            <div>
              <FontAwesomeIcon icon={faTag}></FontAwesomeIcon>
            </div>
          </div>
          <button type="submit" style={{ cursor: "pointer" }}>
            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
          </button>
        </form>
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
