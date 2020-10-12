import React from "react";

import "./pageHeader.scss";

const PageHeader = ({ children }) => {
  return <div className="page-header">{children}</div>;
};

export default PageHeader;
