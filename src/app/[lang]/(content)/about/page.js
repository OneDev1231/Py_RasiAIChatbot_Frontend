"use client";
import React, { useState } from "react";
import { Button, Input } from "@/components/elements";
import { Navbar } from "@/components/navbar";
import { Menu } from "@/components/menu";
import withAuth from "@/services/auth/hoc";

const About = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event) => {
        setName(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <div className="w-screen h-screen flex flex-row justify-start">
            <div className="w-full flex flex-col gap-5 justify-start">
                <div className="flex flex-col gap-5 px-10 pb-5">
                    <div className="flex flex-col gap-2 w-52">
                        <label className="text-gray-800 dark:text-gray-200">
                            Change Name
                        </label>
                        <Input type="text" value={name} onChange={handleUsernameChange} />
                        <Button>Update Name</Button>
                    </div>

                    <div className="flex flex-col gap-2 w-52">
                        <label className="text-gray-800 dark:text-gray-200">
                            Change Email
                        </label>
                        <Input type="email" value={email} onChange={handleEmailChange} />
                        <Button>Update Email</Button>
                    </div>

                    <div className="flex flex-col gap-2 w-52">
                        <label className="text-gray-800 dark:text-gray-200">
                            Change Password
                        </label>
                        <Input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <Button>Update Password</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withAuth(About);
