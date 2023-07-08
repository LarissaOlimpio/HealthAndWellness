import { createSlice, PayloadAction  } from "@reduxjs/toolkit";
import { IFormData } from "../interfaces/IFormData";

interface FormState{
  formData: IFormData
}
const initialState: FormState = {
  formData:{
    name: '',
    age: 0,
    weight: 0,
    height: 0,
    gender: '',
    activityLevel: '',
    goals: '',
  }
}
const formDataSlice = createSlice({
  name:"formData",
  initialState,
  reducers:{
    setFormData:(state,action:PayloadAction<IFormData>) =>{
      state.formData = action.payload
      localStorage.setItem("formData", JSON.stringify(action.payload))
    }
    
  }
})

export const {setFormData} = formDataSlice.actions
export default formDataSlice.reducer
