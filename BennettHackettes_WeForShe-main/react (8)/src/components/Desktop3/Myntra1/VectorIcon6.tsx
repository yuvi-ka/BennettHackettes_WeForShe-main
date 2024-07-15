import { memo, SVGProps } from 'react';

const VectorIcon6 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 2 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0.926242 0.297699C0.78305 0.245536 0.631662 0.223963 0.480686 0.234203C0.67777 0.238599 0.872421 0.281644 1.05496 0.361197C1.00545 0.340031 0.975748 0.318865 0.926242 0.297699Z'
      fill='#F15E22'
    />
  </svg>
);

const Memo = memo(VectorIcon6);
export { Memo as VectorIcon6 };
