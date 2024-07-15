import { memo, SVGProps } from 'react';

const VectorIcon11 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 54' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15.3419 0.72546C11.6785 2.14356 4.74763 13.7212 0.0742455 25.5951C0.648517 27.0449 1.18318 28.5159 1.67825 29.9658C6.65857 44.5913 5.47042 51.6606 1.54953 53.1845V53.1951C1.43072 53.2268 1.302 53.2692 1.20299 53.3009C4.65852 52.3485 8.73783 47.0782 12.6587 35.4794C14.0002 31.5462 15.1113 27.5276 15.9855 23.4468C13.5597 12.3877 12.9458 2.06948 15.3419 0.72546Z'
      fill='#FD913C'
    />
  </svg>
);

const Memo = memo(VectorIcon11);
export { Memo as VectorIcon11 };
