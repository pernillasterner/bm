import Button from "./Button";

export default function RoomDropdown() {
  return (
    <div className="relative w-full max-w-xs my-4">
      <h3 className="text-[color:var(--gray-850)]">Mötesplats</h3>

      <div className="flex justify-between gap-2 px-4 pt-2 border-t border-gray-200">
        <Button>Välj</Button>
        <Button className="bg-[var(--gray-600)]">Avmarkera</Button>
      </div>
    </div>
  )
}
