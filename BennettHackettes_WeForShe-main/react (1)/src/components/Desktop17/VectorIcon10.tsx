import { memo, SVGProps } from 'react';

const VectorIcon10 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 6 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3.44156 0.672546H3.43168C3.21496 0.59774 2.98532 0.57604 2.75972 0.609049C2.69055 0.619632 2.6609 0.640797 2.60161 0.65138H2.59173C0.0718799 1.66733 0.605494 11.9644 3.01665 23.1187C5.41792 11.9644 5.96141 1.6885 3.44156 0.672546Z'
      fill='#F05524'
    />
  </svg>
);

const Memo = memo(VectorIcon10);
export { Memo as VectorIcon10 };
