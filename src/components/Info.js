import React from "react";
import "../App.css";
import { Insights } from "../components/Insights";


function Info() {
    return (
        <>
        
          <div className="insights-container info">
          
            {Insights.map((item, index) => {
              return (
                <div key={index} className="insight-div">
                  <div className={` insight-logo ${item.cName}` } >{item.icon}</div>
                  <div className="insight-content">
                    <p className="insight-type">{item.insightType}</p>
                    <h1>{item.insightMain}</h1>
                    <div>
                    {item.insightChange}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
        </>
      );
}

export default Info;