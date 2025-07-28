import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" mx-auto flex flex-col min-h-screen items-center">
        <Header/>
        <main className="grow px-8 max-w-[1200px] w-full">
          {children}
        </main>
        <Footer/>
    </div>
  );
}
