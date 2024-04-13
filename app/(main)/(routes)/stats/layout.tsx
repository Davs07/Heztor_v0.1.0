import Sidebar from "../../_components/Sidebar";

const StatsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
      <div className="h-full flex ">
        <Sidebar />
        <main>{children}</main>
      </div>
  );
};

export default StatsLayout;
