import React, { ForwardedRef } from "react";
import { Card, CardContent } from "@/components/ui/Card";

function Video(
  props: { muted?: boolean },
  ref: ForwardedRef<HTMLVideoElement>
) {
  return (
    <Card className="flex justify-center items-center shadow-md rounded-full h-[240px] sm:w-[300px] sm:h-[300px]">
      <CardContent className="flex justify-center items-center p-4">
        <video
          className="w-full object-cover aspect-square rounded-full max-h-[290px] sm:max-h-[480px] sm:max-w-[500px]"
          autoPlay
          ref={ref}
          muted={props.muted}
        />
      </CardContent>
    </Card>
  );
}

const ForwardedVideo = React.forwardRef(Video);

export default ForwardedVideo;
