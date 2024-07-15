import { memo, SVGProps } from 'react';

const VectorIcon9 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 54' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15.5891 53.2057C11.6583 51.6606 10.48 44.5913 15.4603 29.9764C15.9554 28.5265 16.4802 27.0555 17.0643 25.6057C11.9454 12.5359 4.05413 -0.131748 0.78672 0.598467C1.02256 0.563996 1.26262 0.585679 1.48971 0.661963H1.49961V0.672546C4.03036 1.67791 3.48976 11.9644 1.05999 23.1293C1.9541 27.3211 3.09165 31.4494 4.46602 35.49C8.39681 47.0253 12.4365 52.3061 15.8821 53.2903C15.7814 53.2694 15.6822 53.2411 15.5851 53.2057'
      fill='#FD913C'
    />
  </svg>
);

const Memo = memo(VectorIcon9);
export { Memo as VectorIcon9 };
