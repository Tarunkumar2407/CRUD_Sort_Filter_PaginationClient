import { BASE_URL } from "./helper";
import { commonRequest } from "./APICall";

export const requestFunction = async (data, header) => {
    return await commonRequest("POST",`http://localhost:8000/user/register`,data, header);
}