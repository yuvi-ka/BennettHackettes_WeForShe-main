import { memo, SVGProps } from 'react';

const Polygon10Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 310 283' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 141.5L232.5 18.9574V264.043L0 141.5Z' fill='#DF6A20' />
  </svg>
);

const Memo = memo(Polygon10Icon);
export { Memo as Polygon10Icon };
