import { useCallback, useState } from "react"

const useFetch = () => {
    const [loading, setLoading] = useState(false)

    const callFetch = useCallback(
        async (obj, dataHandler) => {
            setLoading(true)
            const responce = await fetch('https://expences-traker-default-rtdb.asia-southeast1.firebasedatabase.app/expences.json', obj)
            const data = await responce.json()
            dataHandler(data)
            setLoading(false)
        }, [])
    return { callFetch, loading }
}

export default useFetch