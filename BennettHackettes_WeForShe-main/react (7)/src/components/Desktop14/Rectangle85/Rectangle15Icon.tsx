import { memo, SVGProps } from 'react';

const Rectangle15Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1526 219' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H1526V219H0V0Z' fill='url(#paint0_linear_2603_1052)' />
    <defs>
      <linearGradient
        id='paint0_linear_2603_1052'
        x1={763.001}
        y1={0.00000554189}
        x2={763.001}
        y2={219}
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0.366614} stopColor='#50A7C2' />
        <stop offset={1} stopColor='white' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Rectangle15Icon);
export { Memo as Rectangle15Icon };
