const Layout = ({ children }) => {
  return (
    <div className="max-w-[1280px] py-24 px-6 mx-auto max-lg:px-4 max-lg:py-16 max-md:px-4 max-md:py-12">
      {children}
    </div>
  );
};

export default Layout;
