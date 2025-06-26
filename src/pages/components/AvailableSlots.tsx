import { useEffect, useState } from "react"
import { cn } from "@/utils/cn";

type AvailableSlot = {
  id: number;
  room: {
    id: number;
    name: string;
    capacity: number;
  };
  date: string;
  startTime: string;
  endTime: string;
}

type Props = {
  onSelect: (id: number) => void;
  selectedRoomIds: number[];
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("sv-SE", {
    day: "numeric",
    month: "short",
  })
}

export default function AvailableSlots({ onSelect, selectedRoomIds }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [slots, setSlots] = useState<AvailableSlot[]>([]);
  const [groupedSlots, setGroupedSlots] = useState<Record<string, AvailableSlot[]>>({});
  const [selectedSlotId, setSelectedSlotId] = useState<number | null>(null);

  function handleSelect(id: number) {
    setSelectedSlotId(id);
    onSelect(id); // Skicka upp slotId till select-time
  }
  

  // Get data from api
  useEffect(() => {
    async function fetchSlots() {
      try {
        const res = await fetch("/api/slots");
        if (!res.ok) throw new Error("Error fetching meeting slots");
        const data = await res.json();
        setSlots(data);
        
        // Filtrera baserat på valda rum
        const filtered = data.filter((slot: AvailableSlot) =>
          selectedRoomIds.length === 0 || selectedRoomIds.includes(slot.room.id)
        );

        // Group all times per date
        const grouped: Record<string, AvailableSlot[]> = {};
        filtered.forEach((slot: AvailableSlot) => {
          const key = slot.date.split("T")[0]; // "2025-10-18"
          if (!grouped[key]) grouped[key] = [];
          grouped[key].push(slot);
        });
        setGroupedSlots(grouped);
      } catch (error) {
        console.error("Something went wrong while fetching slots:", error);
      }
    }
  
    fetchSlots(); // run function
  }, [selectedRoomIds]);


  const sortedDates = Object.keys(groupedSlots).sort();
 
  return (
    <div className="mt-4 py-6 flex flex-col h-full">    
      <div className="flex justify-between items-center gap-6 mb-6">
        <button aria-label="Föregående datum">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="size-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </button>
        <p className="text-[color:var(--gray-850)]">
          18 okt – 20 okt
        </p>
        <button aria-label="Nästa datum">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="size-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </button>
      </div>
      
      <div className="border border-[color:var(--gray-400)] rounded-lg overflow-hidden h-full">
        <div className="grid grid-cols-3 h-full">
          {sortedDates.map((dateStr, i) => (
            <div
              key={dateStr}
              className={cn(
                "h-full flex flex-col",
                i === 0 && "rounded-tl-lg",
                i === sortedDates.length - 1 && "rounded-tr-lg"
              )}
            >
              <h3
                className={cn(
                  "font-medium text-md text-[color:var(--gray-850)] text-center py-2 border-b border-[color:var(--gray-400)]",
                  i === 1 && "border-x border-[color:var(--gray-400)]"
                )}
              >
                {formatDate(dateStr)}
              </h3>

              <div
                className={cn(
                  "flex flex-col gap-2 p-1",
                  i === 1 && "border-x border-[color:var(--gray-400)] h-full"
                )}
              >
                {groupedSlots[dateStr].map((slot) => (
                 <button
                    key={slot.id}
                    onClick={() => handleSelect(slot.id)}
                    aria-label={`Boka ${slot.room.name}, kapacitet ${slot.room.capacity} personer, ${slot.startTime} till ${slot.endTime}`}
                    className={cn(
                      "text-sm border border-[#00695C] text-[#1C1B1F] rounded-md p-2 text-left hover:bg-[#E0F2F1] transition w-full",
                      selectedSlotId === slot.id && "bg-[#E0F2F1] border-[#004D40]"
                    )}
                  >
                    <p className="text-sm">{slot.room.name} ({slot.room.capacity})</p>
                    <p className="text-sm">{slot.startTime}–{slot.endTime}</p>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
