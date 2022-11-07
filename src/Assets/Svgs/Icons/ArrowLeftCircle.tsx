import { SVGAttributes } from "react";

export function ArrowLeftCircle(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      width={44}
      height={44}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22 38.5c9.113 0 16.5-7.387 16.5-16.5S31.113 5.5 22 5.5 5.5 12.887 5.5 22 12.887 38.5 22 38.5zM22 14.667L14.666 22M29.333 22H14.667M22 29.333L14.666 22"
        stroke="#878792"
        strokeWidth={2.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
