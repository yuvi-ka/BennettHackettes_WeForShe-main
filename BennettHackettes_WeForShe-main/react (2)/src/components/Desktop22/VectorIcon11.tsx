import { memo, SVGProps } from 'react';

const VectorIcon11 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 54' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15.2331 0.72546C11.5769 2.14356 4.65965 13.7212 -0.00453949 25.5951C0.568603 27.0449 1.10222 28.5159 1.59631 29.9658C6.56684 44.5913 5.38103 51.6606 1.46785 53.1845V53.1951C1.34926 53.2268 1.2208 53.2692 1.12198 53.3009C4.57072 52.3485 8.64201 47.0782 12.5552 35.4794C13.8941 31.5462 15.003 27.5276 15.8755 23.4468C13.4544 12.3877 12.8418 2.06948 15.2331 0.72546Z'
      fill='#FD913C'
    />
  </svg>
);

const Memo = memo(VectorIcon11);
export { Memo as VectorIcon11 };
