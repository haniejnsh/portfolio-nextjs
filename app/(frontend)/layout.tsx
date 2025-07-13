import Header from "@/components/Header";

export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="px-4 py-6 max-w-[1400px] mx-auto">
        <Header/>
        {children}
    </div>
  );
}
