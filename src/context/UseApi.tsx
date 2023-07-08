import axios from "axios";
import { toast } from "react-toastify";
import { ReactNode, createContext, useContext, useState } from "react";

interface ApiContextProps {
  authenticated: (apiKey: string) => Promise<void>;
  userIsAuthenticated: boolean;
}
const apiContext = createContext<ApiContextProps>({} as ApiContextProps);

const API_URL = "https://fitness-calculator.p.rapidapi.com";

export const ApiProvider = (props: { children: ReactNode }) => {
  const [userIsAuthenticated, setUserIsAuthenticated] = useState(() => {
    if (localStorage.getItem("apiKey")) {
      return true;
    } else {
      return false;
    }
  });

  const authenticated = async (apikey: string) => {
    let sucess = true;
    await axios
      .get(`${API_URL}/foodids/tablenames`, {
        headers: {
          "X-RapidAPI-Key": apikey,
          "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
        },
      })
      .then((response) => {
        if (response.status == 200) {
          toast.success("usuário logado com sucesso");

          localStorage.setItem("apiKey", apikey);
        }
      })
      .catch((error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          toast.error("Falha ao realizar o login");
          sucess = false;
        }
      });
    setUserIsAuthenticated(sucess);
  };
  return (
    <apiContext.Provider value={{ authenticated, userIsAuthenticated }}>
      {props.children}
    </apiContext.Provider>
  );
};
export const useApi = () => {
  const context = useContext(apiContext);
  return context;
};
