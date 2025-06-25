import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "./components/Layout";
import Heading from "./components/Heading";
import Button from "./components/Button";

export default function EnterName() {
  const [slotId, setSlotId] = useState<number | null>(null);
  const [name, setName] = useState("");
  const router = useRouter();

  // Läs slotId från localStorage
  useEffect(() => {
    const stored = localStorage.getItem("selectedSlotId");
    if (stored) {
      setSlotId(Number(stored));
    }
  }, []);

  // Hantera nästa steg
  function handleNext() {
    if (!slotId || !name) return;

    // Spara bokning i localStorage (eller skicka till API)
    localStorage.setItem("bookingName", name);

    // Navigera vidare till bekräftelse
    router.push("/confirmation");
  }

  return (
    <Layout title="Vem bokar?">
      <Heading size="md">Vem bokar?</Heading>

      <div className="mt-6">
        <label htmlFor="">Förnamn och efternamn
          <input
            type="text"
            placeholder="Skriv ditt fullständiga namn här"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full mb-4"
          />
        </label>
      </div>

      <Button
        ariaLabel="Bekräfta bokning"
        onClick={handleNext}
        disabled={!name}
      >
        Nästa
      </Button>
    </Layout>
  );
}
