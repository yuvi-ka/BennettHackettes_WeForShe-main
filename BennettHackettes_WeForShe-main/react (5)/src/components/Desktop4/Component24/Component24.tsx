import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Component24.module.css';

interface Props {
  className?: string;
}
/* @figmaId 2433:250 */
export const Component24: FC<Props> = memo(function Component24(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle33}></div>
      <div className={classes.rectangle35}></div>
      <div className={classes.rectangle37}></div>
      <div className={classes.rectangle36}></div>
    </div>
  );
});
