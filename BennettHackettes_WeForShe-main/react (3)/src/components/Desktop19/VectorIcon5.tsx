import { memo, SVGProps } from 'react';

const VectorIcon5 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 2 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0.610765 0.181288C0.562975 0.21659 0.509304 0.241738 0.45266 0.255367C0.676277 0.16232 0.914367 0.115633 1.15426 0.117791C0.970941 0.0957144 0.78533 0.1174 0.610765 0.181288Z'
      fill='#EC008B'
    />
  </svg>
);

const Memo = memo(VectorIcon5);
export { Memo as VectorIcon5 };
