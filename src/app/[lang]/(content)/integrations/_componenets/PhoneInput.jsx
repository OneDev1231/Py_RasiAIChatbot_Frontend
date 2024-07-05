import { useState } from "react";
import { Icon } from "@iconify/react";
export default function PhoneInput({ phone, setPhone }) {
        const [dropdown, setDropdown] = useState(false);
        return (
                <div className="w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                                <div className="h-fit mt-2 w-full">
                                        <div className="flex items-center relative">
                                                <div
                                                        data-dropdown-toggle="dropdown-phone"
                                                        className="flex-shrink-0 cursor-pointer min-w-[105px] z-10 inline-flex items-center py-3 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border-1 border-[#ECEDF0] rounded-s-md hover:bg-gray-200  focus:outline-none dark:bg-[#27272A] dark:hover:bg-[#3F3F46] dark:focus:ring-gray-700 dark:text-white dark:border-none"
                                                        onClick={() => setDropdown(!dropdown)}
                                                >
                                                        <Flags refrence={phone} />
                                                        {phone}{" "}
                                                        <div
                                                                className={`${!dropdown ? "rotate-[-90deg] mr-2.5" : ""} origin-top-right `}
                                                        >
                                                                <svg
                                                                        className={`w-2.5 h-2.5 ${dropdown ? "ms-2.5" : ""}`}
                                                                        aria-hidden="true"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewBox="0 0 10 6"
                                                                >
                                                                        <path
                                                                                stroke="currentColor"
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round"
                                                                                stroke-width="2"
                                                                                d="m1 1 4 4 4-4"
                                                                        />
                                                                </svg>
                                                        </div>
                                                </div>
                                                <div
                                                        id="dropdown-phone"
                                                        className={` bg-white z-50 divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-[#27272A] ${dropdown ? "block" : "hidden"} absolute top-12 left-0`}
                                                >
                                                        <ul
                                                                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                                                aria-labelledby="dropdown-phone-div"
                                                        >
                                                                <li>
                                                                        <div
                                                                                className="inline-flex cursor-pointer w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-[#3F3F46] dark:hover:text-white"
                                                                                role="menuitem"
                                                                                onClick={() => {
                                                                                        setPhone("+966");
                                                                                        setDropdown(false);
                                                                                }}
                                                                        >
                                                                                <span className="inline-flex items-center">
                                                                                        <Flags refrence="+966" />
                                                                                        Saudi Arabia (+966)
                                                                                </span>
                                                                        </div>
                                                                </li>
                                                                <li>
                                                                        <div
                                                                                className="inline-flex cursor-pointer w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-[#3F3F46] dark:hover:text-white"
                                                                                role="menuitem"
                                                                                onClick={() => {
                                                                                        setPhone("+1");
                                                                                        setDropdown(false);
                                                                                }}
                                                                        >
                                                                                <span className="inline-flex items-center">
                                                                                        <Flags refrence="+1" />
                                                                                        United States (+1)
                                                                                </span>
                                                                        </div>
                                                                </li>
                                                                <li>
                                                                        <div
                                                                                className="inline-flex cursor-pointer w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-[#3F3F46] dark:hover:text-white"
                                                                                role="menuitem"
                                                                                onClick={() => {
                                                                                        setPhone("+44");
                                                                                        setDropdown(false);
                                                                                }}
                                                                        >
                                                                                <span className="inline-flex items-center">
                                                                                        <Flags refrence="+44" />
                                                                                        United Kingdom (+44)
                                                                                </span>
                                                                        </div>
                                                                </li>
                                                                <li>
                                                                        <div
                                                                                className="inline-flex w-full px-4 cursor-pointer py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-[#3F3F46] dark:hover:text-white"
                                                                                role="menuitem"
                                                                                onClick={() => {
                                                                                        setPhone("+61");
                                                                                        setDropdown(false);
                                                                                }}
                                                                        >
                                                                                <span className="inline-flex items-center">
                                                                                        <Flags refrence="+61" />
                                                                                        Australia (+61)
                                                                                </span>
                                                                        </div>
                                                                </li>
                                                                <li>
                                                                        <div
                                                                                className="inline-flex w-full cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-[#3F3F46] dark:hover:text-white"
                                                                                role="menuitem"
                                                                                onClick={() => {
                                                                                        setPhone("+49");
                                                                                        setDropdown(false);
                                                                                }}
                                                                        >
                                                                                <span className="inline-flex items-center">
                                                                                        <Flags refrence="+49" />
                                                                                        Germany (+49)
                                                                                </span>
                                                                        </div>
                                                                </li>
                                                                <li>
                                                                        <div
                                                                                className="inline-flex w-full px-4 py-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-[#3F3F46] dark:hover:text-white"
                                                                                role="menuitem"
                                                                                onClick={() => {
                                                                                        setPhone("+33");
                                                                                        setDropdown(false);
                                                                                }}
                                                                        >
                                                                                <span className="inline-flex items-center">
                                                                                        <Flags refrence="+33" />
                                                                                        France (+33)
                                                                                </span>
                                                                        </div>
                                                                </li>
                                                        </ul>
                                                </div>
                                                <div className="relative w-full">
                                                        <input
                                                                type="text"
                                                                name="phone"
                                                                className="block p-3 w-full z-20 focus:outline-none text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-0 border-1 border-[#ECEDF0] focus:ring-blue-500 dark:bg-[#27272A] dark:border-s-gray-700  dark:border-none dark:placeholder-gray-400 dark:text-white"
                                                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                                                placeholder="123-456-7890"
                                                                onClick={() => setDropdown(false)}
                                                                required
                                                        />
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        );
}

const Flags = ({ refrence }) => {
        switch (refrence) {
                case "+1":
                        return (
                                <>
                                        <Icon
                                                icon="twemoji:flag-for-united-states"
                                                className="h-4 w-4 me-2"
                                        />
                                </>
                        );
                case "+44":
                        return (
                                <>
                                        <Icon
                                                icon="twemoji:flag-for-united-kingdom"
                                                className="h-4 w-4 me-2"
                                        />
                                </>
                        );
                case "+61":
                        return (
                                <>
                                        <Icon icon="twemoji:flag-for-australia" className="h-4 w-4 me-2" />
                                </>
                        );
                case "+966":
                        return (
                                <>
                                        <Icon icon="twemoji:flag-for-saudi-arabia" className="h-4 w-4 me-2" />
                                </>
                        );

                case "+49":
                        return (
                                <>
                                        <Icon icon="twemoji:flag-for-germany" className="h-4 w-4 me-2" />
                                </>
                        );
                case "+33":
                        return (
                                <>
                                        <Icon icon="twemoji:flag-for-france" className="h-4 w-4 me-2" />
                                </>
                        );
        }
};
