import axiosinstance from "../helpers/axiosinstance";


export async function fetchCoinData(page = 1, currency) {
    const perPage = 20;
    try{
        const response = await axiosinstance.get(`/coins/markets?vs_currency=${currency}&order=market_cap_dedc&per_page=${perPage}&page=${page}`);
        return response.data;
    }catch(error){
        console.error(error);
        return null;
    }
}