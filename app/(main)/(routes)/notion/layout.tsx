import Sidebar from "../../_components/Sidebar";

const NotesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
      <div className="h-full flex ">
        <Sidebar />
        <main>{children}</main>
      </div>
  );
};

export default NotesLayout;
