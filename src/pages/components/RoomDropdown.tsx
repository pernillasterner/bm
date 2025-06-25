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
      <h3 className="text-[color:var(--gray-850)]">Mötesplats</h3>

      <ul className="space-y-2">
        {rooms.map((room) => (
          <li key={room.id} className="text-sm text-gray-800">
            {room.name} ({room.id} personer)
          </li>
        ))}
      </ul>

      <div className="flex justify-between gap-2 px-4 pt-2 border-t border-gray-200">
        <Button>Välj</Button>
        <Button className="bg-[var(--gray-600)]">Avmarkera</Button>
      </div>
    </div>
  )
}
