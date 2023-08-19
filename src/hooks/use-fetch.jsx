import { useCallback, useState } from "react"

const useFetch = () => {
    const [loading, setLoading] = useState(false)

    const callFetch = useCallback(
        async (obj, dataHandler) => {
            setLoading(true)
            let responce;
            if(obj.method==="DELETE"){
                responce = await fetch(`${process.env.REACT_APP_API_URL}/expences/${obj.id}.json`, {method:obj.method})
            }else if(obj.method==="PUT"){
                responce = await fetch(`${process.env.REACT_APP_API_URL}/expences/${obj.id}/title.json`, {method:obj.method, headers: obj.headers, body:obj.body})
            }else{
                responce = await fetch(`${process.env.REACT_APP_API_URL}/expences.json`, obj)
            }
            const data = await responce.json()
            dataHandler(data)
            setLoading(false)
        }, [])
    return { callFetch, loading }
}

export default useFetch