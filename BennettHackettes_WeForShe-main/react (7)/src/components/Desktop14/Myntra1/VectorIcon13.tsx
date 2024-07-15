import { memo, SVGProps } from 'react';

const VectorIcon13 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 54' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1.5895 0.714877C4.0153 2.00598 3.41133 12.3348 0.975628 23.4679C1.85299 27.5398 2.96066 31.551 4.29254 35.4794C9.28276 50.1155 14.4413 54.7084 18.3721 53.1951H18.382C22.2831 51.65 23.4811 44.6018 18.5008 29.9658C13.9759 16.6844 5.69455 2.25997 1.5895 0.714877Z'
      fill='#F13AB1'
    />
  </svg>
);

const Memo = memo(VectorIcon13);
export { Memo as VectorIcon13 };
