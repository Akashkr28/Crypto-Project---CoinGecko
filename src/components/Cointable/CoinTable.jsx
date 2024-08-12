import { useEffect, useState } from "react";
import { fetchCoinData } from "../../services/fetchCoinData";

function CoinTable() {
    //useEffect function is called up to fetch "fetchCoinData.js" to perform its respective function
    useEffect(() =>{
        fetchCoinData(1, 'usd')
    },[]);

    return (
          
        <>Coin Table</>
    )

}

export default CoinTable;