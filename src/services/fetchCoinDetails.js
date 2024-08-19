import axiosinstance from "../helpers/axiosinstance";


export async function fetchCoinDetails(id) {

    try{
        const response = await axiosinstance.get(`/coins/${id}`);
        return response.data;
    }catch(error){
        console.error(error);
        return null;
    }
}