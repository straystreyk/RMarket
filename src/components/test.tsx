import * as React from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import { StoreStateType } from "../store/store";
import classes from "./comp.module.scss";

export const Test: React.FC<{ test?: string }> = ({ test }) => {
  const count = useSelector((state: StoreStateType) => state.counter.value);

  return (
    <div>
      <Helmet>
        <title>{test ? test + count : "React Helmet Title" + count}</title>
        <meta name="description" content="Jopa" />
        <meta name="jioap" content="asdasdas" />
      </Helmet>
      <Link to="/test">testLink {test}</Link>
      <span className={classes.test}>{count}</span>
    </div>
  );
};
