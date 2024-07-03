"use client";
import { useTheme } from "next-themes";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/chatComponenets/ui/popover";
import { SmileIcon } from "lucide-react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

export const EmojiPicker = ({ onChange }) => {
    const { theme } = useTheme();
    return (
        <Popover>
            <PopoverTrigger>
                <SmileIcon className="h-5 w-5 text-muted-foreground hover:text-foreground transition" />
            </PopoverTrigger>
            <PopoverContent className="w-full border-none">
                <Picker
                    emojiSize={18}
                    theme={theme}
                    data={data}
                    maxFrequentRows={1}
                    onEmojiSelect={(emoji) => onChange(emoji.native)}
                />
            </PopoverContent>
        </Popover>
    );
};
