import React from 'react';
import { getAuth, signInWithPopup, UserCredential } from 'firebase/auth';
import { authProvider } from './authentication';
import { useAuthState } from 'react-firebase-hooks/auth';

const auth = getAuth();

export const Home = () => {
    const [userChanged] = useAuthState(auth);

    const signIn = (): Promise<UserCredential> => {
        return signInWithPopup(auth, authProvider);
    };

    return (
        <>
            <div>Home</div>

            {userChanged ? (
                <button
                    className='button signout'
                    onClick={() => auth.signOut()}
                >
                    Sign out
                </button>
            ) : (
                <button className='button' onClick={signIn}>
                    <i className='fab fa-google'></i>Sign in with google
                </button>
            )}
        </>
    );
};
