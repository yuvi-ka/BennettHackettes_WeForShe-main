import { memo, SVGProps } from 'react';

const Polygon11Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 307 279' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M222.616 95.2245C258.308 113.952 258.308 165.048 222.616 183.775L149.981 221.887C116.688 239.355 76.75 215.209 76.75 177.611V101.389C76.75 63.7912 116.688 39.6446 149.981 57.1133L222.616 95.2245Z'
      fill='#FFCC00'
    />
  </svg>
);

const Memo = memo(Polygon11Icon);
export { Memo as Polygon11Icon };
