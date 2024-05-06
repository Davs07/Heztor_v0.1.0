const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex ">
      <main className="flex-1 flex flex-col justify-start items-center overflow-y-scroll">
        {children}
      </main>
    </div>
  );
};

export default layout;
