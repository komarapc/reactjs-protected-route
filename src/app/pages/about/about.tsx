import { Fragment } from "react";
import { useRouteMatch } from "react-router-dom";

function AboutPage() {
  const match: any = useRouteMatch();
  // const params: any = match.params;

  return (
    <Fragment>
      <div className="container">
        <h1 className="fw-normal">About Page</h1>
        <p>About id: {match.params.id}</p>
      </div>
    </Fragment>
  );
}
export default AboutPage;
