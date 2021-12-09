// import { initial } from "lodash"
import React, { useState } from "react"
import { useEffect } from "react"

export const useSearchValue = (input : string ='', time:number=500) => {
    const [searchValue, setSearchValue] = useState(input)


    useEffect(() => {
 const timeout = setTimeout(() => {
setSearchValue(input);
 },time)

        return () => {
            clearTimeout( timeout)
        }
    },[input])

    return searchValue;
}