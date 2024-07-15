import { memo, SVGProps } from 'react';

const Image6Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    preserveAspectRatio='none'
    viewBox='0 0 1734 490'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    {...props}
  >
    <path d='M0 0H1734V490H0V0Z' fill='url(#pattern0_2603_1332)' />
    <defs>
      <pattern id='pattern0_2603_1332' patternContentUnits='objectBoundingBox' width={1} height={1}>
        <use xlinkHref='#image0_2603_1332' transform='matrix(0.000558971 0 0 0.00197807 0 -0.0499047)' />
      </pattern>
      <image
        id='image0_2603_1332'
        width={1789}
        height={556}
      />
    </defs>
  </svg>
);
const Memo = memo(Image6Icon);
export { Memo as Image6Icon };