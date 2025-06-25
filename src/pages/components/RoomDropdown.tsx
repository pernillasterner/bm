import Button from "./Button";
import { useEffect, useState } from "react";

type MeetingRoom = {
  id: number;
  name: string;
  capacity: number;
}


export default function RoomDropdown() {
  const [rooms, setRooms] = useState<MeetingRoom[]>([]);

  // Get data from api
  useEffect(() => {
    async function fetchRooms() {
      try {
        const res = await fetch("/api/rooms");
        if (!res.ok) throw new Error("Fel vid hämtning");
        const data = await res.json();
        setRooms(data); 
      } catch (error) {
        console.error("Något gick fel:", error);
      }
    }
  
    fetchRooms(); // run function
  }, []);



  return (
    <div className="relative w-full max-w-xs my-4">
      <button
        type="button"
        className="w-fit border [border-color:var(--gray-400)] rounded-lg py-2 px-4 shadow-sm text-[color:var(--gray-850)]"
        aria-haspopup="listbox"
      >
        Mötesrum
      </button>
      

      <div className="flex justify-between gap-2 px-4 pt-2">
        <Button ariaLabel="Välj rum">Välj</Button>
        <Button ariaLabel="Avmarkera" className="bg-[var(--gray-600)]">Avmarkera</Button>
      </div>
    </div>
  )
}
