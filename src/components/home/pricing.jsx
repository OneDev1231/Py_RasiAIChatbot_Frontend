"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";
import { useState } from "react";

export default function Pricing() {
  const [sliderValue, setSliderValue] = useState(10);
  const price = sliderValue * 10;

  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
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
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
        Qui iusto aut est earum eos quae. Eligendi est at nam aliquid ad quo
        reprehenderit in aliquid fugiat dolorum voluptatibus.
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {/** standard */}
        <div className="relative bg-white shadow-2xl rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10">
          <h3
            id="tier-standard"
            className="text-base font-semibold leading-7 text-indigo-600"
          >
            Standard
          </h3>
          <p className="mt-4 flex items-baseline gap-x-2">
            <span className="text-5xl font-bold tracking-tight text-gray-900">
              ${price}
            </span>
            <span className="text-base text-gray-500">/month</span>
          </p>
          <p className="mt-6 text-base leading-7 text-gray-600">
            The perfect plan if you're just getting started with our product.
          </p>
          <div className="mt-8">
            <SliderPrimitive.Root
              value={[sliderValue]}
              onValueChange={setSliderValue}
              className="relative flex w-full touch-none select-none items-center"
            >
              <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-200">
                <SliderPrimitive.Range className="absolute h-full bg-indigo-600" />
              </SliderPrimitive.Track>
              <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-indigo-600 bg-white transition-colors ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2" />
            </SliderPrimitive.Root>
            <div className="flex justify-around mt-4">
              <p className="text-sm font-medium text-gray-500">500</p>
              <p className="text-sm font-medium text-gray-500">200k</p>
              <p className="text-sm font-medium text-gray-500">500k</p>
              <p className="text-sm font-medium text-gray-500">1m</p>
            </div>
          </div>
          <a
            href="#"
            aria-describedby="tier-standard"
            className="bg-indigo-600 text-white shadow hover:bg-indigo-500 mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-10"
          >
            Get started today
          </a>
        </div>

        {/** custom */}
        <div className="bg-white/60 sm:mx-8 lg:mx-0 sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10">
          <h3
            id="tier-enterprise"
            className="text-base font-semibold leading-7 text-indigo-600"
          >
            Enterprise
          </h3>
          <p className="mt-4 flex items-baseline gap-x-2">
            <span className="text-5xl font-bold tracking-tight text-gray-900">
              Custom
            </span>
          </p>
          <p className="mt-6 text-base leading-7 text-gray-600">
            A plan that scales with your rapidly growing business.
          </p>

          <a
            href="#"
            aria-describedby="tier-enterprise"
            className="text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-10"
          >
            Contact sales
          </a>
        </div>
      </div>
    </div>
  );
}
