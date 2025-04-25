import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <ScrollArea className="flex-grow">
        <main className="flex-grow">{children}</main>
      </ScrollArea>
      <Footer />
    </div>
  );
};

export default Layout;
