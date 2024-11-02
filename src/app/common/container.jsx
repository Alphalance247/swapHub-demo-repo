import Footer from "./footer";
import Header from "./header";

const Container = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Container;
