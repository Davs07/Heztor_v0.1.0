import Sidebar from "../../_components/Sidebar";

const TasksLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex ">
      <Sidebar />
      <main className="flex-1 w-full h-full flex flex-col justify-start items-center overflow-y-scroll ">
        {children}
      </main>
    </div>
  );
};

export default TasksLayout;
