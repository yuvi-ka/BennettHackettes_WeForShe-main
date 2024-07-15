import { memo, SVGProps } from 'react';

const Polygon12Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 106 128' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M106 64L26.5 119.426V8.57438L106 64Z' fill='#CD5858' />
  </svg>
);

const Memo = memo(Polygon12Icon);
export { Memo as Polygon12Icon };
