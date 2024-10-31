import PageHolder from "@/components/PageHolder";
import RoomComponent from "@/components/Room";

const Room = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  return (
    <PageHolder>
      <h1>Room {id}</h1>
      <RoomComponent id={id} />
    </PageHolder>
  )
}

export default Room;
