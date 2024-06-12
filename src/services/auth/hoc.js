"use client"
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const withAuth = WrappedComponent => {
    const Wrapper =  props => {
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
    Wrapper.displayName = `withAuth(${getDisplayName(WrappedComponent)})`;

    return Wrapper;
};

const getDisplayName = (WrappedComponent) => {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

export default withAuth;