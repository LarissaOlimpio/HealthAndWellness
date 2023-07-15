import { CalcDailyCalory } from "../components/CalcDailyCalory";
import { CalcMacroAmount } from "../components/CalcMacroAmount";
import { NavLink } from "../components/NavLink";

export const ResultsUser: React.FC = () => {
  return (
    <>
      <NavLink />
      <div>
        <h2>Bem vindo </h2>
        <p> Selecione qual informação gostaria de consultar:</p>
      </div>
      <CalcMacroAmount />
      <CalcDailyCalory />
    </>
  );
};
