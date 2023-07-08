import { Button } from "../components/Button";


export function ResultsUser() {

  const CalcMacro = () =>{
    console.log("hello")
  }
  return <>
  <h2>Para calcular a quantidade aproximada de nutrientes para consumir ao dia clique no botão abaixo</h2>
  <Button type="button" onClick={CalcMacro}>Calcular</Button>
  </>;
}
