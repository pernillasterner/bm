import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import Heading from "./components/Heading";

export default function Confirmation() {
  const [name, setName] = useState("");
  const [slotId, setSlotId] = useState<number | null>(null);

  useEffect(() => {
    const storedName = localStorage.getItem("bookingName");
    const storedSlot = localStorage.getItem("selectedSlotId");
    if (storedName) setName(storedName);
    if (storedSlot) setSlotId(Number(storedSlot));
  }, []);

  return (
    <Layout title="Bokning bekräftad">
      <Heading size="md">Bokning bekräftad</Heading>
      <p className="mt-4 text-sm text-gray-800">
        Tack {name}! Din bokning (slot ID {slotId}) är registrerad.
      </p>
    </Layout>
  );
}
