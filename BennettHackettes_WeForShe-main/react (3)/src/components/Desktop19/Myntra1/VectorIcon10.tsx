import { memo, SVGProps } from 'react';

const VectorIcon10 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 6 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3.48971 0.672546H3.47981C3.26266 0.59774 3.03257 0.57604 2.80652 0.609049C2.73721 0.619632 2.70751 0.640797 2.6481 0.65138H2.6382C0.113387 1.66733 0.648053 11.9644 3.06395 23.1187C5.46995 11.9644 6.01452 1.6885 3.48971 0.672546Z'
      fill='#F05524'
    />
  </svg>
);

const Memo = memo(VectorIcon10);
export { Memo as VectorIcon10 };
