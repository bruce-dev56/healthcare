import React, { useEffect, useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
// import { FaLinkedin, FaApple, FaGoogle } from 'react-icons/fa';
import { useOauthLoginMutation } from '../../redux/api/authApi';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

const SocialSignUp = () => {
    const [error] = useState({});
    const navigate = useNavigate();
    const [oauthLogin, { isError, isLoading, isSuccess }] = useOauthLoginMutation();

    useEffect(() => {
        if (isError) {
            message.error(error?.data?.message);
        }
        if (isSuccess) {
            message.success('Successfully Logged in');
            navigate('/')
        }
    }, [isSuccess, isError, navigate]);

    const handleSuccess = async (credentialResponse) => {
        const idToken = credentialResponse.credential;
        oauthLogin(idToken);
    }

    return (
        <>
            { isLoading 
                ? <Spinner animation="border" variant="info" /> 
                : <GoogleLogin 
                    onSuccess={handleSuccess}
                    onError={() => console.error('Login Failed')}
                  />
            }
            
            {error.length && <h6 className="text-danger text-center p-2">{error}</h6>}
        </>
    );
};

export default SocialSignUp;