import { memo, SVGProps } from 'react';

const Rectangle18Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 206 97' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 10C0 4.47715 4.47715 0 10 0H196C201.523 0 206 4.47715 206 10V87C206 92.5228 201.523 97 196 97H10C4.47715 97 0 92.5228 0 87V10Z'
      fill='#46AF2F'
    />
  </svg>
);

const Memo = memo(Rectangle18Icon);
export { Memo as Rectangle18Icon };
