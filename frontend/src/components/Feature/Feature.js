import React from"react";import"./feature.css";let Feature=({title:e,content:t,imageSrc:r,altText:a})=><div className="feature-item">
      <img src={r}alt={a}className="feature-icon"/>
      <h3 className="feature-item-title">{e}</h3>
      <p >{t}</p>
    </div>;export default Feature;