import React from "react";
import Illustration from "./illustrations/paperlist.png";

import "./dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dash-half-image">
        <img src={Illustration} alt="woman making shopping list" />
      </div>
      <div className="dash-half-text">
        <h2>
          Save <br /> Time
        </h2>
        <p>
          Save your recipes in lists to easily create a <i>weekly</i> shopping
          list. Save time and avoid stress. <br />
          Try weekly.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
