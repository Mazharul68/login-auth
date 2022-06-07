import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <main className='header_section'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="contact">contact</Link></li>
                    <li><Link to="signup">Sign up</Link></li>
                    {user ? <button onClick={handleSignOut}>Sign Out</button> :
                        <li><Link to="/">Login</Link></li>
                    }
                </ul>
            </main>
        </div>
    );
};

export default Header;