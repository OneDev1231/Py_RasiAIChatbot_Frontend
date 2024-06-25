import {
  AdjustmentsHorizontalIcon,
  CloudArrowUpIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    name: "1. Upload Your Knowledge Base",
    description:
      "Feed your AI with your business expertise. Simply upload your documents (PDF, Excel, Word, JSON) containing product info, FAQs, and policies. Our AI rapidly absorbs and understands your unique brand voice and offerings.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "2. Customize Your AI Agent",
    description:
      "Fine-tune your AI's responses and behavior through our intuitive interface. Set up multilingual support, including English and Arabic, to match your global customer base. Integrate and Launch",
    icon: AdjustmentsHorizontalIcon,
  },
  {
    name: "3. Go live across all channels ",
    description:
      "Connect your communication channels (WhatsApp, email, SMS) with few clicks. Your AI support agent is now ready to slash costs and delight customers 24/7.",
    icon: RocketLaunchIcon,
  },
];

export default function GetStarted() {
  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">
          Getting started
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          How it works
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.name} className="flex flex-col">
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
          ))}
        </dl>
      </div>
    </div>
  );
}
