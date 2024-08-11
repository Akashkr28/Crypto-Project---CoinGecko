import { useEffect, useState } from "react";

function CoinTable() {

    const [count, setCount] = useState(0);

    const [flag, setFlag] = useState(false);

    async function download() {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/2");
        console.log(response);
        const result = await response.json();
        console.log(result);
    }

    useEffect(() => {
        // because the dependency array is empty, this effect will only run once when the components mounts
        download();
    }, [count]);

    useEffect(() => {
        //This effectb will run when the component mounts, and every time the flag variable changes
        console.log("Flag Changed");
    }, [flag]);

    useEffect(() => {
        console.log("Everytime Changed");
    });

    useEffect(() => {
        //This effectb will run when the component mounts, and every time the flag or count variable changes
        console.log("count or flag Changed");
    }, [count, flag]);

    return (
        <>
            CoinTable
            {count}
            <br/>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <br />
            {flag}
            <br />
            <button onClick={() => setFlag(!flag)}>Toggle</button>
        </>
    )
}

export default CoinTable;