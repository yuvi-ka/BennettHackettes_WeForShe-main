import { memo, SVGProps } from 'react';

const Polygon2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 369 344' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M141.992 68.6382C161.541 37.0726 207.459 37.0726 227.008 68.6383L297.012 181.674C317.641 214.984 293.684 258 254.504 258H114.496C75.3161 258 51.3588 214.983 71.9875 181.674L141.992 68.6382Z'
      fill='#CD5858'
    />
  </svg>
);

const Memo = memo(Polygon2Icon);
export { Memo as Polygon2Icon };
