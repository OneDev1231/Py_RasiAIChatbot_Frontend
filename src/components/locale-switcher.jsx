"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "../../i18n-config";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import clsx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function LocaleSwitcher({ currentLang }) {
  const pathName = usePathname();

  const redirectedPathName = (locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="flex capitalize gap-1 items-center text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600">
          <span>{currentLang}</span>
          <ChevronDownIcon className="size-4" />
        </MenuButton>
      </div>

      <MenuItems
        modal={false}
        transition
        className="absolute right-0 rtl:left-0 rtl:right-auto z-10 mt-2 w-24 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {i18n.locales.map((locale) => {
            return (
              <MenuItem key={locale}>
                {({ focus }) => (
                  <Link
                    href={redirectedPathName(locale)}
                    className={clsx(
                      focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm capitalize"
                    )}
                  >
                    {locale}
                  </Link>
                )}
              </MenuItem>
            );
          })}
        </div>
      </MenuItems>
    </Menu>
  );
}
