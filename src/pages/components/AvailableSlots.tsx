import { useEffect, useState } from "react"

type AvailableSlot = {
  id: number;
  room: {
    name: string;
    capacity: number;
  };
  date: string;
  startTime: string;
  endTime: string;
}

export default function AvailableSlots() {
  const [slots, setSlots] = useState<AvailableSlot[]>([]);

  // Hämta slots som finns i databasen
  useEffect(() => {
    async function fetchSlots() {
      try {
        const res = await fetch("/api/slots");
        if (!res.ok) throw new Error("Fel vid hämtning");
        const data = await res.json();
        setSlots(data); 
      } catch (error) {
        console.error("Något gick fel:", error);
      }
    }
  
    fetchSlots(); // run function
  }, []);
 
  return (
    <div className="relative w-full max-w-xs my-4">
      <h1>Kalender</h1>
    </div>
  )
}
