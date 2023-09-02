import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type ReactIconProps = SVGProps<SVGSVGElement> & {
  size?: string;
};

