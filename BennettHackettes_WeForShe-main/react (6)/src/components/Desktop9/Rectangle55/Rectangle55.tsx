import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Rectangle55.module.css';

interface Props {
  className?: string;
}
/* @figmaId 2476:844 */
export const Rectangle55: FC<Props> = memo(function Rectangle55(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle55}></div>
      <div className={classes.image42}></div>
    </div>
  );
});
