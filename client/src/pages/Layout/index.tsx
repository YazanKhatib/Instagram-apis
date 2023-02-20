import { Footer } from "./footer";
import { Header } from "./header";

export const Layout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
