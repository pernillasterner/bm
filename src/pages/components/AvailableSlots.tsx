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

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("sv-SE", {
    day: "numeric",
    month: "short",
  })
}

export default function AvailableSlots() {
  const [slots, setSlots] = useState<AvailableSlot[]>([]);
  const [groupedSlots, setGroupedSlots] = useState<Record<string, AvailableSlot[]>>({});

  // Get data from api
  useEffect(() => {
    async function fetchSlots() {
      try {
        const res = await fetch("/api/slots");
        if (!res.ok) throw new Error("Error fetching meeting slots");
        const data = await res.json();
        setSlots(data); 

        // Group all times per date
        const grouped: Record<string, AvailableSlot[]> = {};
        data.forEach((slot) => {
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
  }, []);

  const sortedDates = Object.keys(groupedSlots).sort();
 
  return (
    <div className="mt-4 py-6 flex flex-col h-full">    
      <div className="flex justify-between items-center gap-6 mb-6">
        <button aria-label="Föregående datum">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </button>
        <p className="text-[color:var(--gray-850)] text-sm font-medium">
          18 okt – 20 okt
        </p>
        <button aria-label="Nästa datum">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </button>
      </div>
      
      <div className="mt-6 border border-[color:var(--gray-400)] rounded-lg overflow-hidden h-full">
        <div className="grid grid-cols-3 divide-x divide-[color:var(--gray-300)] h-full">
          {sortedDates.map((dateStr) => (
            <div 
              key={dateStr}
              className="p-1"
            >
              <h3 className="font-medium text-md text-[color:var(--gray-850)] text-center py-2">
                {formatDate(dateStr)}
              </h3>

              <div className="flex flex-col gap-2">
                {groupedSlots[dateStr].map((slot) => (
                  <button
                    key={slot.id}
                    aria-label={`Boka ${slot.room.name}, kapacitet ${slot.room.capacity} personer, ${slot.startTime} till ${slot.endTime}`}
                    className="text-base border border-[#00695C] text-[#1C1B1F] rounded-md p-2 text-left text-xs hover:bg-[#E0F2F1] transition w-full">
                    <p className="text-sm">{slot.room.name} ({slot.room.capacity})</p>
                    <p className="text-sm">{slot.startTime} – {slot.endTime}</p>
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
