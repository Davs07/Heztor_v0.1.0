import Sidebar from "../../_components/Sidebar";

const FinanceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex ">
      <Sidebar />
      <main className="flex-1 flex justify-center items-start p-6 overflow-y-scroll">
        {children}
      </main>
    </div>
  );
};

export default FinanceLayout;
