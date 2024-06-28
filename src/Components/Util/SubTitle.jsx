import React from "react";
import { Link } from "react-router-dom";

const SubTitle = ({ btntitle, title, pathText }) => {
  return (
    <div className="d-flex justify-content-between pt-4">
      <div className="sub-tile">{title}</div>
      {btntitle ? (
        <Link to={`/${pathText}`}>
          <div className="shopping-now">{btntitle}</div>
        </Link>
      ) : null}
    </div>
  );
};

export default SubTitle;
