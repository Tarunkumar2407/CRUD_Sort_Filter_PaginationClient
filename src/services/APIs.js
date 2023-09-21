import { BASE_URL } from "./helper";
import { commonRequest } from "./APICall";

export const requestFunction = async (data, header) => {
    return await commonRequest("POST",`${BASE_URL}/user/register`,data, header);
}

export const getUserFunction = async (search,gender,status,sort) => {
    return await commonRequest("GET",`${BASE_URL}/user/getallusers?search=${search}&gender=${gender}&status=${status}&sort=${sort}`,"")
}

export const getSingleUserFunction = async (id) => {
    return await commonRequest("GET",`${BASE_URL}/user/getuser/${id}`,"")
}

export const editUserFunction = async (id,data,header) => {
    return await commonRequest("PUT",`${BASE_URL}/user/edit/${id}`,data, header);
}

export const deleteUserFunction = async (id) => {
    return await commonRequest("DELETE",`${BASE_URL}/user/delete/${id}`,{});
}

export const statusUpdateFunction = async (id,status) => {
    return await commonRequest("PUT",`${BASE_URL}/user/status/${id}`,{status});
}

export const exportToCsvFunction = async (id,status) => {
    return await commonRequest("GET",`${BASE_URL}/user/usersexport`,"");
}