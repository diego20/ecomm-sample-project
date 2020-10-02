import React from "react";
import { oneOf, any, string, func, bool } from "prop-types";
import styles from "./button.module.scss";
import "../../style-helpers/baseStyles.scss";

const Button = ({
  customClasses,
  buttonType,
  isActive,
  buttonText,
  icon,
  clickEvent,
  helperAction,
}) => {
  const classNames = getButtonClasses(buttonType, isActive);

  return (
    <button className={`${classNames} ${customClasses}`} onClick={clickEvent}>
      {icon}
      <span
        className={`${getTextClasses(isActive)} ${icon && "ml-1"} ${
          styles["price-span"]
        }`}
      >
        {buttonText}
      </span>
      <span
        onClick={() => helperAction()}
        className={`${styles["span-effect"]} ${
          isActive ? styles["active"] : ""
        } `}
      >
        X
      </span>
    </button>
  );
};
export default Button;

const getTextClasses = (isActive) => {
  return isActive
    ? `${styles["font-base-color"]} ${styles["move-effect"]}`
    : `${styles["font-white"]}`;
};

const getButtonClasses = (buttonType, isActive) => {
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
      buttonClass = `${isActive ? styles["active"] : styles["btn-info"]}`;
      break;
  }

  classNames = classNames.concat(buttonClass);

  return classNames;
};

Button.defaultProps = {
  buttonType: "info",
};

Button.propTypes = {
  customClasses: string,
  buttonType: oneOf(["info", "danger", "success"]),
  buttonText: string,
  isActive: bool,
  children: any,
  clickEvent: func,
  helperAction: func,
};
