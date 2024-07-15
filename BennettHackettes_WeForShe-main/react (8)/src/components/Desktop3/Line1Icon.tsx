import { memo, SVGProps } from 'react';

const Line1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 321 54' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.395945 2.35116C0.395945 2.35116 79.1179 51.826 158.896 52.4728C238.674 53.1197 320.625 2.59629 320.625 2.59629'
      stroke='url(#paint0_angular_2603_1256)'
      strokeWidth={14}
    />
    <defs>
      <radialGradient
        id='paint0_angular_2603_1256'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(160.239 35.8776) rotate(0.46455) scale(160.11 34.5806)'
      >
        <stop offset={0.282885} stopColor='#C8DA26' />
        <stop offset={0.43} stopColor='#519F40' />
      </radialGradient>
    </defs>
  </svg>
);

const Memo = memo(Line1Icon);
export { Memo as Line1Icon };
