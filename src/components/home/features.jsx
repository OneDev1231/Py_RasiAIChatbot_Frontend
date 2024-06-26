import {
  BoltIcon,
  ChartBarSquareIcon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftEllipsisIcon,
  ChatBubbleLeftRightIcon,
  CodeBracketSquareIcon,
  EnvelopeIcon,
  InboxStackIcon,
  LanguageIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import WhatsAppIcon from "@/components/icons/whatsapp-icon";

const features = [
  {
    name: "AI-Powered Resolution.",
    description:
      "Solve up to 80% of complex issues instantly. Our AI understands and resolves intricate customer queries across all channels, just like your best human agent would.",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: "Multilingual Support.",
    description:
      "Communicate in 100+ languages, including English and Arabic. Break language barriers and expand your global reach. Our AI adapts to your customers' preferred language seamlessly.",
    icon: LanguageIcon,
  },
  {
    name: "Insightful Analytics.",
    description:
      "Gain deep insights into customer sentiment, common issues, and support trends to continually improve your service.",
    icon: ChartBarSquareIcon,
  },
  {
    name: "Lightning-Fast Response Times.",
    description:
      "95% reduction in wait times. Provide instant, 24/7 support to your customers, eliminating queues and enhancing satisfaction.",
    icon: BoltIcon,
  },
  {
    name: "Omnichannel Integration.",
    description: (
      <div className="[&_svg]:inline [&_svg]:size-4">
        One smart inbox for all channels. Seamlessly manage interactions from
        WhatsApp <WhatsAppIcon />, email <EnvelopeIcon />
        , SMS <ChatBubbleBottomCenterTextIcon />, and web chat{" "}
        <ChatBubbleLeftEllipsisIcon /> in a unified, AI-enhanced dashboard.
      </div>
    ),
    icon: InboxStackIcon,
  },
  {
    name: "Customizable AI Training.",
    description:
      "Tailor your AI agent to your brand. Easily train the AI with your business data, products, and brand voice - no technical expertise required.",
    icon: CodeBracketSquareIcon,
  },
];

export default function Product() {
  return (
    <div id="features" className="pt-8 sm:pt-16 pb-16 sm:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Features
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Image
            width={2880}
            height={1800}
            src="/dashboard-screenshot.png"
            alt="App screenshot"
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <feature.icon
                  className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                  aria-hidden="true"
                />

                {feature.name}
                <br />
              </dt>
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
