import { useState } from "react";
import { useRouter } from "next/router";
import AvailableSlots from "./components/AvailableSlots";
import Button from "./components/Button";
import Heading from "./components/Heading";
import Layout from "./components/Layout";
import RoomDropdown from "./components/RoomDropdown";

export default function SelectTime() {
  const [selectedSlotId, setSelectedSlotId] = useState<number | null>(null);
  const [selectedRoomIds, setSelectedRoomIds] = useState<number[]>([]);
  const router = useRouter();

  function handleNext() {
    if (!selectedSlotId) return;
    localStorage.setItem("selectedSlotId", selectedSlotId.toString());
    router.push("/enter-name");
  }

  function handleRoomSelect(ids: number[]) {
    setSelectedRoomIds(ids);
  }

  return (
    <Layout title="Välj en tid">
      <Heading size="md">Välj en tid</Heading>

      <RoomDropdown onSelect={handleRoomSelect} />

      <AvailableSlots 
        onSelect={(id) => setSelectedSlotId(id)}
        selectedRoomIds={selectedRoomIds}
      />

      <Button 
        ariaLabel="Gå till nästa sida" 
        onClick={handleNext} 
        disabled={!selectedSlotId}
      >
          Nästa
      </Button>
    </Layout>
  )
}
