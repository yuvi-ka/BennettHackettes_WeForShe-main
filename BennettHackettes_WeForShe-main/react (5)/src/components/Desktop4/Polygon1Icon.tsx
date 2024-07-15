import { memo, SVGProps } from 'react';

const Polygon1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 283 310' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M141.5 0L264.043 232.5H18.9574L141.5 0Z' fill='#CD5858' fillOpacity={0.68} />
  </svg>
);

const Memo = memo(Polygon1Icon);
export { Memo as Polygon1Icon };
