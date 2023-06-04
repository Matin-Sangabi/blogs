import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div className="h-full min-h-screen bg-gray-200">
      <div className="flex  flex-col min-h-screen">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
