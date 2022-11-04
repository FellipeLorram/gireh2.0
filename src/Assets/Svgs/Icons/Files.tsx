import { SVGAttributes } from "react";

export function Files(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-files"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#000"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M15 3v4a1 1 0 001 1h4" />
      <path d="M18 17h-7a2 2 0 01-2-2V5a2 2 0 012-2h4l5 5v7a2 2 0 01-2 2z" />
      <path d="M16 17v2a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2h2" />
    </svg>
  );
}
