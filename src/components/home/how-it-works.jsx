import {
  AdjustmentsHorizontalIcon,
  CloudArrowUpIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

export default function HowItWorks({ dictionary }) {
  const steps = [
    {
      name: dictionary?.step_1.title,
      description: dictionary?.step_1.description,
      icon: CloudArrowUpIcon,
    },
    {
      name: dictionary?.step_2.title,
      description: dictionary?.step_2.description,
      icon: AdjustmentsHorizontalIcon,
    },
    {
      name: dictionary?.step_3.title,
      description: dictionary?.step_3.description,
      icon: RocketLaunchIcon,
    },
  ];

  return (
    <div
      id="how-it-works"
      className="mx-auto py-16 max-w-7xl px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-lg font-semibold leading-7 text-indigo-600">
          {dictionary?.heading}
        </h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {dictionary?.tagline}
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.name}
              className="overflow-hidden rounded-lg bg-white shadow"
            >
              <div className="px-4 py-5 sm:p-6">
                <div className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <step.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {step.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{step.description}</p>
                  </dd>
                </div>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
