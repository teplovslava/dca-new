import { SVGProps } from "react";
import Icons from "../icons/sprite.svg";

interface IIcons extends SVGProps<SVGSVGElement> {
  color: string;
  width: number;
  height?: number;
  name: string;
}

function Icon({ color, name, width, height = width, ...props }: IIcons) {
  return (
    <svg {...props} fill={color} width={width} height={height}>
      <use href={`${Icons}#${name}`} />
    </svg>
  );
}

export default Icon;
