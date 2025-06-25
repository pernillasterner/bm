import AvailableSlots from "./components/AvailableSlots";
import Button from "./components/Button";
import Heading from "./components/Heading";
import Layout from "./components/Layout";
import RoomDropdown from "./components/RoomDropdown";

export default function SelectTime() {

  function handleRoomSelect(ids: number[]) {
    console.log("valda rum", ids);

    // spara i db eller localstorage
  }

  return (
    <Layout title="Välj en tid">
      <Heading size="md">Välj en tid</Heading>

      <RoomDropdown onSelect={handleRoomSelect} />

      {/* Höger/Vänster pilknappar för att bläddra bland datum  */}
      {/* Visning av datumspann (ex. 18 okt – 20 okt) */}


      {/* Kalender med tre kolumner (en per dag) */}
      <AvailableSlots />

      {/* Knapp till nästa vy: "Nästa" */}
      <Button ariaLabel="Gå till nästa sida">Nästa</Button>
    </Layout>
  )
}

