import Header from "./header";
import LayoutBreadCrumbs from "./breadcrumbs";


const Layout = ({ children }) => {

  return (
    <div className="h-full min-h-screen bg-gray-200">
      <div className="flex  flex-col min-h-screen">
        <Header />
        {/* breadcrumbs */}
        <LayoutBreadCrumbs />
        <div className="container mx-auto max-w-screen-xl py-4 p-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
