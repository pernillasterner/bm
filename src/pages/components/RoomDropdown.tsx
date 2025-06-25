import Button from "./Button";
import { useEffect, useState } from "react";

type MeetingRoom = {
  id: number;
  name: string;
  capacity: number;
}

type Props = {
  onSelect: (selectedIds: number[]) => void;
};


export default function RoomDropdown({ onSelect }: Props) {
  const [rooms, setRooms] = useState<MeetingRoom[]>([]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [open, setOpen] = useState(false);

  // Get data from api
  useEffect(() => {
    async function fetchRooms() {
      try {
        const res = await fetch("/api/rooms");
        if (!res.ok) throw new Error("Error fetching meeting rooms");
        const data = await res.json();
        setRooms(data); 
      } catch (error) {
        console.error("Something went wrong while fetching rooms:", error);
      }
    }
  
    fetchRooms(); // run function
  }, []);

  function toggleRoom(id: number) {
    const updated = selectedIds.includes(id)
    ? selectedIds.filter((r) => r !== id)
    : [...selectedIds, id];

    setSelectedIds(updated);
    onSelect(updated);
  }

  function clearSelection() {
    setSelectedIds([]);
    onSelect([]);
  }


  return (
    <div className="relative w-full max-w-xs my-4">
      <button
         type="button"
         onClick={() => setOpen((prev) => !prev)}
         className="w-fit border border-gray-300 rounded-lg py-2 px-4 shadow-sm flex items-center gap-4"
         aria-haspopup="listbox"
         aria-expanded={open}
      >
        {selectedIds.length === 0
        ? "Mötesrum"
        : selectedIds.length === 1
        ? "1 valt rum"
        : `${selectedIds.length} valda rum`}

      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke-width="1.5" 
        stroke="currentColor" 
        className={`ml-2 size-5 transform transition-transform duration-500 ease-in-out ${open ? "hidden" : "block"}`}
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>

      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" viewBox="0 0 24 24" 
        stroke-width="1.5" 
        stroke="currentColor" 
        className={`ml-2 size-5 transform transition-transform duration-500 ease-in-out ${open ? "block" : "hidden"}`}
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
      </svg>

      </button>
    
      {/* Meetingrooms */}
      {open && (
          <div className="absolute mt-2 py-4 w-full max-h-96 border border-gray-200 rounded-lg shadow z-10 flex flex-col gap-2 bg-white">
            <ul className="overflow-y-auto max-h-60 px-2">
              {rooms.map((room) => (
                <li key={room.id} className="px-2 py-2 hover:bg-gray-100 rounded">
                  <label className="flex items-center justify-between gap-2">
                    <span className="text-sm">
                      {room.name} ({room.capacity} personer)
                    </span>
                    <input 
                      type="checkbox"
                      checked={selectedIds.includes(room.id)}
                      onChange={() => toggleRoom(room.id)}
                      className="accent-teal-600"
                    />
                  </label>
                </li>
              ))}
            </ul>

            <div className="flex justify-between gap-2 px-4 pt-2">
              <Button ariaLabel="Välj rum" onClick={() => setOpen(false)} className="py-3">
                Välj
              </Button>

              <Button ariaLabel="Avmarkera" onClick={clearSelection} className="py-3">
                Avmarkera
              </Button>
            </div>
          </div>
        )}
      </div>
  )
}
