import { SVGAttributes } from "react";

export function Bell(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-notification"
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
      <path d="M10 6H7a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-3" />
      <circle cx={17} cy={7} r={3} />
    </svg>
  );
}
