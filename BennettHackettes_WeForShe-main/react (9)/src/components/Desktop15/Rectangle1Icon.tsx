import { memo, SVGProps } from 'react';

const Rectangle1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1512 75' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H1512V75H0V0Z' fill='white' />
  </svg>
);

const Memo = memo(Rectangle1Icon);
export { Memo as Rectangle1Icon };
