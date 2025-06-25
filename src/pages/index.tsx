import Heading from "./components/Heading";
import Layout from "./components/Layout";

export default function Home() {
  return (
      <>
        <Layout>
          {/* skapa en komponent */}
          <h1 className="text-7xl sm:text-[5rem] tracking-[0.03em] leading-[1]] mt-16">
            Boka ett rum
          </h1>
          <Heading>Boka ett rum</Heading>

          {/* 
          skapa en komponent
          länka till sidan "välj en tid" 
          */}
          <button className="w-full bg-black text-white py-4 rounded-2xl text-base font-medium mt-auto border-1 [border-color:var(--white-10)] hover:bg-neutral-800 transition-all duration-300 ease-in-out focus:outline focus:ring-2 focus:ring-black">
            Boka
          </button>
        </Layout>
      </>
  );
}
