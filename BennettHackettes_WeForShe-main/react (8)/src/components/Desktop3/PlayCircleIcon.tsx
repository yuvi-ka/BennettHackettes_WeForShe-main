import { memo, SVGProps } from 'react';

const PlayCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 96 91' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M48 90.9167C74.2335 90.9167 95.5 70.5829 95.5 45.5C95.5 20.4171 74.2335 0.083333 48 0.083333C21.7665 0.083333 0.5 20.4171 0.5 45.5C0.5 70.5829 21.7665 90.9167 48 90.9167Z'
      fill='#FF9430'
    />
    <path d='M38.5 27.3333L67 45.5L38.5 63.6667V27.3333Z' fill='#FF9430' />
    <path
      d='M48 90.9167C74.2335 90.9167 95.5 70.5829 95.5 45.5C95.5 20.4171 74.2335 0.083333 48 0.083333C21.7665 0.083333 0.5 20.4171 0.5 45.5C0.5 70.5829 21.7665 90.9167 48 90.9167Z'
      stroke='#F5F5F5'
      strokeWidth={4}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M38.5 27.3333L67 45.5L38.5 63.6667V27.3333Z'
      stroke='#F5F5F5'
      strokeWidth={4}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(PlayCircleIcon);
export { Memo as PlayCircleIcon };
