import axios, { AxiosResponse } from "axios";
import { ICheck, form } from "../types/types";

export async function CheckData(data:form):Promise<ICheck> {
  return await axios
  .post("http://localhost:5000/check",data)
  .then(({data}:AxiosResponse<ICheck>)=>data);
}