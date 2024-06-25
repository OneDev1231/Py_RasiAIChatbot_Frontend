import { CheckIcon } from "@heroicons/react/24/outline";

export default function CTA() {
  return (
    <div className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
      <div
        className="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-25"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="1d4240dd-898f-445f-932d-e2872fd12de3"
            width={200}
            height={200}
            x="50%"
            y={0}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#1d4240dd-898f-445f-932d-e2872fd12de3)"
        />
      </svg>

      <div className="text-center">
        <h2 className="text-3xl font-bold max-w-2xl mx-auto tracking-tight text-gray-900 sm:text-4xl">
          Resolve 80% of customer support complex issues instantly across all
          channels.
        </h2>
        <ul className="mt-10 text-gray-700 font-semibold flex items-center justify-center gap-6 text-lg">
          <li className="flex gap-2">
            <CheckIcon className="h-5 w-5 text-indigo-500" aria-hidden="true" />
            <span>Cut costs by 70%</span>
          </li>
          <li className="flex gap-2">
            <CheckIcon className="h-5 w-5 text-indigo-500" aria-hidden="true" />
            <span>Boost satisfaction by 40%</span>
          </li>
          <li className="flex gap-2">
            <CheckIcon className="h-5 w-5 text-indigo-500" aria-hidden="true" />
            <span>95% faster response times</span>
          </li>
        </ul>

        <div className="mt-10 flex items-center justify-center">
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Join our waitlist
          </a>
        </div>
      </div>
    </div>
  );
}
