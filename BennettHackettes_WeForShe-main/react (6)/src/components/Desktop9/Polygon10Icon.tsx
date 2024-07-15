import { memo, SVGProps } from 'react';

const Polygon10Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 357 312' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M88.4693 200.639C51.8345 182.154 51.8345 129.846 88.4692 111.361L195.226 57.4938C228.481 40.7139 267.75 64.8842 267.75 102.133V209.867C267.75 247.116 228.481 271.286 195.226 254.506L88.4693 200.639Z'
      fill='#DF6A20'
    />
  </svg>
);

const Memo = memo(Polygon10Icon);
export { Memo as Polygon10Icon };
