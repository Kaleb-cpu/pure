"use client";
import SideBar from "@/components/SideBar";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import { useCurrentRoute } from "@/hooks/useCurrentRoute";

export default function PageLayout({ children }) {
  const isHomePage = useCurrentRoute();

  return (
    <html lang="en">
      <body className="bg-primary">
        <div className="grid grid-cols-responsiveLayout lg:grid-cols-mainLayoutCol grid-rows-mainLayoutRow h-screen gap-10">
          <section className="lg:col-span-2 order-2 lg:order-1">
            <Logo />
          </section>
          <aside className="order-1">
            <SideBar />
          </aside>
          <section className="col-span-2 lg:col-span-1 order-3">
            {children}
          </section>
          <footer className="col-span-2 order-4">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
