"use client"
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const withAuth = WrappedComponent => {
    return props => {
        const [verified, setVerified] = useState(false);

        useEffect(()=> {
            console.log(Cookies)
            const accessToken = Cookies.get('access_token');
            console.log(accessToken);

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