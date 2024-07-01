"use client";
import { useState } from "react";
import IntegrationContent from "./_integrationContent";
import Link from "next/link";
import { Icon } from "@iconify/react";
import "./animation.css";

const list = [
  {
    text: "Account Profile",
    icon: "iconamoon:profile-light",
  },
  {
    text: "Billing and Upgrade",
    icon: "solar:star-line-duotone",
  },
  {
    text: "Add-Ons",
    icon: "tabler:plus",
  },
  {
    text: "Refer a Friend",
    icon: "mdi:present-outline",
  },
  {
    text: "Log Out",
    icon: "material-symbols:logout",
  },
];

export default function Page() {
  const [active, setActive] = useState("All");

  return (
    <>
      <Nav active={active} setActive={setActive} />
      <div className="flex flex-wrap  gap-6 bg-[#F3F4F8] dark:bg-zinc-950 p-10 items-center justify-center">
        {IntegrationContent.map(
          (integration) =>
            (active === "All" || active === integration.category) && (
              <Link
                href={integration.linkTo}
                key={integration.id}
                className="bg-white dark:bg-slate-500 min-w-[245px] py-10 rounded-lg flex flex-col gap-5 shadow-sm relative cursor-pointer hover:transform hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                {integration.enabled && (
                  <div className="h-5 w-5 absolute top-4 right-4 bg-green-500 rounded-full flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                )}
                <div className="flex justify-center">
                  <Icon
                    icon={integration.image}
                    className="h-16 w-16"
                    style={{ color: "#1A1A1A" }}
                  />
                </div>
                <span className="text-center font-bold text-lg">
                  {integration.name}
                </span>
              </Link>
            ),
        )}
      </div>
    </>
  );
}

const Nav = ({ active, setActive }) => {
  const categories = [
    "All",
    "Ads",
    "Analytics",
    "Ecommerce",
    "Email",
    "Phone",
    "Local",
    "SEO",
    "Social",
  ];

  return (
    <>
      <div className="flex gap-10 my-5">
        <span className="font-bold text-xl ml-5">Integrations</span>
        <ul className="flex lg:gap-5 gap-1 flex-col lg:flex-row">
          {categories.map((category) => (
            <NavItem
              key={category}
              category={category}
              active={active}
              setActive={setActive}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

const NavItem = ({ category, active, setActive }) => {
  return (
    <li
      className={`cursor-pointer w-fit select-none ${active === category
          ? "border-b-orange-600 border-b-[2.5px]"
          : "nav-item"
        }`}
      onClick={() => setActive(category)}
    >
      {category}
    </li>
  );
};
