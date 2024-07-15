import { memo, SVGProps } from 'react';

const Rectangle92Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 201 52' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 26C0 11.9167 11.4167 0.5 25.5 0.5H175.5C189.583 0.5 201 11.9167 201 26V26C201 40.0833 189.583 51.5 175.5 51.5H25.5C11.4167 51.5 0 40.0833 0 26V26Z'
      fill='#EBC4C4'
      fillOpacity={0.93}
    />
  </svg>
);

const Memo = memo(Rectangle92Icon);
export { Memo as Rectangle92Icon };
