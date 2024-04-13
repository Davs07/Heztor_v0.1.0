function TittleSection({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-2xl font-medium text-center text-main-superdark dark:text-main-superlight">
      {children}
    </h3>
  );
}

export default TittleSection;
