import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const StoreIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke="#F9F9F9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.714}
      clipPath="url(#a)"
    >
      <Path d="M2.358 13.357v7.072a.786.786 0 0 0 .785.785h15.715a.785.785 0 0 0 .785-.785v-7.072m-7.071 0v7.857m-10.214-5.5h10.214M.786 6.286l2.357-5.5h15.715l2.357 5.5H.786Zm0 0v1.571A3.143 3.143 0 0 0 3.93 11h.44a3.143 3.143 0 0 0 3.143-3.143V6.286" />
      <Path d="M14.536 6.286v1.571m0 0A3.143 3.143 0 0 1 11.393 11h-.785a3.143 3.143 0 0 1-3.143-3.143V6.286m7.071 1.571A3.143 3.143 0 0 0 17.68 11h.393a3.143 3.143 0 0 0 3.143-3.143V6.286" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h22v22H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default StoreIcon;
