import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const TimerIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M10.25 0h3.5a.75.75 0 1 1 0 1.5h-1v1.278c2.07.152 4.04.948 5.636 2.276L19.72 3.72a.751.751 0 0 1 1.06 1.06l-1.315 1.316A9.959 9.959 0 0 1 22 12.75c0 5.523-4.477 10-10 10s-10-4.477-10-10a9.96 9.96 0 0 1 2.535-6.654L3.22 4.78a.751.751 0 0 1 1.06-1.06l1.335 1.334a9.958 9.958 0 0 1 5.635-2.276V1.5h-1a.75.75 0 0 1 0-1.5ZM12 21.25a8.5 8.5 0 1 0-.001-17 8.5 8.5 0 0 0 .001 17Zm4.03-12.53a.75.75 0 0 1 0 1.06l-2.381 2.382a1.75 1.75 0 1 1-1.06-1.06l2.38-2.382a.751.751 0 0 1 1.061 0Z"
    />
  </Svg>
);
export default TimerIcon;
