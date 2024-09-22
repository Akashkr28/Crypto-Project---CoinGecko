import { useQuery } from "react-query"
import { useParams } from "react-router-dom";
import { fetchCoinDetails } from "../services/fetchCoinDetails";
import currencyStore from '../state/store';

function useFetchCoin(){
    const { coinId } = useParams();
    const { currency } = currencyStore();

    const { isError, isLoading, data: coin } = useQuery(["coin", coinId], () => fetchCoinDetails(coinId),{
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
    } );

    return {
        currency,
        isError,
        isLoading,
        coin,
        coinId
    }
}

export default useFetchCoin;