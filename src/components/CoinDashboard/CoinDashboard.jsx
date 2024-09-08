import CoinDetailCard from "./CoinDetailCard";
import { Line } from "react-chartjs-2";
import useFetchCoinDashboardData from "./useFetchCoinDashboardData";
import { getPriceData, getPriceLabels } from "../util/util";



function CoinDashboard({ coinId, currency, cardData }) {
    let { days, data, setDays, isError, isLoading } = useFetchCoinDashboardData(coinId, currency);

    if(isLoading){
        return(
            <div className="flex flex-col gap-6">
                <div className="skeleton h-64 w-full"></div>
                <div className="skeleton h-64 w-full"></div>
                <div className="skeleton h-64 w-full"></div>
            </div>
        );
    }

    if (isError) {
        return <div>Error</div>
    }

    return (
        <div className="main-conatiner p-1 md:5">
            <div className="w-full mb-4">
                <CoinDetailCard cardData={cardData} />
            </div>


            <div className="w-full mb-5">
                <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 flex justify-between w-full rounded-box;">
                    <li onClick={() => {
                        setDays(1);
                    }}>
                        <a>24 Hour</a>
                    </li>
                    <li onClick={() => {
                        setDays(30);
                    }}>
                        <a>30 Days</a>
                    </li>
                    <li 
                    onClick={() => {
                        setDays(365)
                        }}>
                        <a>1 Year</a>
                    </li>
                </ul>
            </div>
                
            <div className="chart-container flex flex-col gap-6">
                <div className="chart w-full">
                    <h1 className="font-light text-3xl mb-2">Price Chart</h1>
                    {data.prices ? (
                        <>
                            <Line
                                data={{
                                    labels: getPriceLabels(data.prices, days),
                                    datasets: [
                                        {
                                            data: getPriceData(data.prices, days),
                                            labels: `${coinId.toUpperCase()} price in last ${days} days in ${currency}.`,
                                            borderColor: "#f87979",
                                        },
                                    ],
                                }}
                                options={{
                                    elements: {
                                        point: {
                                            radius: 1,
                                        },
                                    },
                                }}
                            />                            
                        </>
                    ) : (
                        <div className="skeleton h-64 w-full"></div>
                    )}
                </div>
            </div>
        </div>
    )
}