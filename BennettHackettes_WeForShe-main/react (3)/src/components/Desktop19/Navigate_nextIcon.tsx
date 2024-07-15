import { memo, SVGProps } from 'react';

const Navigate_nextIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 64 82' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M39.575 41L0.666664 9.56667L12.5083 0L63.2583 41L12.5083 82L0.666664 72.4333L39.575 41Z'
      stroke='#F1F1F1'
    />
  </svg>
);

const Memo = memo(Navigate_nextIcon);
export { Memo as Navigate_nextIcon };
