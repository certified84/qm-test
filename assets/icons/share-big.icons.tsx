import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const ShareBig = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#3386CE"
      d="M106.5 130.166c-4.931 0-9.121-1.726-12.573-5.177-3.451-3.451-5.177-7.642-5.177-12.573 0-.69.05-1.406.148-2.148.099-.741.246-1.406.444-1.994L47.629 84.016a19.54 19.54 0 0 1-5.62 3.479c-2.072.84-4.24 1.258-6.509 1.254-4.93 0-9.122-1.725-12.573-5.177C19.476 80.121 17.75 75.93 17.75 71c0-4.93 1.726-9.121 5.177-12.573 3.451-3.451 7.642-5.177 12.573-5.177 2.268 0 4.438.42 6.508 1.26 2.071.84 3.945 1.998 5.621 3.474l41.713-24.259a10.865 10.865 0 0 1-.444-1.994 16.209 16.209 0 0 1-.148-2.147c0-4.93 1.726-9.122 5.177-12.573 3.451-3.452 7.642-5.177 12.573-5.177s9.122 1.725 12.573 5.177c3.451 3.451 5.177 7.642 5.177 12.573 0 4.93-1.726 9.121-5.177 12.573-3.451 3.45-7.642 5.177-12.573 5.177-2.268 0-4.438-.419-6.508-1.255A19.366 19.366 0 0 1 94.37 42.6L52.658 66.858c.198.591.346 1.258.444 2 .099.741.148 1.455.148 2.141 0 .69-.05 1.407-.148 2.148a10.72 10.72 0 0 1-.444 1.994l41.713 24.258a19.434 19.434 0 0 1 5.62-3.473 17.299 17.299 0 0 1 6.509-1.26c4.931 0 9.122 1.726 12.573 5.177 3.451 3.451 5.177 7.642 5.177 12.573s-1.726 9.122-5.177 12.573c-3.451 3.451-7.642 5.177-12.573 5.177Z"
    />
  </Svg>
);
export default ShareBig;
