import Menu from "@/components/menu";

export default function DashboardLayout({ children }) {
        return (
                <>
                        <div className="flex flex-row">
                                <Menu />
                                <div className="bg-[#F3F4F8] w-full min-h-screen dark:bg-[#0F0F12]">
                                        {children}
                                </div>
                        </div>
                </>
        );
}
