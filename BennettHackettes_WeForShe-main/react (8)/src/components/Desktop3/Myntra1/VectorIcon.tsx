import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 3 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M2.17328 0.311504C2.1394 0.318638 2.10624 0.329269 2.07427 0.343252C2.10879 0.33909 2.14232 0.328337 2.17328 0.311504ZM1.85645 0.396166C1.78714 0.406748 1.69802 0.42791 1.63862 0.438493C1.69802 0.42791 1.77724 0.406748 1.85645 0.396166ZM1.4604 0.44908C1.40134 0.457595 1.34175 0.461131 1.28217 0.45966C1.3415 0.471761 1.40269 0.46813 1.4604 0.44908Z'
      fill='#EBC4C4'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
