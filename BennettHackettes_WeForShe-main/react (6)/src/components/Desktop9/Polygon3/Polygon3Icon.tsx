import { memo, SVGProps } from 'react';

const Polygon3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 499 476' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M172.504 127.213C207.527 69.3485 291.473 69.3485 326.496 127.213L382.896 220.399C419.199 280.379 376.011 357 305.9 357H193.1C122.989 357 79.8011 280.379 116.104 220.399L172.504 127.213Z'
      fill='#FFD11A'
      fillOpacity={0.52}
    />
  </svg>
);

const Memo = memo(Polygon3Icon);
export { Memo as Polygon3Icon };
