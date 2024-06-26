import { CheckIcon } from "@heroicons/react/20/solid";
import {
  ChatBubbleBottomCenterTextIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import WhatsAppIcon from "@/components/icons/whatsapp-icon";

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
            <WhatsAppIcon className="size-5 shrink-0 inline-block" />
            , email <EnvelopeIcon className="size-5 inline-block" />, and SMS{" "}
            <ChatBubbleBottomCenterTextIcon className="size-5 inline-block align-middle" />
            .<br /> AI learns your business, speaks your brand voice.
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
