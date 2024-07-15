import { memo, SVGProps } from 'react';

const Size48Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z'
      stroke='#1E1E1E'
      strokeWidth={4}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M16 12L28 20L16 28V12Z' stroke='#1E1E1E' strokeWidth={4} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(Size48Icon);
export { Memo as Size48Icon };
