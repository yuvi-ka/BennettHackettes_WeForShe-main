import { memo, SVGProps } from 'react';

const Line3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 52 35' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M2.49687 27.8486C2.49687 27.8486 10.7138 32.5155 28.7493 23.577C46.7848 14.6386 46.0258 5.66473e-06 46.0258 5.66473e-06'
      stroke='url(#paint0_angular_2603_1258)'
      strokeWidth={14}
    />
    <defs>
      <radialGradient
        id='paint0_angular_2603_1258'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(41.5507 15.6784) rotate(-26.3632) scale(40.3963 6.90744)'
      >
        <stop offset={0.282885} stopColor='#C8DA26' />
        <stop offset={0.43} stopColor='#519F40' />
      </radialGradient>
    </defs>
  </svg>
);

const Memo = memo(Line3Icon);
export { Memo as Line3Icon };
