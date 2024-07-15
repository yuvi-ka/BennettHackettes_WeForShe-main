import { memo, SVGProps } from 'react';

const Polygon9Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 337 260' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M208.532 206.505C188.534 233.229 148.466 233.229 128.468 206.505L82.4096 144.957C57.7381 111.989 81.2638 65 122.442 65H214.558C255.736 65 279.262 111.989 254.59 144.957L208.532 206.505Z'
      fill='#CE723E'
    />
  </svg>
);

const Memo = memo(Polygon9Icon);
export { Memo as Polygon9Icon };
