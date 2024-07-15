import { memo, SVGProps } from 'react';

const VectorIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0.728217 0.19187C0.585627 0.136409 0.434276 0.111245 0.282661 0.117791C0.480418 0.125132 0.675163 0.171787 0.856932 0.255368C0.816213 0.229468 0.773074 0.208186 0.728217 0.19187Z'
      fill='#F15E22'
    />
  </svg>
);

const Memo = memo(VectorIcon4);
export { Memo as VectorIcon4 };
