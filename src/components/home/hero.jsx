import { CheckIcon } from "@heroicons/react/20/solid";
import {
  ChatBubbleBottomCenterTextIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
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
            AI-Powered Customer Support
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Resolve 80% of customer support complex issues instantly across all
            channels.
          </p>
          <ul className="mt-6 text-gray-700 font-semibold">
            <li className="flex gap-2">
              <CheckIcon
                className="h-5 w-5 text-indigo-500"
                aria-hidden="true"
              />
              <span>Cut costs by 70%</span>
            </li>
            <li className="flex gap-2">
              <CheckIcon
                className="h-5 w-5 text-indigo-500"
                aria-hidden="true"
              />
              <span>Boost satisfaction by 40%</span>
            </li>
            <li className="flex gap-2">
              <CheckIcon
                className="h-5 w-5 text-indigo-500"
                aria-hidden="true"
              />
              <span>95% faster response times</span>
            </li>
          </ul>
          <p className="mt-6 text-lg leading-8 text-gray-600 align-middle">
            Seamless integration with WhatsApp{" "}
            <WhatsAppIcon className="size-5 shrink-0 inline-block fill-current" />
            , email <EnvelopeIcon className="size-5 inline-block" />, and SMS{" "}
            <ChatBubbleBottomCenterTextIcon className="size-5 inline-block align-middle" />
            . AI learns your business, speaks your brand voice.
          </p>

          <div className="mt-10 flex items-center">
            <a
              href="https://opnform.com/forms/join-our-waitlist-wtb1a7"
              target="_blank"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Join our waitlist
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                width={2880}
                height={1800}
                src="/dashboard-screenshot.png"
                alt="App screenshot"
                className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WhatsAppIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      style={{
        enableBackground: "new 0 0 54 54",
      }}
      viewBox="0 0 54 54"
      {...props}
    >
      <path
        d="M-.2.1h53.8v53.4H-.2z"
        style={{
          fill: "none",
        }}
      />
      <path d="M18.9 6.3c2.6-1.1 5.3-1.7 8.2-1.7 2.8 0 5.6.6 8.2 1.7 2.6 1.1 4.8 2.6 6.7 4.5 1.9 1.9 3.4 4.1 4.5 6.7 1.1 2.6 1.7 5.3 1.7 8.2 0 2.8-.6 5.6-1.7 8.2s-2.6 4.8-4.5 6.7c-1.9 1.9-4.1 3.4-6.7 4.5s-5.3 1.7-8.2 1.7c-3.6 0-7-.9-10.2-2.6L5.2 47.9 9 36.6c-2-3.3-3-6.9-3-10.9 0-2.8.6-5.6 1.7-8.2 1.1-2.6 2.6-4.8 4.5-6.7 1.8-1.9 4.1-3.3 6.7-4.5zM27 43.2c2.4 0 4.6-.5 6.8-1.4 2.2-.9 4-2.2 5.6-3.7s2.8-3.4 3.7-5.6 1.4-4.4 1.4-6.8-.5-4.6-1.4-6.8c-.9-2.2-2.2-4-3.7-5.6s-3.4-2.8-5.6-3.7c-2.2-.9-4.4-1.4-6.8-1.4-2.4 0-4.6.5-6.8 1.4-2.2.9-4 2.2-5.6 3.7s-2.8 3.4-3.7 5.6c-.9 2.2-1.4 4.4-1.4 6.8 0 3.8 1.1 7.2 3.3 10.3l-2.2 6.5 6.8-2.1c2.9 1.9 6.2 2.8 9.6 2.8zm4.2-13.4c.7-.9 1.2-1.4 1.5-1.4.2 0 1.1.4 2.7 1.2 1.6.8 2.4 1.3 2.5 1.5 0 .1.1.2.1.4 0 .6-.2 1.3-.5 2.1-.3.7-1 1.3-2 1.8s-2 .7-2.8.7c-1.1 0-2.8-.6-5.3-1.7-1.8-.8-3.4-1.9-4.7-3.3-1.3-1.4-2.7-3.1-4.1-5.2-1.3-2-2-3.8-2-5.4v-.2c.1-1.7.7-3.2 2.1-4.4.4-.4.9-.6 1.5-.6h1c.4 0 .6.1.7.2.1.1.3.4.4.8.1.4.5 1.2.9 2.5.5 1.3.7 2 .7 2.1 0 .4-.3.9-1 1.6-.6.7-1 1.1-1 1.3 0 .1 0 .3.1.4.6 1.4 1.6 2.6 2.8 3.8 1 1 2.4 1.9 4.2 2.8.2.1.4.2.6.2.4.1.9-.3 1.6-1.2z" />
    </svg>
  );
}
