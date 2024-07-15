import { memo, SVGProps } from 'react';

const VectorIcon9 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 17 54' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15.5132 53.2057C11.5901 51.6606 10.4142 44.5913 15.3847 29.9764C15.8788 28.5265 16.4026 27.0555 16.9856 25.6057C11.8767 12.5359 4.00094 -0.131748 0.739958 0.598467C0.975338 0.563996 1.21492 0.585679 1.44156 0.661963H1.45144V0.672546C3.97722 1.67791 3.43768 11.9644 1.01269 23.1293C1.90505 27.3211 3.04035 31.4494 4.41202 35.49C8.33508 47.0253 12.3668 52.3061 15.8057 53.2903C15.7052 53.2694 15.6061 53.2411 15.5092 53.2057'
      fill='#FD913C'
    />
  </svg>
);

const Memo = memo(VectorIcon9);
export { Memo as VectorIcon9 };
