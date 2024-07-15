import { memo, SVGProps } from 'react';

const VectorIcon8 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 54' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M20.5818 0.65138H20.5917C20.6313 0.640797 20.6905 0.619632 20.74 0.609049C16.8169 1.24402 8.12094 16.2293 3.44686 29.9764C-1.52366 44.6124 -0.32797 51.6712 3.57533 53.2057H3.58521C7.48851 54.719 12.6369 50.1367 17.6173 35.49C18.9612 31.5426 20.1075 27.2672 21.0166 23.1187C18.5956 11.9644 18.062 1.66733 20.5818 0.65138Z'
      fill='#F13AB1'
    />
  </svg>
);

const Memo = memo(VectorIcon8);
export { Memo as VectorIcon8 };
