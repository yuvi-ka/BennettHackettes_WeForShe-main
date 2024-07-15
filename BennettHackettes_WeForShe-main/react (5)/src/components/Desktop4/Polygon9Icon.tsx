import { memo, SVGProps } from 'react';

const Polygon9Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 260 211' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M130 211L17.4167 52.75H242.583L130 211Z' fill='#CE723E' />
  </svg>
);

const Memo = memo(Polygon9Icon);
export { Memo as Polygon9Icon };
