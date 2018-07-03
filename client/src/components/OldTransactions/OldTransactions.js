import React from "react";
import "./OldTransactions.css";

const OldTransactions = props => (
    <div className="OldTransactions">{props.children}
        <div className="OldTransTitle">
            All Old Transactions
        </div>   
    </div>        
);

export default OldTransactions;