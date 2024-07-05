"use client";

import Link from "next/link";
import { MoreHorizontal, SquarePen } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/chatComponenets/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/chatComponenets/ui/tooltip";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Message } from "@/data";
import { Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";

export function Sidebar({ links, isCollapsed, isMobile, setIsTest }) {
  return (
    <div className="flex flex-col justify-between h-full p-2">
      <div
        data-collapsed={isCollapsed}
        className="relative group flex flex-col h-full gap-4 data-[collapsed=true]:p-2"
      >
        {!isCollapsed && (
          <div className="flex justify-between p-2 items-center">
            <div className="flex gap-2 items-center text-2xl">
              <p className="font-medium">Chats</p>
              <span className="dark:text-zinc-300 text-slate-600">
                ({links.length})
              </span>
            </div>

            <div>
              <Link
                href="#"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "h-9 w-9",
                )}
              >
                <MoreHorizontal size={20} />
              </Link>

              <Link
                href="#"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "h-9 w-9",
                )}
              >
                <SquarePen size={20} />
              </Link>
            </div>
          </div>
        )}
        <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
          {links.map((link, index) =>
            isCollapsed ? (
              <TooltipProvider key={index}>
                <Tooltip key={index} delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Link
                      href="#"
                      className={cn(
                        buttonVariants({ variant: link.variant, size: "icon" }),
                        "h-11 w-11 md:h-16 md:w-16",
                        link.variant === "grey" &&
                        "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white",
                      )}
                    >
                      <Avatar className="flex justify-center items-center">
                        <AvatarImage
                          src={link.avatar}
                          alt={link.avatar}
                          width={6}
                          height={6}
                          className="w-10 h-10 "
                        />
                      </Avatar>{" "}
                      <span className="sr-only">{link.name}</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className="flex items-center gap-4"
                  >
                    {link.name}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : (
              <Link
                key={index}
                href="#"
                className={cn(
                  buttonVariants({ variant: link.variant, size: "xl" }),
                  link.variant === "grey" &&
                  "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white shrink bg-[#F3F5F6] dark:bg-darkbg",
                  "justify-start gap-4",
                )}
              >
                <Avatar className="flex justify-center items-center">
                  <AvatarImage
                    // src={link.avatar}
                    src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
                    alt={link.avatar}
                    width={6}
                    height={6}
                    className="w-10 h-10 "
                  />
                </Avatar>
                <div className="flex flex-col max-w-28">
                  <span>{link.name}</span>
                  {link.messages.length > 0 && (
                    <span className="text-xs truncate text-gray-500 ">
                      {
                        link.messages[link.messages.length - 1].name.split(
                          " ",
                        )[0]
                      }
                      : {link.messages[link.messages.length - 1].message}
                    </span>
                  )}
                </div>
              </Link>
            ),
          )}
        </nav>
      </div>
      <div className="relative self-center group">
        <Icon
          className="absolute opacity-0 top-[-10px] left-5 group-hover:top-[-50px] group-hover:animate-bounce group-hover:opacity-100 transition-all duration-300 ease-in-out"
          icon="noto:test-tube"
          width="48"
          height="48"
        />
        <Icon
          className="absolute right-5 top-[-10px] group-hover:top-[-50px] opacity-0 group-hover:animate-bounce group-hover:opacity-100 transition-all duration-300 ease-in-out"
          icon="fluent-emoji:robot"
          width="48"
          height="48"
        />
        <Button
          radius="full"
          className="bg-gradient-to-tr from-[#5046E5] to-purple-500 text-white shadow-lg mb-5 px-10 py-3"
          onClick={() => setIsTest(true)}
        >
          Test it yourself!
        </Button>
      </div>
    </div>
  );
}
