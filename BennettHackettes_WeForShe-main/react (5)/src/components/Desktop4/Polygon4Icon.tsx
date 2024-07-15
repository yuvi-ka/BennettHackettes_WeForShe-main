import { memo, SVGProps } from 'react';

const Polygon4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 310 283' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M310 141.5L77.5 264.043V18.9574L310 141.5Z' fill='#FFD324' fillOpacity={0.82} />
  </svg>
);

const Memo = memo(Polygon4Icon);
export { Memo as Polygon4Icon };
