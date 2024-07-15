import { memo, SVGProps } from 'react';

const Ellipse9Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 234 230' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M234 115C234 178.513 181.617 230 117 230C52.3827 230 0 178.513 0 115C0 51.4873 52.3827 0 117 0C181.617 0 234 51.4873 234 115Z'
      fill='url(#paint0_linear_2603_1263)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_2603_1263'
        x1={130.966}
        y1={26.8168}
        x2={130.966}
        y2={256.817}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF9430' />
        <stop offset={0.75} stopColor='#FFCC00' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Ellipse9Icon2);
export { Memo as Ellipse9Icon2 };
