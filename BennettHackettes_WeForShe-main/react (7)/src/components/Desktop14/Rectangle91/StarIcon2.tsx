import { memo, SVGProps } from 'react';

const StarIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 33 31' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11.3812 24.2229L16.5 21.2146L21.6188 24.2625L20.2781 18.5625L24.7875 14.7625L18.8562 14.2479L16.5 8.86458L14.1438 14.2083L8.2125 14.7229L12.7219 18.5625L11.3812 24.2229ZM6.46562 30.8333L9.10625 19.7104L0.25 12.2292L11.95 11.2396L16.5 0.75L21.05 11.2396L32.75 12.2292L23.8938 19.7104L26.5344 30.8333L16.5 24.9354L6.46562 30.8333Z'
      fill='#111111'
    />
  </svg>
);

const Memo = memo(StarIcon2);
export { Memo as StarIcon2 };
