import { Footer } from "./components/Footer";
import { LoginForm } from "./components/LoginForm";
import { useApi } from "./context/UseApi";
import { Outlet } from "react-router-dom";

function App() {
  const { userIsAuthenticated } = useApi();
  return (
    <>
      <h1>Saúde e bem estar em suas mãos</h1>
      {!userIsAuthenticated && <LoginForm />}
      {userIsAuthenticated && <Outlet />}
      <Footer />
    </>
  );
}

export default App;
