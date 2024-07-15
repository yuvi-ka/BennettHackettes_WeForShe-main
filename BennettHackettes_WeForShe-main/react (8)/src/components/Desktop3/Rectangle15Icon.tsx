import { memo, SVGProps } from 'react';

const Rectangle15Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1504 919' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H1504V919H0V0Z' fill='url(#paint0_linear_2603_1234)' />
    <defs>
      <linearGradient
        id='paint0_linear_2603_1234'
        x1={752.001}
        y1={0.0000232557}
        x2={752.001}
        y2={919}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#F6C912' stopOpacity={0.71} />
        <stop offset={1} stopColor='white' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Rectangle15Icon);
export { Memo as Rectangle15Icon };
