import { memo, SVGProps } from 'react';

const Ellipse12Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 336 329' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M336 164.5C336 255.351 260.784 329 168 329C75.2162 329 0 255.351 0 164.5C0 73.6492 75.2162 0 168 0C260.784 0 336 73.6492 336 164.5Z'
      fill='url(#paint0_linear_2603_1261)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_2603_1261'
        x1={185.522}
        y1={9.75103}
        x2={185.522}
        y2={338.751}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#DF6A20' />
        <stop offset={0.825} stopColor='#FFCC00' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Ellipse12Icon);
export { Memo as Ellipse12Icon };
