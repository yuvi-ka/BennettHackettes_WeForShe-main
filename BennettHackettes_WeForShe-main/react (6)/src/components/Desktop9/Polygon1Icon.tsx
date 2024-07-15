import { memo, SVGProps } from 'react';

const Polygon1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 475 415' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M195.785 63.1254C215.552 33.2134 259.448 33.2134 279.215 63.1254L391.924 233.684C413.89 266.925 390.052 311.25 350.209 311.25H124.791C84.948 311.25 61.1101 266.925 83.0763 233.684L195.785 63.1254Z'
      fill='#CD5858'
      fillOpacity={0.68}
    />
  </svg>
);

const Memo = memo(Polygon1Icon);
export { Memo as Polygon1Icon };
