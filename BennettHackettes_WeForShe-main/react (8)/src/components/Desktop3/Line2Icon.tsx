import { memo, SVGProps } from 'react';

const Line2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 52 35' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M49.5029 27.8486C49.5029 27.8486 41.286 32.5155 23.2505 23.577C5.21496 14.6386 5.974 5.66473e-06 5.974 5.66473e-06'
      stroke='url(#paint0_angular_2603_1257)'
      strokeWidth={14}
    />
    <defs>
      <radialGradient
        id='paint0_angular_2603_1257'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(10.4491 15.6784) rotate(-153.637) scale(40.3963 6.90744)'
      >
        <stop offset={0.282885} stopColor='#C8DA26' />
        <stop offset={0.43} stopColor='#519F40' />
      </radialGradient>
    </defs>
  </svg>
);

const Memo = memo(Line2Icon);
export { Memo as Line2Icon };
