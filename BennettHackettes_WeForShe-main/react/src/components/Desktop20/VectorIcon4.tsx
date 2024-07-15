import { memo, SVGProps } from 'react';

const VectorIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0.608828 0.19187C0.466519 0.136409 0.315466 0.111245 0.16415 0.117791C0.361517 0.125132 0.555879 0.171787 0.737289 0.255367C0.696651 0.229468 0.653597 0.208186 0.608828 0.19187Z'
      fill='#F15E22'
    />
  </svg>
);

const Memo = memo(VectorIcon4);
export { Memo as VectorIcon4 };
