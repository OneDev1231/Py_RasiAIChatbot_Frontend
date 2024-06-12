"use client"
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const withAuth = WrappedComponent => {
    return props => {
        const [verified, setVerified] = useState(false);

        useEffect(()=> {
            const accessToken = Cookies.get('access_token');
            if(accessToken) {
                setVerified(true);
            } else {
                redirect('/auth/signin');
            }
        }, []);


        if (verified) {
            return <WrappedComponent {...props} />
        } else {
            return null;
        }
    };
};

export default withAuth;