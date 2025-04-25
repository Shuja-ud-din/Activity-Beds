import Header from "../components/header";
import { Sidebar } from "../components/sidebar";

interface IProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: IProps) => {
  return (
    <>
      <div className="flex h-screen bg-[#28282a] text-white">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden ">
          <Header />
          {children}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
