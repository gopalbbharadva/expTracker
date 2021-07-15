import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { firestoreRef } from "../config";

const OutputComp = ({ id, itemName, itemAmt, date }) => {
  

  const deleteItem = () => {
    const isDelete = window.confirm(`are you sure u want to delete ${itemAmt}`);
    if (isDelete) {
      firestoreRef.collection("expenses").doc(id).delete();
    }
  };
  if (date) {
    return (
      <div className="expenseItem">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "self-start",
          }}
        >
          <p style={{ margin: "0" }}>{itemName}</p>
          <small>{date.toDate().toDateString()}</small>
          {/* <small>{total}</small> */}
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <small>
            {itemAmt} <FontAwesomeIcon icon={faRupeeSign}></FontAwesomeIcon>
          </small>
          <button
            onClick={deleteItem}
            style={{
              backgroundColor: "red",
              padding: "0",
              margin: "0",
              fontSize: "larger",
            }}
          >
            <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    );
  } else return <div></div>;
};

export default OutputComp;
