"use client";
import React, { useEffect, useRef, useState } from "react";
import { Info } from "lucide-react";
import { useBotDispatch, useBotSelector } from "@/lib/hooks/rtk_hooks";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
import { ChatLayout } from "@/chatComponenets/chat/chat-layout";
import { Button as Button2 } from "@nextui-org/react";
import withAuth from "@/services/auth/hoc";
import {
  existing_chatbot_upsert_file,
  existing_chatbot_upsert_text,
} from "@/services/chatbot/upsert";
import {
  deleteUpsertedFile,
  selectChatBot,
  setSlice,
  updateChatbot,
} from "@/lib/features/dashboardSlice";
import { getChatbots } from "@/services/chatbot/get-chatbots";
import toast from "react-hot-toast";
import { useDisclosure, Select, SelectItem, Input } from "@nextui-org/react";
import Popup from "@/components/Popups";
import LogedInNav from "@/components/logedInNav";
import { Icon } from "@iconify/react";

const Dashboard = () => {
  const { selectedChatbot, chatbots } = useBotSelector(
    (state) => state.dashboard,
  );

  const dispatch = useBotDispatch();

  const handleSelect = (item) => {
    if (item.id === selectedChatbot?.id) {
      dispatch(selectChatBot(null));
      return;
    }
    dispatch(selectChatBot(item));
  };

  const router = useRouter();
  const [status, setStatus] = useState("");
  const [text, setText] = useState("");
  const [prompt, setPrompt] = useState("");
  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getChatbots();
      dispatch(setSlice(response));
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (selectChatBot) {
      setText(selectedChatbot?.text);
      setPrompt(selectedChatbot?.prompt);
    }
  }, [selectedChatbot]);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (!file) return;

    console.log(file.name);
    // setUploading(true);
    setStatus("Uploading...");
    try {
      const response = await existing_chatbot_upsert_file(
        selectedChatbot.name,
        file,
      );
      console.log(response);
      if (response == 200) {
        console.log(file.name);
        dispatch(
          updateChatbot({
            id: selectedChatbot?.id,
            newFile: file.name,
            text: null,
          }),
        );
        setStatus("File uploaded successfully!");
      } else {
        setStatus("Error uploading file");
      }
    } catch (error) {
      console.log(error);
      setStatus("Error uploading file!");
    } finally {
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleTextUpsert = async () => {
    try {
      const response = await existing_chatbot_upsert_text(
        selectedChatbot.name,
        text,
      );
      console.log(response);
      if (response == 200) {
        dispatch(updateChatbot({ id: selectedChatbot?.id, text: text }));
        setStatus("Text upserted successfully!");
      } else {
        setStatus("Error upserting file");
      }
    } catch (error) {
      console.log(error);
      setStatus("Request error");
    }
  };
  const handleDeleteUploadedFile = async (item) => {
    console.log(item);
    try {
      const response = await existing_chatbot_upsert_file(
        selectedChatbot.name,
        file,
      );
      console.log(response);
      if (response == 200) {
        dispatch(
          deleteUpsertedFile({ id: selectChatBot?.id, deletedFile: item }),
        );
        toast.success("File deleted successfully!");
      } else {
        toast.error("Didn't deleted properly.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Request error!");
    }
  };

  const handleTestChattingClick = () => {
    const chatbotName = selectedChatbot.name;
    router.push(`/test_chatting/?variable=${chatbotName}`);
  };
  const { isOpen, onOpen, onOpenChange } = useDisclosure({
    defaultOpen: false,
  });

  const [rightOpen, setRightOpen] = useState(false);
  const cookies = useCookies();

  const layout = cookies.get("react-resizable-panels:layout");
  const defaultLayout = layout ? JSON.parse(layout) : undefined;
  return (
    <>
      <LogedInNav>
        <div class="flex justify-between w-full">
          <Input
            isClearable
            radius="lg"
            className="w-96"
            classNames={{
              label: "text-black/50 dark:text-white/90",
              input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-xl",
                "bg-default-200/50",
                "dark:bg-default/60",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "dark:hover:bg-default/70",
                "group-data-[focus=true]:bg-default-200/50",
                "dark:group-data-[focus=true]:bg-default/60",
                "!cursor-text",
              ],
            }}
            placeholder="Type to search..."
            startContent={
              <Icon
                icon="fe:search"
                className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0"
              />
            }
          />
          <div className="flex gap-5 w-[500px]">
            <Select
              variant="bordered"
              name="company-industry"
              placeholder="Select an Agent"
              className="max-w-xs"
              isRequired
            >
              {chatbots.map((choice) => (
                <SelectItem
                  key={choice.key}
                  onClick={() => handleSelect(choice)}
                >
                  {choice.name}
                </SelectItem>
              ))}
            </Select>
            <Button2
              color="primary"
              endContent={<Icon icon="material-symbols:add" />}
              onClick={onOpen}
            >
              Add Agent
            </Button2>
          </div>
        </div>
      </LogedInNav>
      <div className="w-full">
        <Popup isFirst={isOpen} onFirstChange={onOpenChange} />
        <div className="flex-1 flex flex-row min-h-[calc(100vh-68px)]">
          <div className="w-full shadow-lg flex flex-col justify-between overflow-y-auto max-h-[calc(100vh-68px)] relative">
            {/* here comes the shitty part */}

            <div
              className="h-9 w-9 dark:bg-muted dark:text-muted-foreground active:scale-90 dark:hover:bg-muted dark:hover:text-white absolute top-6 right-4 hover:cursor-pointer"
              onClick={() => setRightOpen(!rightOpen)}
            >
              <Info size={20} className="text-muted-foreground" />
            </div>

            <ChatLayout defaultLayout={defaultLayout} navCollapsedSize={8} />
          </div>
          <div
            className={`${rightOpen ? "w-1/5 px-2" : "w-0 px-0"} flex transition-all duration-300 flex-col justify-start items-stretch gap-2  overflow-y-auto bg-white dark:bg-transparent
`}
          >
            <div
              className={`${rightOpen ? "block" : "hidden"} flex flex-col gap-2 items-center justify-center text-xl mt-5`}
            >
              Session Details
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(Dashboard);
