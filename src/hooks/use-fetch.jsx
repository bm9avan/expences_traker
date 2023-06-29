import { useCallback } from "react"

const useFetch = () => {
    const callFetch = useCallback(
        async (obj, dataHandler) => {
            const responce = await fetch('https://expences-traker-default-rtdb.asia-southeast1.firebasedatabase.app/expences.json', obj)
            const data = await responce.json()
            dataHandler(data)

        }, [])
    return callFetch
}

export default useFetch