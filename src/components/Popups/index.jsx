"use client";

import React, { useState } from "react";
import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  ModalHeader,
  Tooltip,
  Select,
  Textarea,
  useDisclosure,
  SelectItem,
} from "@nextui-org/react";
import { add_new_chatbot } from "@/services/chatbot/add-chatbot";
import { useBotDispatch, useBotSelector } from "@/lib/hooks/rtk_hooks";
import { addChatbot } from "@/lib/features/dashboardSlice";
import toast from "react-hot-toast";

const companyChoices = [
  { key: "E-commerce", label: "E-commerce" },
  { key: "Telecom", label: "Telecom" },
  { key: "Travel", label: "Travel" },
  { key: "Tourism", label: "Tourism" },
  { key: "Hospitality", label: "Hospitality" },
  { key: "Banking", label: "Banking" },
  { key: "Real Estate", label: "Real Estate" },
  { key: "Healthcare", label: "Healthcare" },
  { key: "Transportation", label: "Transportation" },
  { key: "Education", label: "Education" },
  { key: "Other", label: "Other" },
];

const languages = [
  { key: "English", label: "English" },
  { key: "Arabic", label: "Arabic" },
  { key: "Spanish", label: "Spanish" },
  { key: "French", label: "French" },
  { key: "urdo", label: "Urdo" },
];

const styles = [
  { key: "formal", label: "Formal" },
  { key: "casual", label: "Casual" },
  { key: "friendly", label: "Friendly" },
  { key: "professional", label: "Professional" },
];

export default function Popup({ isFirst, onFirstChange }) {
  const [files, setFiles] = React.useState([]);

  const [data, setData] = React.useState({
    chatbot_name: "",
    business_name: "",
    industry: "",
    primary_language: "",
    selected_functions: "",
    communication_style: "",
    files: [],
  });

  const dispatch = useBotDispatch();

  const handleAddChatbot = async (files) => {
    console.log("files : ");
    console.log(files);
    try {
      const result = await add_new_chatbot({
        chatbot_name: data.chatbot_name,
        business_name: data.business_name,
        industry: data.industry,
        primary_language: data.primary_language,
        selected_functions: data.selected_functions,
        communication_style: data.communication_style,
        files: files,
      });
      if (result[0] == 200) {
        console.log(result[1]);
        dispatch(
          addChatbot({
            name: data.chatbot_name,
            prompt: result[1],
            files: data.files.map((file) => file.name),
          }),
        );
        toast.success("Chatbot is added successfully!");
        onClose();
      } else {
        toast.error("Error creating chatbot");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = (event) => {
    setFiles([...files, ...event.target.files]);
  };
  const [selectedKeys, setSelectedKeys] = React.useState(
    new Set(["Customer S"]),
  );

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const droppedFiles = Array.from(event.dataTransfer.files);
    setFiles([...files, ...droppedFiles]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys],
  );
  // Remove defaultOpen when using this component
  const { isOpen, onOpen, onOpenChange } = useDisclosure({
    defaultOpen: false,
  });

  return (
    <>
      <Modal
        isOpen={isFirst}
        shouldBlockScroll={false}
        onOpenChange={onFirstChange}
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <ModalBody>
              <ModalHeader className="flex-col items-center gap-1 px-0 text-center">
                <h1 className="text-xl">Personalize your Chatbot</h1>
                <p className="text-small font-normal text-default-500">
                  Give your chatbot a name and a purpose
                </p>
              </ModalHeader>
              <form
                className="flex w-full flex-col gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  onOpen();
                  onClose();
                  //TODO: set request data
                  console.log(
                    e.target["chatbot-name"].value,
                    e.target["business-name"].value,
                    e.target["company-industry"].value,
                    e.target["company-language"].value,
                    selectedValue,
                    e.target["agent-style"].value,
                  );
                  setData({
                    // ...data,
                    chatbot_name: e.target["chatbot-name"].value,
                    business_name: e.target["business-name"].value,
                    industry: e.target["company-industry"].value,
                    primary_language: e.target["company-language"].value,
                    selected_functions: selectedValue,
                    communication_style: e.target["agent-style"].value,
                    files: [],
                  });
                }}
              >
                <label
                  htmlFor="chatbot-name"
                  className="text-gray-700 dark:text-gray-200 text-sm"
                >
                  Agent name
                </label>
                <Textarea
                  aria-label="Chatbot Name"
                  minRows={1}
                  name="chatbot-name"
                  placeholder="Fatimah, Mohamad, Omar, ..."
                  variant="faded"
                  className="mb-2"
                  required
                />
                <label className="text-gray-700 dark:text-gray-200 text-sm">
                  Business name
                </label>
                <Textarea
                  aria-label="Business Name"
                  minRows={1}
                  name="business-name"
                  placeholder="Tortah and foods, Al-Majlis, ..."
                  variant="faded"
                  className="mb-2"
                  required
                />
                <label
                  htmlFor="compnay-industry"
                  className="text-gray-700 dark:text-gray-200 text-sm"
                >
                  Company Details
                </label>

                <div className="w-full flex flex-col gap-4 mb-2">
                  <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                    <Select
                      variant="bordered"
                      name="company-industry"
                      label="company's industry"
                      className="max-w-xs"
                      isRequired
                    >
                      {companyChoices.map((choice) => (
                        <SelectItem key={choice.key}>{choice.label}</SelectItem>
                      ))}
                    </Select>
                    <Select
                      variant="bordered"
                      name="company-language"
                      label="Select a language"
                      className="max-w-xs"
                      isRequired
                    >
                      {languages.map((lang) => (
                        <SelectItem key={lang.key}>{lang.label}</SelectItem>
                      ))}
                    </Select>
                  </div>
                </div>
                <label
                  htmlFor="agent-functions"
                  className="text-gray-700 dark:text-gray-200 text-sm"
                >
                  Agent functions
                </label>
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered" className="capitalize">
                      {selectedValue}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Multiple selection example"
                    variant="bordered"
                    closeOnSelect={false}
                    disallowEmptySelection
                    selectionMode="multiple"
                    selectedKeys={selectedKeys}
                    onSelectionChange={setSelectedKeys}
                  >
                    <DropdownItem key="Customer S">
                      <Tooltip
                        placement="right"
                        className="w-full h-full"
                        content={
                          <div className="px-1 py-2">
                            <div className="text-small font-bold">
                              Customer Support
                            </div>
                            <div className="text-tiny">
                              Handle inquiries, resolve issues, and provide
                              assistance with existing products or services.
                            </div>
                          </div>
                        }
                      >
                        Customer Support
                      </Tooltip>
                    </DropdownItem>
                    <DropdownItem key="sales & Product">
                      <Tooltip
                        placement="right"
                        className="w-full h-full"
                        content={
                          <div className="px-1 py-2">
                            <div className="text-small font-bold">
                              Sales and Product Information
                            </div>
                            <div className="text-tiny">
                              Provide details about products/services, assist
                              with purchasing decisions, and process orders.
                            </div>
                          </div>
                        }
                      >
                        Sales and Product Information
                      </Tooltip>
                    </DropdownItem>
                    <DropdownItem key="Technical S">
                      <Tooltip
                        placement="right"
                        className="w-full h-full"
                        content={
                          <div className="px-1 py-2">
                            <div className="text-small font-bold">
                              Technical Support
                            </div>
                            <div className="text-tiny">
                              Offer specialized assistance for technical issues,
                              troubleshooting, and product usage.
                            </div>
                          </div>
                        }
                      >
                        Technical Support
                      </Tooltip>
                    </DropdownItem>
                    <DropdownItem key="General">
                      <Tooltip
                        placement="right"
                        className="w-full h-full"
                        content={
                          <div className="px-1 py-2">
                            <div className="text-small font-bold">
                              General Inquiries
                            </div>
                            <div className="text-tiny">
                              Address general questions about the company,
                              policies, locations, and business hours.
                            </div>
                          </div>
                        }
                      >
                        General Inquiries
                      </Tooltip>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <label
                  htmlFor="agent-functions"
                  className="text-gray-700 dark:text-gray-200 text-sm mt-2"
                >
                  Agent Description
                </label>
                <Select
                  variant="bordered"
                  label="Select a style"
                  name="agent-style"
                  isRequired
                >
                  {styles.map((style) => (
                    <SelectItem key={style.key}>{style.label}</SelectItem>
                  ))}
                </Select>

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
                      Next
                    </Button>
                  </div>
                </div>
              </form>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
      <Modal
        isOpen={isOpen}
        shouldBlockScroll={false}
        onOpenChange={onOpenChange}
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <ModalBody>
              <ModalHeader className="flex-col items-center gap-1 px-0 text-center">
                <h1 className="text-xl">Upload relevent Content</h1>
                <p className="text-small font-normal text-default-500">
                  Upload relevent information about your business for a
                  customized experience (Optional)
                </p>
              </ModalHeader>
              <form
                className="flex w-full flex-col gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  onClose();
                  handleAddChatbot(files);
                  setFiles([]);
                }}
              >
                <div className="flex flex-col items-center">
                  <div
                    className="mb-2 border-2 rounded-2xl p-2 w-full h-72 border-dashed border-primary flex items-center justify-center relative"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                  >
                    <label
                      htmlFor="file-input"
                      className="text-gray-700 dark:text-gray-200 cursor-pointer flex flex-col items-center justify-center w-full h-full"
                    >
                      <UploadIcon />
                      <span>Drag and drop files here or click to upload</span>
                    </label>
                    <input
                      id="file-input"
                      name="file-input"
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                      multiple
                    />
                  </div>
                  {files.length > 0 && (
                    <div className="w-full mt-4 bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md">
                      <h3 className="text-gray-700 dark:text-gray-200 mb-2">
                        Uploaded Files:
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {files.map((file, index) => (
                          <li
                            key={index}
                            className="text-gray-700 dark:text-gray-200"
                          >
                            {file.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <Divider className="my-2" />
                <div className="flex w-full items-center justify-between pb-4">
                  <Button color="" type="submit">
                    Skip for now
                  </Button>
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
                      Done
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
}

const UploadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 210.8799 200.1777"
    className="mb-10"
    width="100"
    height="100"
  >
    <g>
      <polygon points="184,176.1777 24,176.1777 24,148.1777 8,148.1777 8,192.1777 200,192.1777 200,148.1777 184,148.1777" />
      <polygon
        fill="#5046E5"
        points="103.8711,40.3848 103.5898,40.1035 103.3086,40.3848"
      />
      <path
        fill="#5046E5"
        d="M176,140.1777v28H32v-28H0v60h208v-60H176z M200,192.1777H8v-44h16v28h160v-28h16V192.1777z"
      />
      <path
        fill="#5046E5"
        d="M79.9336,63.7637L100,43.6938v104.4839h8V44.5146l20.0664,20.0693c0.7812,0.7813,1.8047,1.1719,2.8281,1.1719
        s2.0469-0.3906,2.8281-1.1719c1.5625-1.5625,1.5625-4.0937,0-5.6562L106.418,31.6191c-1.5-1.5-4.1562-1.5-5.6562,0L74.2773,58.1074
        c-1.5625,1.5625-1.5625,4.0938,0,5.6562S78.3711,65.3262,79.9336,63.7637z M103.8711,40.3848h-0.5625l0.2812-0.2812L103.8711,40.3848z"
      />
    </g>
    <path
      fill="#FF5D5D"
      d="M28.252,64c-1.0234,0-2.0479-0.3906-2.8281-1.1719c-1.5625-1.5615-1.5625-4.0947,0-5.6562l14.1426-14.1416
      c1.5625-1.5625,4.0957-1.5625,5.6562,0c1.5625,1.5615,1.5625,4.0947,0,5.6562L31.0801,62.8281C30.2988,63.6094,29.2754,64,28.252,64z"
    />
    <path
      fill="#FF5D5D"
      d="M42.3945,64c-1.0234,0-2.0479-0.3906-2.8281-1.1719L25.4238,48.6855c-1.5625-1.5615-1.5625-4.0947,0-5.6562
      c1.5605-1.5625,4.0957-1.5625,5.6562,0l14.1426,14.1426c1.5625,1.5615,1.5625,4.0947,0,5.6562C44.4424,63.6094,43.418,64,42.3945,64z"
    />
    <path
      fill="#00D40B"
      d="M150.252,140c-7.7197,0-14-6.2803-14-14s6.2803-14,14-14s14,6.2803,14,14S157.9717,140,150.252,140z M150.252,120
      c-3.3086,0-6,2.6914-6,6s2.6914,6,6,6s6-2.6914,6-6S153.5605,120,150.252,120z"
    />
    <path
      fill="#FFC504"
      d="M195.5664,30.627c-1.0234,0-2.0469-0.3906-2.8281-1.1719l-11.3145-11.3135c-0.75-0.75-1.1719-1.7676-1.1719-2.8281
      s0.4219-2.0781,1.1719-2.8281l11.3145-11.3135c1.5625-1.5625,4.0938-1.5625,5.6562,0l11.3135,11.3135
      c1.5625,1.5615,1.5625,4.0947,0,5.6562l-11.3135,11.3135C197.6143,30.2363,196.5898,30.627,195.5664,30.627z M189.9092,15.3135
      l5.6572,5.6572l5.6562-5.6572l-5.6562-5.6572L189.9092,15.3135z"
    />
  </svg>
);
