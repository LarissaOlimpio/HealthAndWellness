import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { IFormData } from "../../interfaces/IFormData";
import { Button } from "../Button";
import styles from "./CalcMacroAmounts.module.css";

interface IResultCalcMacroAmount {
  data: {
    calorie: number;
    balanced: {
      protein: number;
      fat: number;
      carbs: number;
    };
  };
}
export const CalcMacroAmount: React.FC = () => {
  const formData = useSelector((state: RootState) => state.FormData.formData);
  const API_URL = "https://fitness-calculator.p.rapidapi.com";
  const token: string | null = localStorage.getItem("apiKey");
  const [results, setResults] = useState<IResultCalcMacroAmount | undefined>();

  const CalcMacroAmountApi = async (
    formData: IFormData,
    token: string | null
  ) => {
    await axios
      .get(`${API_URL}/macrocalculator`, {
        params: {
          age: formData.age,
          gender: formData.gender,
          height: formData.height,
          weight: formData.weight,
          activitylevel: formData.activityLevel,
          goal: formData.goals,
        },
        headers: {
          "X-RapidAPI-Key": token,
          "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
        },
      })
      .then((response) => {
        const data = response.data;
        setResults(data);
      })
      .catch((error) => console.log(error));
  };
  const handleButtonClick = async () => {
    await CalcMacroAmountApi(formData, token);
  };

  return (
    <div>
      <div className={styles.containerDataUser}>

        <div className={styles.titleDataUser}>
          <h2>Bem vindo {formData.name},</h2>
          <p> Selecione qual informação gostaria de consultar:</p>
        </div>

        <div>
          <p>
            Calcular quantidade aproximada de Proteína, Carboidrato e Gordura
          </p>
          <Button type="button" onClick={handleButtonClick}>
            Calcular
          </Button>
        </div>

        {results && (
          <div className={styles.results}>
            <h3>
              Para uma dieta balanceada você deverá consumir diariamente, de cada macro
              Nutriente a quantidade aproximada de :
            </h3>
            <p>Proteína: {results.data.balanced.protein.toFixed(2)} gr</p>
            <p>Carboidrato: {results.data.balanced.carbs.toFixed(2)} gr</p>
            <p>Gordura: {results.data.balanced.fat.toFixed(2)} gr</p>
          </div>
        )}
      </div>
    </div>
  );
};
