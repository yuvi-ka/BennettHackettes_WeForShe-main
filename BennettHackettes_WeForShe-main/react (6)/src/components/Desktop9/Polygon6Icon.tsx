import { memo, SVGProps } from 'react';

const Polygon6Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 378 301' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M148.52 55.8306C168.484 28.2967 209.516 28.2967 229.48 55.8306L295.147 146.4C319.114 179.457 295.498 225.75 254.667 225.75H123.333C82.502 225.75 58.8858 179.457 82.8532 146.4L148.52 55.8306Z'
      fill='#F05524'
      fillOpacity={0.64}
    />
  </svg>
);

const Memo = memo(Polygon6Icon);
export { Memo as Polygon6Icon };
