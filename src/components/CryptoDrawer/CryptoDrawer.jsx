import React from 'react'
import { useNavigate } from 'react-router-dom'

function CryptoDrawer({ disable, compareCoinsData, setCompareCoins }) {

    const navigator = useNavigate();

    function deleteCoin (id) {
        const newCompareCoinData = compareCoinsData.filter((coin) => coin.id !== id);
        setCompareCoins(newCompareCoinData);
    }

    function goToComparePage (coinData) {
        const coinIds = coinData.map((coin) => coin.id);
        navigator(`/compare/${coinIds[0]}VS${coinIds[1]}`, {state: coinIds});
    }

    return (
        <div>
            <div className="drawer drawer-end"></div>
        </div>
    )

}


export default CryptoDrawer