import Sidebar from "../../_components/Sidebar";

const NotesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
      <div className="h-full flex ">
        <Sidebar />
        <main className="w-full">{children}</main>
      </div>
  );
};

export default NotesLayout;
