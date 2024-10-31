"use client";
import Video from "@/components/Video"
import useRoomHandler from "@/hooks/useRoomHandler";

const Room = ({ id }: { id: string }) => {
  const {
    micActive,
    cameraActive,
    toggleMic,
    toggleCamera,
    leaveRoom,
    userVideoRef,
    peerVideoRef,
  } = useRoomHandler(id);

  return (
    <>
    <section className="flex flex-row gap-4">
      <Video ref={userVideoRef} muted={true} />
      <Video ref={peerVideoRef} />
    </section>
    <div className="flex space-x-4">
      <a onClick={toggleMic} className="px-4 py-2 rounded-lg">
        {micActive ? "Mute Mic" : "Unmute Mic"}
      </a>
      <a
        onClick={leaveRoom}
        className="px-4 py-2 rounded-lg"
      >
        Leave
      </a>
      <a onClick={toggleCamera} className="px-4 py-2 rounded-lg">
        {cameraActive ? "Stop Camera" : "Start Camera"}
      </a>
    </div>
    </>
  )
}

export default Room;
