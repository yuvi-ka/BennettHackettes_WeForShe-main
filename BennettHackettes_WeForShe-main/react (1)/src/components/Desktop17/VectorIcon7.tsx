import { memo, SVGProps } from 'react';

const VectorIcon7 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 2 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0.818288 0.287117C0.768879 0.318865 0.719466 0.329448 0.660175 0.361197C0.883558 0.267262 1.12182 0.220542 1.36179 0.223619C1.17855 0.210825 0.994636 0.232312 0.818288 0.287117Z'
      fill='#EC008B'
    />
  </svg>
);

const Memo = memo(VectorIcon7);
export { Memo as VectorIcon7 };
