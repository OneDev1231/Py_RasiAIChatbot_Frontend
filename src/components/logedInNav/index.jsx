import { usePathname } from "next/navigation";

export default function LogedInNav({ children, fixed }) {
  let pathName = usePathname().slice(1).split("/")[1];
  pathName = pathName[0]?.toUpperCase() + pathName.slice(1);
  return (
    <>
      {fixed && <div className="h-[68px] dark:bg-[#0F0F12]"></div>}
      <div className={`${fixed ? "fixed w-full" : ""} z-50 h-[68px]`}>
        <div className="flex items-center dark:bg-darkbg bg-white h-full shadow-xl">
          <span className="font-bold text-xl ml-5">{pathName}</span>
          <div className="flex-1 flex items-center justify-between ml-5">
            {children}
          </div>
        </div>
        <hr className="border-t-[1px] border-[#E5E7EB] dark:border-[#3E3E3E]" />
      </div>
    </>
  );
}
