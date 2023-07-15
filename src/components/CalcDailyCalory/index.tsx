import { useSelector } from "react-redux";
import { Button } from "../Button";
import styles from "./CalcDailyCalory.module.css"
import { RootState } from "../../redux/store";
import { useState } from "react";
import { IFormData } from "../../interfaces/IFormData";
import axios from "axios";

interface IResultCalcDailyCalory{
  data:{
    BMR: number;
    goals:{
      ["maintain weight"] :number;
      ["Weight loss"]:{
        calory:number;
      },
      ["Weight gain"]:{
        calory:number;
      }
      
    }
  }
}
export const CalcDailyCalory: React.FC = () =>{
  const formData = useSelector((state: RootState) => state.FormData.formData)

  const API_URL = "https://fitness-calculator.p.rapidapi.com"
  const token: string | null  = localStorage.getItem("apiKey")
  const [results, setResults] = useState<IResultCalcDailyCalory |undefined>()

  const CalcDailyCaloryAPi = async(
    formData:IFormData,
    token:string|null
  ) => {

    let modifiedActivityLevel = formData.activityLevel
  
    if(formData.activityLevel ==="2"){
      modifiedActivityLevel = "level_1"
    }else if(formData.activityLevel ==="3"){
      modifiedActivityLevel = "level_2"
    }else if(formData.activityLevel ==="4"){
      modifiedActivityLevel = "level_3"
    } else if(formData.activityLevel ==="5"){
      modifiedActivityLevel = "level_4"
    } else if(formData.activityLevel ==="6"){
      modifiedActivityLevel = "level_5"
    } else if(formData.activityLevel ==="7"){
      modifiedActivityLevel = "level_6"
    }
    await axios
      .get(`${API_URL}/dailycalorie`,{
        params: {
          age: formData.age,
          gender: formData.gender,
          height: formData.height,
          weight: formData.weight,
          activitylevel: modifiedActivityLevel
        },
        headers: {
          'X-RapidAPI-Key': token,
          'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
        }
      }).then((response) =>{
        const data = response.data
        setResults(data)
      }).catch(error => console.log(error))
      
  }
  const handleClick = async() =>{
    await CalcDailyCaloryAPi(formData,token)
    if(results){
      console.log(results.data.goals)
    }
  }

  return(
    <div className={styles.containerDataUser}>
      <p>Calcular quantidade aproximada de calorias que devem ser consumida diariamente</p>
      <Button type="button" onClick={handleClick}> Calular</Button>
      {results &&(
        <>
        <div>
          <p>Taxa metabólica basal aproximada: {results.data.BMR} Kcal</p>
        </div>
        <div>
          <p>Para manter o peso: {results.data.goals["maintain weight"]} kcal</p>
          <p>Para ganhar  peso: {results.data.goals["Weight gain"].calory}  kcal</p>
          <p>Para perder  peso: {results.data.goals["Weight loss"].calory}  kcal</p>
        </div>
        </>
      )}
    </div>
  )
}