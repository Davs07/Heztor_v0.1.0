import Sidebar from "../../_components/Sidebar";

const HabitsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex ">
      <Sidebar />
      <main className="flex-1 flex flex-col justify-start items-center overflow-y-scroll">
        {children}
      </main>
    </div>
  );
};

export default HabitsLayout;
