import { memo, SVGProps } from 'react';

const Line9Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 414 0' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H414' stroke='#73C9EB' strokeWidth={2} />
  </svg>
);

const Memo = memo(Line9Icon);
export { Memo as Line9Icon };
