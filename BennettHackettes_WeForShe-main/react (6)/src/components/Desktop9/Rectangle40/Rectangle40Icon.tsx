import { memo, SVGProps } from 'react';

const Rectangle40Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 173 72' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 36C0 16.1178 16.1177 0 36 0H137C156.882 0 173 16.1178 173 36V36C173 55.8823 156.882 72 137 72H36C16.1178 72 0 55.8823 0 36V36Z'
      fill='#ECE6F0'
    />
  </svg>
);

const Memo = memo(Rectangle40Icon);
export { Memo as Rectangle40Icon };
