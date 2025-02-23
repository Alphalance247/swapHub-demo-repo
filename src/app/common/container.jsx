import Footer from "./footer";
import Header from "./header";

const Container = ({ children }) => {
  return (
    <div className="bg-[#F5F5F5]">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Container;
