import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faRupeeSign,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

const OutputComp = ({ id, itemName, itemAmt, updateExpense }) => {
  const deleteItem = () => {};
  return (
    <>
      <div className="expenseItem">
        <div>
          <button
            onClick={() => updateExpense(id)}
            style={{
              padding: 0,
              margin: 0,
              backgroundColor: "white",
            }}
          >
            <FontAwesomeIcon
              style={{ color: "blue" }}
              icon={faEdit}
            ></FontAwesomeIcon>
          </button>
          <div
            style={{
              marginLeft: "1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "self-start",
            }}
          >
            <p style={{ margin: "0" }}>{itemName}</p>
            {/* <small>{date.toDate().toDateString()}</small> */}
          </div>
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
    </>
  );
};

export default OutputComp;
