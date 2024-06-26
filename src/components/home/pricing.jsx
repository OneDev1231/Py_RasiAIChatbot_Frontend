import { CheckIcon } from "@heroicons/react/24/outline";

export default function Pricing() {
  return (
    <div
      id="pricing"
      className="relative isolate bg-white px-6 py-16 sm:py-28 lg:px-8"
    >
      <div
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">
          Pricing
        </h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          The right price for you, whoever you are
        </p>
      </div>
      <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2 mt-16 sm:mt-20">
        <div className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10">
          <div>
            <h3
              id="standard-tier"
              className="text-base font-semibold leading-7 text-indigo-600"
            >
              Standard
            </h3>
            <div className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-gray-900">
                750
              </span>
              <span className="text-base font-semibold leading-7 text-gray-600">
                SAR/month
              </span>
            </div>
            <ul
              role="list"
              className="mt-10 space-y-4 text-sm leading-6 text-gray-600"
            >
              <li className="flex gap-x-3">
                <CheckIcon
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                AI powered conversations*
              </li>
              <li className="flex gap-x-3">
                <CheckIcon
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                Omni channel platform integrating whatsApp, email and SMS
              </li>
              <li className="flex gap-x-3">
                <CheckIcon
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                Tailored AI responses based on your data, products and brand
                voice
              </li>
              <li className="flex gap-x-3">
                <CheckIcon
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                Insightful analytics of customers sentiment and common issues
              </li>
              <li className="flex gap-x-3">
                <CheckIcon
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                +100 languages support including Arabic and English
              </li>
            </ul>
            <p className="mt-6 text-xs leading-5 text-gray-600">
              * Up to 150 customers engaged per month.
            </p>
          </div>
          <a
            href="https://opnform.com/forms/join-our-waitlist-wtb1a7"
            aria-describedby="standard-tier"
            className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Join the waitlist
          </a>
        </div>

        <div className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10">
          <div>
            <h3
              id="enterprise-tier"
              className="text-base font-semibold leading-7 text-indigo-600"
            >
              Enterprise
            </h3>
            <div className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-gray-900">
                Custom
              </span>
            </div>
            <ul
              role="list"
              className="mt-10 space-y-4 text-sm leading-6 text-gray-600"
            >
              <li className="flex gap-x-3">
                <CheckIcon
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>
                  <span className="font-semibold">
                    Direct Backend Integration.
                  </span>{" "}
                  Enable AI to perform actions like scheduling and refunds by
                  connecting directly to your backend systems.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckIcon
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>
                  <span className="font-semibold">
                    Dedicated AI Training and Optimization.
                  </span>{" "}
                  Receive expert support to optimize your AI agent, ensuring
                  perfect alignment with your complex business processes.
                </span>
              </li>
            </ul>
          </div>
          <a
            href="https://opnform.com/forms/custom-features-form-kndagv"
            target="_blank"
            aria-describedby="enterprise-tier"
            className="text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-10"
          >
            Contact our sales
          </a>
        </div>
      </div>
    </div>
  );
}
