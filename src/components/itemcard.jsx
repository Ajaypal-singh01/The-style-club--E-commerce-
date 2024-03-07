import React from "react";
import "./itemcard.css";

const itemcard = (props) => {
  return (
    <>
      {props.item.map((item,index) => (
        
          <div key={index} className="container">
            <a className="no-decoration" target='blank' href={item.link}>
            <img src={item.image} alt="pic"  />
           
            <div className="item_name">{item.name}</div>
            <div className="item_category">{item.category}</div>
            <div className="item_price">MRP : &#8377;{item.price}</div>
            </a>
          </div>
        
      ))}
    </>
  );
};
export default itemcard;
