import { memo, SVGProps } from 'react';

const Ellipse11Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 256 262' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M256 131C256 203.349 198.692 262 128 262C57.3075 262 0 203.349 0 131C0 58.6507 57.3075 0 128 0C198.692 0 256 58.6507 256 131Z'
      fill='url(#paint0_linear_2603_1262)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_2603_1262'
        x1={141.35}
        y1={7.76526}
        x2={141.35}
        y2={269.765}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF9430' />
        <stop offset={0.75} stopColor='#FFCC00' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Ellipse11Icon);
export { Memo as Ellipse11Icon };
