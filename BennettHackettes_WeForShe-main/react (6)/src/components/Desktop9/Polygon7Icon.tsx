import { memo, SVGProps } from 'react';

const Polygon7Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 106 128' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M71.9666 40.2727C88.4765 51.783 88.4765 76.217 71.9666 87.7273V87.7273C52.7912 101.096 26.5 87.3756 26.5 64V64C26.5 40.6244 52.7912 26.904 71.9666 40.2727V40.2727Z'
      fill='#FFCC00'
    />
  </svg>
);

const Memo = memo(Polygon7Icon);
export { Memo as Polygon7Icon };
