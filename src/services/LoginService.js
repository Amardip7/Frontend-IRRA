import axios from "axios";
import { PORT_No, BASE_URL } from "../services/ApiConstant";

export async function logindata(formData) {
    try {
        const response = await axios.post(`${BASE_URL}${PORT_No}/login`, formData);
        return response.data; 
    } catch (error) {
        console.log(error);
    }
}
