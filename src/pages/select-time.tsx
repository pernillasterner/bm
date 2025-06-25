import Heading from "./components/Heading";
import Layout from "./components/Layout";
import RoomDropdown from "./components/RoomDropdown";

export default function SelectTime() {
  return (
    <Layout title="Välj en tid">
      <Heading size="md">Välj en tid</Heading>

      <RoomDropdown />
    </Layout>
  )
}