import Button from "./components/Button";
import Heading from "./components/Heading";
import Layout from "./components/Layout";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
      <>
        <Layout>
          <Heading className="mt-6">Boka ett rum</Heading>
          
          <Button
            ariaLabel="Boka ett möte"
            onClick={() => router.push("/select-time")}
          >
            Boka
          </Button>
        </Layout>
      </>
  );
}
