import { memo, SVGProps } from 'react';

const Ellipse15Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 43 37' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={21.5} cy={18.5} rx={21.5} ry={18.5} fill='#CF525E' />
    <ellipse cx={21.5} cy={18.5} rx={21.5} ry={18.5} fill='#CF525E' />
    <ellipse cx={21.5} cy={18.5} rx={21.5} ry={18.5} fill='#CF525E' />
    <ellipse cx={21.5} cy={18.5} rx={21.5} ry={18.5} fill='black' />
    <ellipse cx={21.5} cy={18.5} rx={21.5} ry={18.5} fill='#CF525E' />
  </svg>
);

const Memo = memo(Ellipse15Icon2);
export { Memo as Ellipse15Icon2 };
