import { useCallback, useState } from "react"
import { getDatabase, ref, onValue, push } from "firebase/database";
import { initializeApp } from "firebase/app";
import firebaseConfig from '../database/fire-base'

const useFetch = () => {
    const [loading, setLoading] = useState(false)

    const callFetch = useCallback(
        async (obj, dataHandler) => {
            setLoading(true)
            // const app = initializeApp(firebaseConfig);
            initializeApp(firebaseConfig);
            const db = getDatabase()
            const dbRef = ref(db, 'expences');
            if (obj === null) {
                onValue(dbRef, (snapshot) => {
                    let data = []
                    snapshot.forEach((childSnapshot) => {
                        const childKey = childSnapshot.key;
                        const childData = childSnapshot.val();
                        data.push({ childKey, ...childData })
                    });
                    dataHandler(data)
                    setTimeout(() => {
                        setLoading(false)
                    }, 500)
                }, {
                    onlyOnce: true
                });
            } else {
                const newPostKey = push(dbRef, obj.body)
                dataHandler(newPostKey.key)
                setTimeout(() => {
                    setLoading(false)
                }, 500)
            }

        }, [])
    return { callFetch, loading }
}

export default useFetch