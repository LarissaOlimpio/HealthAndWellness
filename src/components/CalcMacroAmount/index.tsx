import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { IFormData } from "../../interfaces/IFormData";
import axios from "axios";
import { Button } from "../Button";

export const CalcMacroAmount: React.FC = () => {
  const formData = useSelector((state: RootState) => state.FormData.formData);
  const API_URL = "https://fitness-calculator.p.rapidapi.com";
  const token: string | null = localStorage.getItem("apiKey");
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
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };
  const handleButtonClick = async () => {
    await CalcMacroAmountApi(formData, token);
  };

  return (
    <div>
      <h2>
        Se as informações estiverem corretas clique em Calcular para obter a
        quantidade aproximada de macro nutrientes para ser consumido diarimante
      </h2>
      <p>Name: {formData.name}</p>
      <p>Age: {formData.age}</p>
      <p>Weight: {formData.weight}</p>
      <p>Height: {formData.height}</p>
      <p>Gender: {formData.gender}</p>
      <p>Activity Level: {formData.activityLevel}</p>
      <p>Goals: {formData.goals}</p>

      <Button type="button" onClick={handleButtonClick}>
        Calcular
      </Button>
    </div>
  );
};
