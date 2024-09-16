import { useState } from "react";
import { fetchCoinChartData } from "../services/fetchCoinChartData";
import { useQuery } from "react-query";

function useFetchTwoCoinChartData(coinIDs, currency) {

        let [days, setDays] = useState(1);

    const { data : data1, isError : isError1, isLoading : isLoading1 } = useQuery(
        ["chartData", coinIDs[0], currency, days],
        () => fetchCoinChartData(coinIDs[0], currency, days),
        {
            cacheTime: 1000 * 60 * 2,
            staleTime: 1000 * 60 * 2,
        }
    );

    const { data : data2, isError : isError2, isLoading : isLoading2 } = useQuery(
        ["chartData", coinIDs[1], currency, days],
        () => fetchCoinChartData(coinIDs[1], currency, days),
        {
            cacheTime: 1000 * 60 * 2,
            staleTime: 1000 * 60 * 2,
        }
    );

    return {
        data1,
        data2,
        isError1,
        isError2,
        isLoading1,
        isLoading2,
        days,
        setDays
    };
}

export default useFetchTwoCoinChartData;