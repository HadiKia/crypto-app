import Header from "./Header";
import Footer from "./Footer";

function Layouts({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layouts;
