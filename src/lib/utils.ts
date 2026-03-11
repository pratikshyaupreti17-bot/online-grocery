import axios, { AxiosError } from "axios"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
 export const extractErrorMessage = (error: unknown): string => {
  if ( typeof error === "string")  return error;

      if (error instanceof AxiosError) {
        return error.response?.data?.message || error.message;
      }else if (error instanceof Error) {
       return error.message;
     }
     return "Something went wrong, please try again later!";
 };
  type ImageBbResponse ={
    data:{
      url:string;
    };
  };

  export const imageBbUrlGenerator = async (image:File):Promise<string> =>{
    try{
      const fd =new FormData();
      fd.append("image", image);

      const response = await axios.post<ImageBbResponse>( "https://api.imgbb.com/1/upload?key=98b07ab0be093bb5bed2c90f2058cc4a",fd, );
      return response.data.data.url;

    } catch (error){
      throw new  Error(extractErrorMessage(error));
    }
  };