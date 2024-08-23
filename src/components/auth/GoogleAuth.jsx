import GoogleButton from "react-google-button"
import { auth } from "../../utils/firebase"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"

export default function GoogleAuth(){   
    function loginWithGoogle(){
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider).then(async(result)=>{console.log("result")})
    }

    return(<div style={{display:"flex", justifyContent:"center"}}><GoogleButton type="light" onClick={loginWithGoogle}/></div>)
    
}