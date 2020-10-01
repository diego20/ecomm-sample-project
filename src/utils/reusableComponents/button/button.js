import React from "react";
import { oneOf, any, string, func } from "prop-types";
import styles from "./button.module.scss";
import "../../../style-helpers/baseStyles.scss";

const Button = ({ buttonType, buttonText, icon, clickEvent }) => {
  const classNames = getButtonClasses(buttonType);

  return (
    <button className={classNames} onClick={clickEvent}>
      {icon}
      <span className={`font-white ${icon && "ml-1"}`}>{buttonText}</span>
    </button>
  );
};
export default Button;

const getButtonClasses = (buttonType) => {
  let classNames = `${styles.btn} cursor-pointer `;

  let buttonClass = "";
  switch (buttonType) {
    case "danger":
      buttonClass = `${styles["btn-danger"]}`;
      break;
    case "success":
      buttonClass = `${styles["btn-success"]}`;
      break;
    default:
      buttonClass = `${styles["btn-info"]}`;
      break;
  }

  classNames = classNames.concat(buttonClass);

  return classNames;
};

Button.defaultProps = {
  buttonType: "info",
};

Button.propTypes = {
  buttonType: oneOf(["info", "danger", "success"]),
  buttonText: string,
  children: any,
  clickEvent: func
};
