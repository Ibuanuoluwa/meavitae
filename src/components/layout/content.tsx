import { ReactNode } from "react";
import Navbar from "./header";
import Footer from "./footer";

type layoutProp = {
  children: ReactNode;
};

export function Layout({ children }: layoutProp) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
