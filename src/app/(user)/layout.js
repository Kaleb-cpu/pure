"use client";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import Footer from "@/components/Footer";
import { useCurrentRoute } from "@/hooks/useCurrentRoute";


export default function PageLayout({ children }) {
  const isHomePage = useCurrentRoute();

  return (
    <html lang="en">
      <body className="bg-primary">
      <div className="grid grid-cols-mainLayoutCol grid-rows-mainLayoutRow h-screen">
        <nav className="col-span-2">
          <NavBar />
        </nav>
        <aside>
          <SideBar />
        </aside>
        <section>
          {children}
        </section>
        <footer className="col-span-2">
          <Footer />
        </footer>
      </div>
      </body>
    </html>
  );
}
