import {
  BoltIcon,
  ChartBarSquareIcon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftRightIcon,
  CodeBracketSquareIcon,
  EnvelopeIcon,
  InboxStackIcon,
  LanguageIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import WhatsAppIcon from "@/components/icons/whatsapp-icon";
import screenshot from "@/images/dashboard-screenshot.png";
import screenshotAr from "@/images/dashboard-screenshot-ar.png";

export default function Product({ dictionary }) {
  const features = [
    {
      name: dictionary?.feature_1?.title,
      description: dictionary?.feature_1?.description,
      icon: ChatBubbleLeftRightIcon,
    },
    {
      name: dictionary?.feature_2?.title,
      description: dictionary?.feature_2?.description,
      icon: LanguageIcon,
    },
    {
      name: dictionary?.feature_3?.title,
      description: dictionary?.feature_3?.description,
      icon: ChartBarSquareIcon,
    },
    {
      name: dictionary?.feature_4?.title,
      description: dictionary?.feature_4?.description,
      icon: BoltIcon,
    },
    {
      name: dictionary?.feature_5?.title,
      description: (
        <div className="[&_svg]:inline [&_svg]:size-4">
          {dictionary?.feature_5?.description?.str_1} <WhatsAppIcon />
          {dictionary?.feature_5?.description?.str_2} <EnvelopeIcon />
          {dictionary?.feature_5?.description?.str_3}{" "}
          <ChatBubbleBottomCenterTextIcon />
          {dictionary?.feature_5?.description.str_4}
        </div>
      ),
      icon: InboxStackIcon,
    },
    {
      name: dictionary?.feature_6?.title,
      description: dictionary?.feature_6?.description,
      icon: CodeBracketSquareIcon,
    },
  ];

  return (
    <div id="features" className="pt-8 sm:pt-16 pb-16 sm:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-lg font-semibold leading-7 text-indigo-600">
            {dictionary?.heading}
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {dictionary?.tagline}
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Image
            src={screenshot}
            alt="App screenshot"
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10 rtl:hidden"
          />
          <Image
            src={screenshotAr}
            alt="App screenshot"
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10 ltr:hidden"
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative ps-9">
              <dt className="inline font-semibold text-gray-900">
                <feature.icon
                  className="absolute left-1 rtl:left-auto rtl:right-1 top-1 h-5 w-5 text-indigo-600"
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
