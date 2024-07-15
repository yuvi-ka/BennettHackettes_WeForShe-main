import { memo, SVGProps } from 'react';

const Star_filledIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 19' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M3.825 19L5.45 11.975L-1.19209e-07 7.25L7.2 6.625L10 -2.38419e-07L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z'
      fill='#1D1B20'
    />
  </svg>
);

const Memo = memo(Star_filledIcon);
export { Memo as Star_filledIcon };
