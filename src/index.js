import React from "react";
import ReactDOM from "react-dom";
import Cards from "./Cards";
import Sdata from "./Sdata";
import "./index.css";



ReactDOM.render(
  <>
    <h1 className="heading_style">List of top 5 Netflix series in 2020</h1>
    {Sdata.map((val)=>{
      return (
        <Cards
          key={val.id}
          imgscr={val.imgscr}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
      );
    })}
      
  </>,
  document.getElementById("root")
);
