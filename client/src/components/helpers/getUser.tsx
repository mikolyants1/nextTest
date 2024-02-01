  import axios, { AxiosResponse } from "axios";
import { IUser } from "../types/types";

async function getUser(id:string):Promise<IUser> {
 const res:AxiosResponse = await axios
 .get(`http://localhost/${id}`);
 return res.data;
};

export default getUser