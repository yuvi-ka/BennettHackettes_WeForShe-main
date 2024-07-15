import { memo, SVGProps } from 'react';

const VectorIcon8 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 54' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M20.6283 0.65138H20.6382C20.6778 0.640797 20.7372 0.619632 20.7867 0.609049C16.8559 1.24402 8.14285 16.2293 3.45956 29.9764C-1.52076 44.6124 -0.322707 51.6712 3.58828 53.2057H3.59818C7.50917 54.719 12.6677 50.1367 17.6579 35.49C19.0045 31.5426 20.153 27.2672 21.064 23.1187C18.6382 11.9644 18.1035 1.66733 20.6283 0.65138Z'
      fill='#F13AB1'
    />
  </svg>
);

const Memo = memo(VectorIcon8);
export { Memo as VectorIcon8 };
