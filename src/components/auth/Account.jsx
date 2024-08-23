import { useRef, useState } from "react"
import '../expenceItems/FormItem.css'
import GoogleAuth from "./GoogleAuth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../utils/firebase";
import { doc, setDoc } from 'firebase/firestore';


export default function Account() {
    const [isLogin, setIsLogin] = useState(true)
    const [error, setError] = useState(null)
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const [loading, setLoading] = useState(false)

    async function submitHandler(e){
        e.preventDefault();
        setLoading(true)
        setError(null)
        try {
            if(isLogin){
                await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
                console.log(emailRef.current.value, passwordRef.current.value, isLogin)
            }else{
                console.log("signup")
                await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
                const user = auth.currentUser
                if(user)
                    setDoc(doc(db, "Users", user.uid),{email: user.email, displayName: nameRef.current.value})
                console.log(nameRef.current.value, emailRef.current.value, passwordRef.current.value, isLogin)
            }
        } catch (err) {
            setError(err.message)
        }
        setLoading(false)
    }

    function switchLoginHandler(){
        setError(null)
        if(!isLogin){
            nameRef.current.value=""
        }
        emailRef.current.value=""
        passwordRef.current.value=""
        setIsLogin((p)=>!p)
    }

    let body = <p>"Loading..."</p>

    if (isLogin) {
        body = <form onSubmit={submitHandler}>
            <div className="controls">
                <div className="control">
                    <label htmlFor="email">UserEmail  : </label>
                    <input required ref={emailRef} type="email" name="email" id="email" />
                </div>
                <div className="control">
                    <label htmlFor="password"> Password  : </label>
                    <input required ref={passwordRef} minLength={6} type="password" name="password" id="password" />
                </div>
                <div className="action">
                    <button type="submit">{loading ? 'Logging in...' : 'LogIn'}</button>
                </div>
            </div>
        </form>
    } else {
        body = <form onSubmit={submitHandler}>
            <div className="controls">
                <div className="control">
                    <label htmlFor="name">UserName  : </label>
                    <input required ref={nameRef} type="text" name="name" id="name" />
                </div>
                <div className="control">
                    <label htmlFor="email">UserEmail  : </label>
                    <input required ref={emailRef} type="email" name="email" id="email" />
                </div>
                <div className="control">
                    <label htmlFor="password"> Password  : </label>
                    <input required ref={passwordRef} minLength={6} type="password" name="password" id="password" />
                </div>
                <div className="action">
                    <button type="submit">{loading ? 'Creating Account...' : 'SignUp'}</button>
                </div>
            </div>
        </form>
    }

    return (
        <>
            <header className="App-header"><div className='App-header-title'>{isLogin? <p>LOG IN</p>: <p>SIGN UP</p>}</div></header>
            {body}
            {error && <div className="error">{error}</div>}
            {isLogin?  <p onClick={switchLoginHandler}>Account does't exits <a style={{"textDecoration":"underline"}}>SignUp</a></p> :<p onClick={switchLoginHandler}> Account alredy exit's <a style={{"textDecoration":"underline"}}>LogIn</a></p>}
            ------ OR ------
            <p>
            <GoogleAuth/>
            </p>
        </>
    )
}