import { memo, SVGProps } from 'react';

const Star_filledIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 32 30' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6.22292 29.9167L8.79583 19.0865L0.166667 11.8021L11.5667 10.8385L16 0.625L20.4333 10.8385L31.8333 11.8021L23.2042 19.0865L25.7771 29.9167L16 24.174L6.22292 29.9167Z'
      fill='#FFCC00'
    />
  </svg>
);

const Memo = memo(Star_filledIcon4);
export { Memo as Star_filledIcon4 };
