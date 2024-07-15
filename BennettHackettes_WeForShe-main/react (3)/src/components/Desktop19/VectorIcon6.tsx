import { memo, SVGProps } from 'react';

const VectorIcon6 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0.806464 0.297699C0.663554 0.245536 0.512465 0.223963 0.361786 0.234203C0.558481 0.238599 0.752749 0.281644 0.934925 0.361197C0.885516 0.340031 0.855872 0.318865 0.806464 0.297699Z'
      fill='#F15E22'
    />
  </svg>
);

const Memo = memo(VectorIcon6);
export { Memo as VectorIcon6 };
