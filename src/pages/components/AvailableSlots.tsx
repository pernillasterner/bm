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

  // Get data from api
  useEffect(() => {
    async function fetchSlots() {
      try {
        const res = await fetch("/api/slots");
        if (!res.ok) throw new Error("Error fetching meeting slots");
        const data = await res.json();
        setSlots(data); 
      } catch (error) {
        console.error("Something went wrong while fetching slots:", error);
      }
    }
  
    fetchSlots(); // run function
  }, []);
 
  return (
    <div className="mt-4 border-2 border-red-300 h-full py-6">    
      <div className="flex justify-between items-center gap-6 mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        <p className="text-[color:var(--gray-850)] text-sm font-medium">
          18 okt – 20 okt
        </p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="border rounded-lg -3 bg-white shadow-sm">
          <h3 className="font-medium text-md text-[color:var(--gray-850)] text-center pb-2">
            18 okt
          </h3>
          <div className="flex flex-col gap-2">
            <button className="border border-[#00695C] text-[#1C1B1F] rounded-md px-2 py-1 text-left text-xs hover:bg-[#E0F2F1] transition w-full">
              <div className="font-medium">datum</div>
              <div>rum</div>
            </button>
            <button className="border border-[#00695C] text-[#1C1B1F] rounded-md px-2 py-1 text-left text-xs hover:bg-[#E0F2F1] transition w-full">
              <div className="font-medium">datum</div>
              <div>rum</div>
            </button>
            <button className="border border-[#00695C] text-[#1C1B1F] rounded-md px-2 py-1 text-left text-xs hover:bg-[#E0F2F1] transition w-full">
              <div className="font-medium">datum</div>
              <div>rum</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
