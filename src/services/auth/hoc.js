"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const withAuth = WrappedComponent => {
    const Wrapper =  (props) => {
        const [verified, setVerified] = useState(false);
        const router = useRouter();

        useEffect(()=> {
            const accessToken = Cookies.get('access_token');
            console.log(accessToken);
            if(accessToken) {
                setVerified(true);
            } else {
                router.push('/auth/signin');
            }
        }, [router]);


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