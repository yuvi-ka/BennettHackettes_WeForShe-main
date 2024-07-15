import { memo, SVGProps } from 'react';

const VectorIcon7 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 2 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0.936118 0.287117C0.886612 0.318865 0.837102 0.329448 0.777695 0.361196C1.00152 0.267262 1.24024 0.220542 1.48069 0.223619C1.29709 0.210825 1.11281 0.232312 0.936118 0.287117Z'
      fill='#EC008B'
    />
  </svg>
);

const Memo = memo(VectorIcon7);
export { Memo as VectorIcon7 };
