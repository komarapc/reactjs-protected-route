import DashboardAdmin from "./dashboard-admin";
import DashboardUser from "./dashboard-user";
import Error403 from "../errors/403";
import { Fragment } from "react";
import { Redirect } from "react-router";

function Dashboard(props: any) {
  const { user } = props;
  const pathname = props.location.pathname;
  if (pathname === "/admin" && user.role === 1) {
    return <DashboardAdmin {...props}></DashboardAdmin>;
  }
  if (pathname === "/user" && user.role === 2) {
    return <DashboardUser {...props} />;
  }

  // return <Redirect to={{ pathname: "/" }}></Redirect>;
  return <Error403></Error403>;
}

export default Dashboard;
