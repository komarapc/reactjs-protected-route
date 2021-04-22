import { Redirect, Route } from "react-router";

const PrivateRoute = (props: any) => {
  const { component: Component, auth } = props;
  console.log(auth);
  const user: { id: number; name: string; role: number } = {
    id: 1,
    name: "Komar",
    role: 2,
  };

  return (
    <Route
      render={(props) =>
        auth ? (
          <Component {...props} user={user}></Component>
        ) : (
          <Redirect to={{ pathname: "/" }}></Redirect>
        )
      }
    />
  );
};
export default PrivateRoute;
