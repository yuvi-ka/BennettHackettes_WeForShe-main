import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Rectangle46.module.css';

interface Props {
  className?: string;
}
/* @figmaId 2441:473 */
export const Rectangle46: FC<Props> = memo(function Rectangle46(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle46}></div>
      <div className={classes.image33}></div>
      <div className={classes.image34}></div>
      <div className={classes.image35}></div>
    </div>
  );
});
