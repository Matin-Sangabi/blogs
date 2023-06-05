import Header from "./header";
import LayoutBreadCrumbs from "./breadcrumbs";


const Layout = ({ children }) => {

  return (
    <div className="h-full min-h-screen w-full">
      <div className="flex  flex-col min-h-screen">
        <Header />
        {/* breadcrumbs */}
        <LayoutBreadCrumbs />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
