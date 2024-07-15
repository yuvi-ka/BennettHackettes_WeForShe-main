import { memo, SVGProps } from 'react';

const Polygon12Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 469 292' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M236.236 62.3309C314.682 90.5292 314.682 201.471 236.236 229.669V229.669C178.303 250.493 117.25 207.562 117.25 146V146C117.25 84.4384 178.304 41.5065 236.236 62.3309V62.3309Z'
      fill='#CD5858'
    />
  </svg>
);

const Memo = memo(Polygon12Icon);
export { Memo as Polygon12Icon };
