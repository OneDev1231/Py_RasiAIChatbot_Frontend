"use client";
import Image from "next/image";
import logo from "@/images/rasi-logo.png";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import rasiLogoCompact from "@/images/rasi-logo-compact.png";
import { useCookies } from "next-client-cookies";
import { useTheme } from "next-themes";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalFooter,
    Button,
    useDisclosure,
} from "@nextui-org/react";

const content = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: "tabler:dashboard",
    },
    {
        name: "Messages",
        href: "/test_chatting?variable=test",
        icon: "tabler:message",
    },
    {
        name: "Users",
        href: "/users",
        icon: "tabler:users",
    },
    {
        name: "Analytics",
        href: "/analytics",
        icon: "hugeicons:analytics-02",
    },
    {
        name: "Integrations",
        href: "/integrations",
        icon: "tabler:plug",
    },
    {
        name: "Settings",
        href: "/settings",
        icon: "tabler:settings",
    },
];

export default function Menu() {
    const cookies = useCookies();
    const router = usePathname()
        .split("/")[2]
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());
    const [active, setActive] = useState(router);
    const [open, setOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        const stored = cookies.get("sidebar");
        if (stored) {
            setOpen(stored === "true");
        } else {
            setOpen(true);
        }
    }, [cookies]);

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <div className={`${open ? "min-w-60" : "min-w-24"}`}></div>
            <div className="fixed z-50">
                <div
                    className={`shadow-xl h-screen dark:bg-darkbg relative dark:border-r-[#3A3A3D] border-r-gray-300 border-r-[2px] ${open ? "min-w-60" : "min-w-24"} transition-all ease-in-out duration-300 rounded-md`}
                >
                    <Icon
                        icon="tabler:layout-sidebar-left-collapse"
                        className={`absolute top-5 right-5 cursor-pointer focus:scale-50 transition-all ease-in-out duration-300 active:scale-90 ${!open ? "rotate-180 right-8" : ""}`}
                        onClick={() => {
                            setOpen(!open);
                            cookies.set("sidebar", !open, { path: "/" });
                        }}
                        style={{ color: "#8C9098" }}
                        width="25"
                        height="25"
                    />
                    <div className="flex flex-col  h-full">
                        <div
                            className={`flex flex-col gap-2 p-5 ${!open && "mt-[4.5rem]"}`}
                        >
                            {open ? (
                                <div className="flex lg:flex-1 mt-20 mb-14 ml-10 select-none">
                                    <div className="p-1.5">
                                        <span className="sr-only">Rasi</span>
                                        <Image src={logo} alt="rasi logo" className="h-8 w-auto" />
                                    </div>
                                </div>
                            ) : (
                                <div className="flex items-center justify-center h-20 mb-8">
                                    <span className="sr-only">Rasi</span>
                                    <Image
                                        src={rasiLogoCompact}
                                        alt="rasi logo"
                                        width="40"
                                        height="40"
                                    />
                                </div>
                            )}
                            {content.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`flex items-center gap-5 p-3 rounded-md ${active === item.name ? "bg-primary text-white" : "hover:bg-[#5046E5] hover:bg-opacity-10"}  select-none ${open ? "ml-5" : "ml-2"}`}
                                    onClick={() => setActive(item.name)}
                                >
                                    <Icon icon={item.icon} width="25" height="25" />
                                    {open && (
                                        <span className={`text-sm font-semibold leading-6 `}>
                                            {item.name}
                                        </span>
                                    )}
                                </Link>
                            ))}
                        </div>
                        <div className="flex flex-col gap-2 mt-auto dark:border-t-[#3A3A3D] border-t-gray-300 border-t-[2px] cursor-pointer hover:bg-primary hover:bg-opacity-10">
                            <Popover
                                showArrow
                                offset={10}
                                placement={open ? "top" : "right"}
                                backdrop="transparent"
                            >
                                <PopoverTrigger>
                                    <div className="flex items-center gap-2 h-16 justify-center">
                                        <div className="flex items-center justify-center w-10 h-10 dark:bg-white bg-gray-300 rounded-full">
                                            <Icon
                                                icon="tabler:user"
                                                className="text-primary"
                                                width="20"
                                                height="20"
                                            />
                                        </div>
                                        {open && (
                                            <div className="flex flex-col">
                                                <span className="font-semibold">Abderrahim</span>
                                                <span className="font-light text-xs">
                                                    {"abderrahimbelkacemi33@gmail.com"
                                                        .slice(0, 23)
                                                        .concat("...")}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </PopoverTrigger>
                                <PopoverContent className="w-[240px]">
                                    <div className="px-1 py-2 w-full">
                                        <div className="flex gap-3 items-center">
                                            <div className="flex items-center justify-center w-10 h-10 dark:bg-white bg-gray-300 rounded-full">
                                                <Icon
                                                    icon="tabler:user"
                                                    className="text-primary"
                                                    width="20"
                                                    height="20"
                                                />
                                            </div>
                                            {/*NOTE: when fetching the name from the api make sure you are relacing last characters with .. when the name is longer than a specific number*/}
                                            <p className="font-bold">Abderrahim belkacemi</p>
                                        </div>
                                        <hr className="my-3" />
                                        <div className="flex flex-col gap-1">
                                            <div
                                                className="flex gap-3 items-center cursor-pointer hover:bg-primary hover:bg-opacity-10 rounded-md p-2"
                                                onClick={() => {
                                                    window.location.href = "/profile";
                                                }}
                                            >
                                                <Icon icon="tabler:user" width={20} />
                                                <p>Profile</p>
                                            </div>

                                            {theme === "dark" ? (
                                                <div
                                                    className="flex gap-3 items-center cursor-pointer hover:bg-primary hover:bg-opacity-10 rounded-md p-2"
                                                    onClick={() => {
                                                        const newTheme =
                                                            theme === "dark" ? "light" : "dark";
                                                        setTheme(newTheme);
                                                        cookies.set("theme", newTheme);
                                                    }}
                                                >
                                                    <Icon icon="tabler:moon-stars" width={20} />
                                                    <p>Toggle theme</p>
                                                </div>
                                            ) : (
                                                <div
                                                    className="flex gap-3 items-center cursor-pointer hover:bg-primary hover:bg-opacity-10 rounded-md p-2"
                                                    onClick={() => {
                                                        const newTheme =
                                                            theme === "dark" ? "light" : "dark";
                                                        setTheme(newTheme);
                                                    }}
                                                >
                                                    <Icon icon="tabler:sun" width={20} />
                                                    <p>Toggle theme</p>
                                                </div>
                                            )}
                                            <>
                                                <div
                                                    className="flex gap-3 items-center cursor-pointer hover:bg-red-500 hover:text-red-500 hover:bg-opacity-20 rounded-md p-2"
                                                    onClick={onOpen}
                                                >
                                                    <Icon icon="tabler:logout" width={20} />
                                                    <p>Logout</p>
                                                </div>
                                                <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                                                    <ModalContent>
                                                        {(onClose) => (
                                                            <>
                                                                <ModalHeader className="flex flex-col gap-1">
                                                                    Do you want to proceed ?
                                                                </ModalHeader>
                                                                <ModalFooter>
                                                                    <Button color="primary" onPress={onClose}>
                                                                        No
                                                                    </Button>
                                                                    <Button
                                                                        color="danger"
                                                                        variant="light"
                                                                        onPress={onClose}
                                                                    >
                                                                        Yes
                                                                    </Button>
                                                                </ModalFooter>
                                                            </>
                                                        )}
                                                    </ModalContent>
                                                </Modal>
                                            </>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
