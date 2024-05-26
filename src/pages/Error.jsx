import React from "react";
import { Link, useRouteError } from "react-router-dom";
function Error() {
  const error = useRouteError();

  if (error.status == 404) {
    return <h1>Error 404</h1>;
  } else {
  }
  return <h1>Error found</h1>;
}

export default Error;
