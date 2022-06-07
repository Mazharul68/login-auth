import React from 'react';
import auth from '../../Firebase/Firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let ErrorElement;

    if (error || error1) {

        ErrorElement = <div>
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
        </div>

    }
    if (user || user1) {
        navigate('contact')
    }
    return (
        <div>
            <div className="form-group">
                {ErrorElement}
                <button className='d-block mt-5 btn-success w-50'>Facebook</button>
                <button onClick={() => signInWithGithub()} className='d-block btn-success my-2 w-50'>Github</button>
                <button onClick={() => signInWithGoogle()} className='d-block btn-success w-50'>google</button>
            </div>
        </div>
    );
};

export default SocialLogin;