"use client";

import { Plus } from "lucide-react";
import { useModal } from "@/hooks/use-modal-store";
import { ActionTooptip } from "@/components/action-tooltip";

export const NavigationAction = () => {
  const { onOpen } = useModal();
  return (
    <div>
      <ActionTooptip label={"Add a server"} side={"right"} align={"center"}>
        <button
          onClick={() => onOpen("createServer")}
          className={"group flex items-center"}
        >
          <div
            className={
              "flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-500 group-hover:bg-emerald-500"
            }
          >
            <Plus
              className={"group-hover:text-white transition text-emerald-400"}
              size={25}
            />
          </div>
        </button>
      </ActionTooptip>
    </div>
  );
};
