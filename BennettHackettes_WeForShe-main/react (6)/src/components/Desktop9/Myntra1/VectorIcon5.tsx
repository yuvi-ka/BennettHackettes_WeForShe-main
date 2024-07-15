import { memo, SVGProps } from 'react';

const VectorIcon5 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 2 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0.728188 0.181289C0.680304 0.216591 0.626526 0.241739 0.569771 0.255368C0.793829 0.16232 1.03239 0.115633 1.27276 0.117791C1.08907 0.0957143 0.903096 0.1174 0.728188 0.181289Z'
      fill='#EC008B'
    />
  </svg>
);

const Memo = memo(VectorIcon5);
export { Memo as VectorIcon5 };
