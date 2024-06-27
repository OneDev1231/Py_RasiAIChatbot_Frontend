import { CheckIcon } from "@heroicons/react/20/solid";
import {
  ChatBubbleBottomCenterTextIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import WhatsAppIcon from "@/components/icons/whatsapp-icon";
import screenshot from "@/images/dashboard-screenshot.png";
import screenshotAr from "@/images/dashboard-screenshot-ar.png";

export default function Hero({ dictionary }) {
  return (
    <div className="relative isolate overflow-hidden">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] rtl:[mask-image:radial-gradient(100%_100%_at_top_left,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
        />
      </svg>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-40 lg:flex lg:px-8 lg:pt-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <h1 className="mt-24 sm:mt-32 lg:mt-16 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {dictionary?.heading}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {dictionary?.p_1}
          </p>
          <ul className="mt-6 text-gray-700 font-semibold space-y-2">
            <li className="flex gap-2">
              <CheckIcon
                className="h-5 w-5 text-indigo-500"
                aria-hidden="true"
              />
              <span>{dictionary?.feature_1}</span>
            </li>
            <li className="flex gap-2">
              <CheckIcon
                className="h-5 w-5 text-indigo-500"
                aria-hidden="true"
              />
              <span>{dictionary?.feature_2}</span>
            </li>
            <li className="flex gap-2">
              <CheckIcon
                className="h-5 w-5 text-indigo-500"
                aria-hidden="true"
              />
              <span>{dictionary?.feature_3}</span>
            </li>
          </ul>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {dictionary?.p_2?.str_1}{" "}
            <WhatsAppIcon className="size-5 shrink-0 inline-block" />
            {dictionary?.p_2?.str_2}{" "}
            <EnvelopeIcon className="size-5 inline-block" />
            {dictionary?.p_2?.str_3}{" "}
            <ChatBubbleBottomCenterTextIcon className="size-5 inline-block" />.
          </p>
          <p className="text-lg leading-8 text-gray-600">{dictionary?.p_3}</p>
          <div className="mt-10 flex items-center">
            <a
              href="https://opnform.com/forms/join-our-waitlist-wtb1a7"
              target="_blank"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {dictionary?.link}
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ms-10 lg:me-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ms-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src={screenshot}
                alt="App screenshot"
                className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10 rtl:hidden"
              />
              <Image
                src={screenshotAr}
                alt="App screenshot"
                className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10 ltr:hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
