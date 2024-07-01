import Menu from "@/components/menu";

export default function DashboardLayout({ children }) {
        return (
                <>
                        <div className="flex flex-row w-screen">
                                <Menu />
                                {children}
                        </div>
                </>
        );
}
