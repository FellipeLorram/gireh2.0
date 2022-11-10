import { SVGAttributes } from "react";

export function CirclePlus(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-circle-plus"
      width={44}
      height={44}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#2c3e50"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <circle cx={12} cy={12} r={9} />
      <path d="M9 12L15 12" />
      <path d="M12 9L12 15" />
    </svg>
  );
}
