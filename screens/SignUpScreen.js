import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import LoadingOverlay from '../components/UI/LoadingOverlay';

function SignupScreen() {

    const[isAuthenticating, setIsAuthenticating] = useState(false)

    async function signUpHandler({email, password}){
        
        setIsAuthenticating(true)
        await createUser(email, password);
        setIsAuthenticating(false)
    }


    if(isAuthenticating){
        return <LoadingOverlay message={"Creating User..."}/>
    }

  return <AuthContent onAuthenticate={signUpHandler}/>;
}

export default SignupScreen;