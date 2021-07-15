import React from 'react';
import './custom-button.scss';

const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => (
    <button className={`${isGoogleSignIn ? 'google-sing-in': ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;