import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { longDecimalToShort, numToConvert } from "../util/util";
import InfiniteScroll from 'react-infinite-scroll-component';
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import CryptoDrawer from "../CryptoDrawer/CryptoDrawer";


function CoinTable() {

    const navigate = useNavigate();
    const [compareCoins, setCompareCoins] = useState([]);
  

    const { tableData, hasMore, fetchMore } = useInfiniteScroll();
    console.log(tableData)


    function handleCoinRedirect(id) {
        navigate(`/details/${id}`);
    }

    function addToCompareOnClick(e, {image, id, name, symbol, market_cap_rank}) {
        e.stopPropagation();
        if(compareCoins.length >= 2) {
            console.log("Cannot compare more than 2 coins");
            return;
        }
        const coinObj = {
            id : id,
            thumb : image,
            name : name,
            symbol : symbol,
            market_cap_rank : market_cap_rank
        }
        setCompareCoins([...compareCoins, coinObj]);
        e.target.textContent = "Added ✔️"
    }


    return (
        <InfiniteScroll
            dataLength={tableData.length}
            next={fetchMore}
            hasMore={hasMore}
            loader= {
                <div className="w-full grid place-content-center pb-3">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            }
            endMessage={<p>No more coins to load</p>}
            refreshFunction={() => {}}
            pullDownToRefresh={false}
        >
            <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto">
                <div className="w-full bg-yellow-400 text-black flex py-4 px-2 font-semibold items-center justify-center rounded-xl">
                    <div className="basis-[35%] px-20">
                        <p>Coin</p>
                        <CryptoDrawer compareCoinsData={compareCoins} setCompareCoins={setCompareCoins} disable={compareCoins.length < 2}/>
                    </div>
                    <div className="basis-[25%]">Price</div>
                    <div className="basis-[20%]">24h change</div>
                    <div className="basis-[20%]">Market Cap</div>
                </div>

                <div className="flex flex-col w-[80vw] mx-auto">
                    {tableData.map((coin) => (
                            <div onClick={() => handleCoinRedirect(coin.id)} 
                                key={coin.id}
                                className="w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between cursor-pointer hover:bg-slate-400 rounded-lg hover:text-black"
                                >

                                <div className="flex items-center justify-start gap-3 basis-[35%]">
                                    <div className="w-[5rem] h-[5rem]">
                                        <img src={coin.image}
                                        className="w-full h-full" loading="lazy"
                                        alt={`${coin.name} logo`}/>
                                    </div>

                                    <div className="flex flex-col ">
                                        <div className="text-lg md:text-3xl">{coin.name}</div>
                                        <div className="text-xl font-light flex items-center gap-1">
                                            <p>{coin.symbol}</p>
                                            <button
                                                disabled={compareCoins.length >= 2}
                                                onCliclk={(e) => addToCompareOnClick(e, coin)}
                                                className="leading-none whitespace-nowrap h-4 w-fit px-1 grid place-content-center rounded-2xl bg-yellow-600 text-black text-xs"  
                                            >
                                                Add to compare
                                            </button>
                                            </div>
                                    </div>
                                </div>
                                
                                    <div className="basis-[25%]">
                                        {coin.current_price}
                                    </div>
                                    <div className="basis-[20%]">
                                        {longDecimalToShort(coin.price_change_24h)}
                                    </div>
                                    <div className="basis-[20%]">
                                        {numToConvert(coin.market_cap)} Cr
                                    </div>    
                            </div>
                    ))}
                </div>
            </div>    
        </InfiniteScroll>
    );
}

export default CoinTable;