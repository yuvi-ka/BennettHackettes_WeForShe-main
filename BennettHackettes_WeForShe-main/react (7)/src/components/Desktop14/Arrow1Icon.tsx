import { memo, SVGProps } from 'react';

const Arrow1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 143 143' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M119.481 117.353C119.742 117.84 120.348 118.023 120.835 117.762L128.766 113.506C129.252 113.245 129.435 112.639 129.174 112.152C128.913 111.666 128.307 111.483 127.82 111.744L120.771 115.527L116.988 108.477C116.727 107.991 116.121 107.808 115.634 108.069C115.148 108.33 114.965 108.936 115.226 109.423L119.481 117.353ZM29.5404 17.4981C27.1391 39.5144 27.3296 55.684 29.465 67.3505C31.5998 79.0143 35.7028 86.2989 41.2342 90.3599C46.774 94.4271 53.5498 95.1171 60.7019 94.0276C67.8461 92.9394 75.4929 90.0577 82.9089 86.8253C90.4006 83.5599 97.5319 79.998 103.963 77.3707C107.152 76.0677 110.101 75.0256 112.736 74.3995C115.382 73.7713 117.642 73.5796 119.483 73.9147C121.288 74.243 122.696 75.0757 123.717 76.5598C124.761 78.078 125.46 80.3656 125.628 83.6987C125.964 90.3804 124.15 100.857 119.405 116.592L121.32 117.169C126.074 101.404 127.98 90.6462 127.625 83.5982C127.448 80.0665 126.699 77.3656 125.365 75.4262C124.007 73.4528 122.106 72.359 119.841 71.947C117.613 71.5416 115.045 71.7955 112.274 72.4537C109.494 73.114 106.438 74.1992 103.206 75.5193C96.7959 78.1382 89.4197 81.8057 82.1097 84.9919C74.724 88.2111 67.2749 91.0033 60.4007 92.0504C53.5345 93.0963 47.3694 92.3831 42.4178 88.7477C37.4577 85.1062 33.5185 78.3889 31.4323 66.9904C29.3465 55.5948 29.1371 39.6421 31.5286 17.715L29.5404 17.4981Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(Arrow1Icon);
export { Memo as Arrow1Icon };