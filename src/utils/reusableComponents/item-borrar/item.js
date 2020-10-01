import React from "react";
// import styles from "./item.module.scss";
import { string } from "prop-types";

const Item = ({ boxClasses, boxClickEvent, imgAlt, imgSrc, imgClasses }) => {

  return (
    <div className={`${boxClasses} `} onClick={boxClickEvent}>
      <img alt={imgAlt} src={imgSrc} className={imgClasses} />
    </div>
  );
};
export default Item;

Item.propTypes = {
  imageUrl: string,
};
