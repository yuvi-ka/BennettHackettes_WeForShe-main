import { memo, SVGProps } from 'react';

const Polygon3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 361 361' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M180.5 0L336.818 270.75H24.1824L180.5 0Z' fill='#FFD11A' fillOpacity={0.52} />
  </svg>
);

const Memo = memo(Polygon3Icon);
export { Memo as Polygon3Icon };
