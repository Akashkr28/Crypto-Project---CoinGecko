import React from "react";
import { useLocation } from "react-router-dom";
import CompareTable from "../components/CompareTable/CompareTable";
import CompareChartContainer from "../components/CompareTable/CompareChartContainer";

function CompareCoinPage() {

    const {state} = useLocation();

    return(
        <>
            <CompareTable coinIds={state} />
            <CompareChartContainer coinIds={state} />
        </>
    )
}

export default CompareCoinPage;