import CoinDetailCard from "./CoinDetailCard";



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
                <ul className="menu menu-vertical lg:menu-horizonta;">

                </ul>
            </div>

        </div>
    )
}