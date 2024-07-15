import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 2 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0.966338 0.488037H0.956458C0.910433 0.517328 0.860423 0.53875 0.808231 0.551533C1.03699 0.466462 1.27756 0.423523 1.51972 0.424539C1.33321 0.395347 1.14284 0.417192 0.966338 0.488037Z'
      fill='#EC008B'
    />
  </svg>
);

const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
