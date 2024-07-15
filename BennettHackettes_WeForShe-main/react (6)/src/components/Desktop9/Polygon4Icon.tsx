import { memo, SVGProps } from 'react';

const Polygon4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 351 289' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M256.005 99.3426C294.05 117.428 294.05 171.572 256.005 189.657L159.216 235.668C126.039 251.439 87.75 227.246 87.75 190.51V98.4896C87.75 61.7541 126.039 37.5606 159.216 53.3322L256.005 99.3426Z'
      fill='#FFD324'
      fillOpacity={0.82}
    />
  </svg>
);

const Memo = memo(Polygon4Icon);
export { Memo as Polygon4Icon };
