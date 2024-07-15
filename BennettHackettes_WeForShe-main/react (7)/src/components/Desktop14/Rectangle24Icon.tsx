import { memo, SVGProps } from 'react';

const Rectangle24Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 243 104' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H243V104H0V0Z' fill='white' />
  </svg>
);

const Memo = memo(Rectangle24Icon);
export { Memo as Rectangle24Icon };
