import { CalcDailyCalory } from "../components/CalcDailyCalory";
import { CalcMacroAmount } from "../components/CalcMacroAmount";
import { NavLink } from "../components/NavLink";
import { createUseStyles } from "react-jss";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

const container = createUseStyles({
  ResultsUser: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
export const ResultsUser: React.FC = () => {
  const classes = container()
  
  const formData = useSelector((state:RootState) =>state.FormData.formData)
  const firstLetterNameUpperCase = (formData.name.charAt(0)).toUpperCase()
  const remainingLetters = formData.name.slice(1)
  const capitalizedName = firstLetterNameUpperCase+remainingLetters
  
  return (
    <>
      <NavLink />
      <div className={classes.ResultsUser}>
        <h2>Bem vindo {capitalizedName}</h2>
        <p> Selecione qual informação gostaria de consultar:</p>
      </div>
      <CalcMacroAmount />
      <CalcDailyCalory />
    </>
  );
};
