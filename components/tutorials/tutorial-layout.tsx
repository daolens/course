function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-white overflow-hidden py-10 md:max-w-2xl">
      {children}
    </div>
  );
}

export default Layout;
