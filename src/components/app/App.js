import React from "react";
import { useUser } from "../../context/UserContext";

import "./app.scss";

const AuthenticatedApp = React.lazy(() =>
  import("../authenticatedApp/AuthenticatedApp")
);
const UnauthenticatedApp = React.lazy(() =>
  import("../unauthenticatedApp/UnauthenticatedApp")
);

function App() {
  const user = useUser();
  console.log(user);
  return (
    <React.Suspense fallback={"Loading...."}>
      {user ? <AuthenticatedApp user={user} /> : <UnauthenticatedApp />}
    </React.Suspense>
  );
}
export default App;
