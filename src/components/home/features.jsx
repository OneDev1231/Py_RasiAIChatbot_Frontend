import { InboxIcon, TrashIcon, UsersIcon } from "@heroicons/react/24/outline";

const features = [
  {
    name: "Unlimited inboxes",
    description:
      "Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.",
    icon: InboxIcon,
  },
  {
    name: "Manage team members",
    description:
      "Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.",
    icon: UsersIcon,
  },
  {
    name: "Spam report",
    description:
      "Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.",
    icon: TrashIcon,
  },
];

export default function Features() {
  return (
    <div className="mx-auto mt-8 max-w-7xl px-6 sm:mt-16 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">
          Deploy faster
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Everything you need to deploy your app
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
          Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
          In mi viverra elit nunc.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <feature.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                {feature.name}
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">{feature.description}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
