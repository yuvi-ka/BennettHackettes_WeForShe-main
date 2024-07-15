import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 2 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1.07461 0.488037H1.06471C1.0186 0.517328 0.968489 0.53875 0.916195 0.551533C1.14541 0.466462 1.38645 0.423523 1.62908 0.424539C1.44221 0.395347 1.25146 0.417192 1.07461 0.488037Z'
      fill='#EC008B'
    />
  </svg>
);

const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
