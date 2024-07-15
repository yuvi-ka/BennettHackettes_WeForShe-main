import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Polygon3.module.css';
import { Polygon3Icon } from './Polygon3Icon';

interface Props {
  className?: string;
}
/* @figmaId 2458:702 */
export const Polygon3: FC<Props> = memo(function Polygon3(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.polygon3}>
        <Polygon3Icon className={classes.icon} />
      </div>
      <div className={classes.image43}></div>
    </div>
  );
});
