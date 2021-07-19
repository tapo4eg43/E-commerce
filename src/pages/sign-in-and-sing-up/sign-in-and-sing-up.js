import React from 'react';
import './sign-in-and-sing-up.scss';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

const SignInAndSingUp = () => (
    <div className='sign-in-and-sing-up'>
        <SignIn/>
        <SignUp/>
    </div>
)

export default SignInAndSingUp;