import { useEffect, useState } from "react";

function useCurrencyInfo(Currency){

    useEffect(()=>{
        const [data, setData] = useState({});

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${Currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[Currency]))
        .catch((e)=>{console.error("something Went wrong ",e);
        })
    },[Currency])

    return data;
}

export default useCurrencyInfo;