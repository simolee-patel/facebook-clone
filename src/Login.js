import React from 'react'
import { auth, provider } from './firebase';
import './Login.css';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login_logo">
                <img src="https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png" alt="" />

                <button type="submit" onClick={signIn} >Sign In </button>

            </div>
        </div>
    )
}

export default Login
