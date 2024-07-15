import { memo, SVGProps } from 'react';

const VectorIcon13 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 54' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1.47825 0.714877C3.89928 2.00598 3.2965 12.3348 0.865585 23.4679C1.74122 27.5398 2.84672 31.551 4.17598 35.4794C9.15639 50.1155 14.3048 54.7084 18.2278 53.1951H18.2377C22.1311 51.65 23.3268 44.6018 18.3563 29.9658C13.8403 16.6844 5.57523 2.25997 1.47825 0.714877Z'
      fill='#F13AB1'
    />
  </svg>
);

const Memo = memo(VectorIcon13);
export { Memo as VectorIcon13 };
