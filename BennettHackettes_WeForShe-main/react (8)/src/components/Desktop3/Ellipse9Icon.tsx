import { memo, SVGProps } from 'react';

const Ellipse9Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 234 230' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M234 115C234 178.513 181.617 230 117 230C52.3827 230 0 178.513 0 115C0 51.4873 52.3827 0 117 0C181.617 0 234 51.4873 234 115Z'
      fill='url(#paint0_linear_2603_1259)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_2603_1259'
        x1={129.203}
        y1={6.81683}
        x2={129.203}
        y2={236.817}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF9430' />
        <stop offset={0.75} stopColor='#FFCC00' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Ellipse9Icon);
export { Memo as Ellipse9Icon };
