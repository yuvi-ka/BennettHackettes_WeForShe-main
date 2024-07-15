import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 3 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M2.09234 0.311504C2.05852 0.318638 2.02542 0.329269 1.99352 0.343252C2.02797 0.33909 2.06144 0.328337 2.09234 0.311504ZM1.77612 0.396166C1.70695 0.406749 1.61801 0.427911 1.55872 0.438494C1.61801 0.427911 1.69707 0.406749 1.77612 0.396166ZM1.38085 0.44908C1.32191 0.457596 1.26244 0.461132 1.20298 0.459661C1.26219 0.471762 1.32326 0.46813 1.38085 0.44908Z'
      fill='#EBC4C4'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
