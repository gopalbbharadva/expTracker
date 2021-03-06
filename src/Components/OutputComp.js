import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faRupeeSign,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { themeContext } from "../Contexts/Themecontext";

const OutputComp = ({
  id,
  itemName,
  itemAmt,
  time,
  updateExpense,
  deleteExpense,
}) => {
  const { light, dark, isLightTheme } = useContext(themeContext);
  const currentTheme = isLightTheme ? light : dark;
  return (
    <>
      <div
        className="expenseItem"
        style={{
          border: `2px solid ${currentTheme.borderColor}`,
          borderRadius: "5px",
        }}
      >
        <div>
          <button
            className="group-button"
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
            <p style={{ margin: "0", color: currentTheme.textColor }}>
              {itemName}
            </p>
            <small>{time}</small>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <small>
            {itemAmt} <FontAwesomeIcon icon={faRupeeSign}></FontAwesomeIcon>
          </small>
          <button
            className="group-button"
            onClick={() => deleteExpense(id)}
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
