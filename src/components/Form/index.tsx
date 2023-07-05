import { IFormData } from "../../interfaces/IFormData";
import { useState } from 'react';
import styles from "./Form.module.css";
import { Button } from "../Button";


export function Form() {
 const [formData,setFormData]= useState<IFormData>({
  name: '',
  age: 0,
  weight: 0,
  height: 0,
  gender: '',
  activityLevel: '',
  goals: '',
 })
 


 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
  e.preventDefault()
  
 
  console.log(formData)
 }
 const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
  const {id, value} = e.target;
  setFormData((prevData) =>({...prevData,[id]:value}))
 }
 const handleSelectBlur = (e:React.FocusEvent<HTMLSelectElement>) =>{
  const {name,value} = e.target
  setFormData((prevData) =>({...prevData,[name]:value}))
 }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Bem vindo, antes de começar preencha os campos abaixo:</h2>

      <label htmlFor="name">Nome:</label>
      <input id="name" type="text" autoComplete="off" required onChange={handleInputChange}/>

      <label htmlFor="age">Idade:</label>
      <input id="age" type="number"autoComplete="off" required min={0} max={80} onChange={handleInputChange} />

      <label htmlFor="weight">Peso: (kg)</label>
      <input id="weight" type="number"autoComplete="off"required min={40}max={160} onChange={handleInputChange} />

      <label htmlFor="height">Altura: (cm)</label>
      <input id="height" type="number" autoComplete="off"required min={130} max={230} onChange={handleInputChange} />

      <label htmlFor="gender">Sexo:</label>
      <select name="gender" id="gender" onBlur={handleSelectBlur} required>
        <option value="">Selecione aqui</option>
        <option value="male">Masculino</option>
        <option value="female">Feminino</option>
      </select>

      <label htmlFor="activityLevel">Qual seu nível de atividade física?</label>
      <select name="activityLevel" id="activityLevel" onBlur={handleSelectBlur} required>
        <option value="">Selecione aqui</option>
        <option value="">Selecione seu nível de atividade</option>
        <option value="level_1">
          Sedentário, pouco ou nenhuma atividade física
        </option>
        <option value="level_2"> Exercício 1-3 vezes na semana</option>
        <option value="level_3">Exercício 4-5 vezes na semana</option>
        <option value="level_4">
          Exercício todos os dias ou intenso 3-4 vezes na semana
        </option>
        <option value="level_5">Intenso 6-7 vezes na semana </option>
        <option value="level_6">
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

      <Button  type="submit">Enviar</Button>
    </form>
  );
}
