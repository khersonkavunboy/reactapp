import axios from "axios";

const urlServices = "http://localhost:3030/providers";

     export const addProvider = async provider => {
         try {
         debugger
             await axios.post(urlServices, provider);
         } catch (e) {
             console.log(e);
         }
     };