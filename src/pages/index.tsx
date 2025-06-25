import Button from "./components/Button";
import Heading from "./components/Heading";
import Layout from "./components/Layout";

export default function Home() {
  return (
      <>
        <Layout>
          <Heading className="mt-16">Boka ett rum</Heading>
          
          <Button ariaLabel="Boka ett möte">Boka</Button>
        </Layout>
      </>
  );
}
