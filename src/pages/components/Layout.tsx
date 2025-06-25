import { Roboto } from "next/font/google";
import Head from "next/head";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

export default function Layout({children, title = "Boka ett möte"}: { children: React.ReactNode, title?: string; }) {
  return (
    <>
    <Head>
      <title>{title}</title>
      <meta name="description" content="Boka ett möte" />
    </Head>
      <div className={`${roboto.className} font-sans flex items-center justify-center p-2`}>
        <main className="border-red-500 border-2 w-full max-w-[393px] max-h-[852px] h-[100svh] flex flex-col pt-16 px-6">
          {children}
        </main>
      </div>
    </>
  );
}