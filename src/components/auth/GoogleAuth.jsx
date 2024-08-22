import { auth } from "../../utils/firebase"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"

export default function GoogleAuth(){
    function loginWithGoogle(){
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider).then(async(result)=>{console.log("result")})
    }

    return(<div onClick={loginWithGoogle}>Continue with Google</div>)
    
}