import { memo, SVGProps } from 'react';

const Ellipse10Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 336 330' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M336 164.955C336 255.806 260.784 329.455 168 329.455C75.216 329.455 -0.00012207 255.806 -0.00012207 164.955C-0.00012207 74.1045 75.216 0.455359 168 0.455359C260.784 0.455359 336 74.1045 336 164.955Z'
      fill='url(#paint0_linear_2603_1260)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_2603_1260'
        x1={146.521}
        y1={5.75103}
        x2={146.521}
        y2={334.751}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#DF6A20' />
        <stop offset={0.825} stopColor='#FFCC00' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Ellipse10Icon);
export { Memo as Ellipse10Icon };
