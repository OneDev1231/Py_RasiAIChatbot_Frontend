"use client";
import { useState } from "react";
import IntegrationContent from "./_integrationContent";
import Link from "next/link";
import { Icon } from "@iconify/react";
import "./animation.css";
import LogedInNav from "@/components/logedInNav";
import {
  Button,
  Divider,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";
import PhoneInput from "./_componenets/PhoneInput";
import { setWACredentials } from "@/services/integrations/whatsApp";

const categories = [
  "All",
  "Ads",
  "Analytics",
  "Ecommerce",
  "Email",
  "Phone",
  "Local",
  "SEO",
  "Social",
];

export default function Page() {
  const [active, setActive] = useState("All");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ModalComponent isOpen={isOpen} onOpenChange={onClose} />
      <LogedInNav fixed>
        <ul className="flex lg:gap-5 gap-1 flex-col lg:flex-row">
          {categories.map((category) => (
            <NavItem
              key={category}
              category={category}
              active={active}
              setActive={setActive}
            />
          ))}
        </ul>
      </LogedInNav>
      <div className="flex flex-wrap  gap-6  p-10 items-center justify-center">
        {IntegrationContent.map(
          (integration) =>
            (active === "All" || active === integration.category) && (
              <Button
                onPress={onOpen}
                key={integration.id}
                className="bg-white  dark:bg-darkbg h-fit min-w-[245px] py-10 rounded-lg flex flex-col gap-5 shadow-sm relative cursor-pointer hover:transform hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                {integration.enabled && (
                  <div className="h-5 w-5 absolute top-4 right-4 bg-green-500 rounded-full flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                )}
                <div className="flex justify-center">
                  <Icon
                    icon={integration.image}
                    className="h-16 w-16 dark:text-gray-200 text-gray-800"
                  />
                </div>
                <span className="text-center font-bold text-lg">
                  {integration.name}
                </span>
              </Button>
            ),
        )}
      </div>
    </>
  );
}

const NavItem = ({ category, active, setActive }) => {
  return (
    <li
      className={`cursor-pointer w-fit select-none ${active === category ? "border-b-primary border-b-[2.5px]" : "nav-item"
        }`}
      onClick={() => setActive(category)}
    >
      {category}
    </li>
  );
};

const ModalComponent = ({ isOpen, onOpenChange }) => {
  const [phone, setPhone] = useState("+966");
  const handleSetWACredential = async (phone_number, token) => {
    try {
      const result = await setWACredentials(phone_number, token);
      if(result == 200){
        toast.success("Credential is set successfully!");
      }
      else
        toast.error("Credential is not set properly.");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="opaque"
        className="overflow-visible"
      >
        <ModalContent>
          {(onClose) => (
            <ModalBody>
              <ModalHeader className="flex-col items-center gap-1 px-0 text-center">
                <h1 className="text-xl">Integrate your Chatbot</h1>
                <p className="text-small font-normal text-default-500">
                  Fill the form below to integrate your chatbot with WhatsApp
                </p>
              </ModalHeader>
              <form
                className="flex w-full flex-col gap-2"
                onSubmit={ (e) => {
                  e.preventDefault();
                  onClose();
                  //TODO: send the data to the server
                  console.log(
                    phone + e.target.phone.value,
                    e.target.Token.value,
                  );
                  handleSetWACredential(e.target.phone.value, e.target.Token.value);

                }}
              >
                <label
                  htmlFor="phone"
                  className="text-gray-700 dark:text-gray-200 text-sm"
                >
                  Phone Number
                </label>
                <PhoneInput phone={phone} setPhone={setPhone} />
                <label
                  htmlFor="chatbot-name"
                  className="text-gray-700 dark:text-gray-200 text-sm mt-2"
                >
                  Token
                </label>
                <Input
                  id="Token"
                  name="Token"
                  placeholder="Enter your token"
                  required
                />

                <Divider className="my-2" />
                <div className="flex w-full items-center justify-end pb-4">
                  <div className="flex gap-2">
                    <Button
                      color="danger"
                      type="button"
                      variant="flat"
                      onPress={onClose}
                    >
                      Cancel
                    </Button>
                    <Button color="primary" type="submit">
                      Confirm
                    </Button>
                  </div>
                </div>
              </form>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
