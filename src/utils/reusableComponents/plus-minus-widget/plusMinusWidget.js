import React from "react";
import styles from "./plusMinusWidget.module.scss";
import "../../../style-helpers/baseStyles.scss";
import { string, oneOf } from "prop-types";

const PlusMinusWidget = ({substractAction, addAction}) => {
  return (
    <div className="flex">
      <CharButton char={"-"} type={"dark"} eventAction={substractAction} />
      <CharButton char={"+"} type={"light"} eventAction={addAction} />
    </div>
  );
};

const CharButton = ({ char, type, eventAction }) => {
  let classNames = `${styles.btn} cursor-pointer `;
  let buttonClass = "";
  switch (type) {
    case "dark":
      buttonClass = `${styles["btn-dark"]}`;
      break;
    default:
      buttonClass = `${styles["btn-light"]}`;
      break;
  }
  classNames = classNames.concat(buttonClass);

  return (
    <button className={classNames} onClick={()=>eventAction()}>
      {char}
    </button>
  );
};

CharButton.propTypes = {
  char: string,
  type: oneOf(["dark", "light"]),
};

export default PlusMinusWidget;
