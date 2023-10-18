import React from "react";
import * as AiIcons from "react-icons/ai";
import * as TbIcons from "react-icons/tb";
import * as BsIcons from "react-icons/bs";
import * as CiIcons from "react-icons/ci";
import "../App.css";

export const Insights = [
  {
    icon: <TbIcons.TbPointerDollar />,
    insightType: "Earning",
    insightMain: "$198k",
    insightChange: (
      <div className="arrowup">
        <AiIcons.AiOutlineArrowUp className="anticon" />
        <span>37.8%</span>
        <p>this month</p>
      </div>
    ),
    cName: "earning",
  },
  {
    icon: <BsIcons.BsFillCartCheckFill />,
    insightType: "Orders",
    insightMain: "$2.4k",
    insightChange: (
      <div className="arrowdown">
        <AiIcons.AiOutlineArrowDown className="anticon" />
        <span>2%</span>
        <p>this month</p>
      </div>
    ),
    cName: "orders",
  },
  {
    icon: <CiIcons.CiWallet />,
    insightType: "Balance",
    insightMain: "$2.4k",
    insightChange: (
      <div className="arrowdown">
        <AiIcons.AiOutlineArrowDown className="anticon" />
        <span>2%</span>
        <p>this month</p>
      </div>
    ),
    cName: "balance",
  },
  {
    icon: <BsIcons.BsBagCheck />,
    insightType: "Total Sales",
    insightMain: "$89k",
    insightChange: (
      <div className="arrowup">
        <AiIcons.AiOutlineArrowUp className="anticon" />
        <span>11%</span>
        <p>this month</p>
      </div>
    ),
    cName: "totalSl",
  },
];
