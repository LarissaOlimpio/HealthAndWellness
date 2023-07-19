import { IFormData } from "../../interfaces/IFormData";
import { useState } from "react";
import styles from "./Form.module.css";
import { Button } from "../Button";
import { useDispatch } from "react-redux";
import { setFormData } from "../../redux/sliceDataUser";

import { useNavigate } from "react-router-dom";

export function Form() {
  const [formDataUser, setFormDataUser] = useState<IFormData>({
    name: "",
    age: 0,
    weight: 0,
    height: 0,
    gender: "",
    activityLevel: "",
    goals: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setFormData(formDataUser));
    navigate("/ResultsUser"), { state: { formDataUser } };
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormDataUser((prevData) => ({ ...prevData, [id]: value }));
  };
  const handleSelectBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormDataUser((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Antes de começar preencha os campos abaixo:</h2>

      <label htmlFor="name">Nome:</label>
      <input
        id="name"
        type="text"
        autoComplete="off"
        required
        onChange={handleInputChange}
      />

      <label htmlFor="age">Idade:</label>
      <input
        id="age"
        type="number"
        autoComplete="off"
        required
        min={0}
        max={80}
        onChange={handleInputChange}
      />

      <label htmlFor="weight">Peso: (kg)</label>
      <input
        id="weight"
        type="number"
        autoComplete="off"
        required
        min={40}
        max={160}
        onChange={handleInputChange}
      />

      <label htmlFor="height">Altura: (cm)</label>
      <input
        id="height"
        type="number"
        autoComplete="off"
        required
        min={130}
        max={230}
        onChange={handleInputChange}
      />

      <label htmlFor="gender">Sexo:</label>
      <select name="gender" id="gender" onBlur={handleSelectBlur} required>
        <option value="">Selecione aqui</option>
        <option value="male">Masculino</option>
        <option value="female">Feminino</option>
      </select>

      <label htmlFor="activityLevel">Qual seu nível de atividade física?</label>
      <select
        name="activityLevel"
        id="activityLevel"
        onBlur={handleSelectBlur}
        required
      >
        <option value="">Selecione seu nível de atividade</option>
        <option value="2">Sedentário, pouco ou nenhuma atividade física</option>
        <option value="3"> Exercício 1-3 vezes na semana</option>
        <option value="4">Exercício 4-5 vezes na semana</option>
        <option value="5">
          Exercício todos os dias ou intenso 3-4 vezes na semana
        </option>
        <option value="6">Intenso 6-7 vezes na semana </option>
        <option value="7">
          Todos os dias e muito intenso ou trabalha com atividade física
        </option>
      </select>

      <label htmlFor="goals">Qual é sua meta:</label>
      <select name="goals" id="goals" onBlur={handleSelectBlur} required>
        <option value="">Selecione aqui</option>
        <option value="maintain">Manter o peso</option>
        <option value="weightlose">Perder peso</option>
        <option value="weightgain">Ganhar peso</option>
      </select>

      <Button type="submit">Enviar</Button>
      
    </form>
  );
}
