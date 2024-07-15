import { memo, SVGProps } from 'react';

const Polygon6Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 260 211' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M130 0L242.583 158.25H17.4167L130 0Z' fill='#F05524' fillOpacity={0.64} />
  </svg>
);

const Memo = memo(Polygon6Icon);
export { Memo as Polygon6Icon };
