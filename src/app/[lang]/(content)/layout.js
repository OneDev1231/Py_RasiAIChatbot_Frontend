import Menu from "@/components/menu";

export default function DashboardLayout({ children }) {
        return (
                <>
                        <div className="flex flex-row w-screen">
                                <Menu />
                                <div className="bg-[#F3F4F8] w-full min-h-screen dark:bg-[#0F0F12]">
                                        <div className="flex flex-col min-h-screen">{children}</div>
                                </div>
                        </div>
                </>
        );
}
