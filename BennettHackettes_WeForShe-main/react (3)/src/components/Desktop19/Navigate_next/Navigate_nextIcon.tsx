import { memo, SVGProps } from 'react';

const Navigate_nextIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 8 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M4.6 6L0 1.4L1.4 0L7.4 6L1.4 12L0 10.6L4.6 6Z' fill='#1D1B20' />
  </svg>
);

const Memo = memo(Navigate_nextIcon);
export { Memo as Navigate_nextIcon };
