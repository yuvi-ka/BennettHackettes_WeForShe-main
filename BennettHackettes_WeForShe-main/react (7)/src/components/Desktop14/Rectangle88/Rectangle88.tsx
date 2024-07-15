import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Rectangle88.module.css';

interface Props {
  className?: string;
}
/* @figmaId 2517:827 */
export const Rectangle88: FC<Props> = memo(function Rectangle88(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.tOPSTYLIST}>TOP STYLIST</div>
      <div className={classes.rectangle88}></div>
      <div className={classes.rectangle90}></div>
      <div className={classes.image68}></div>
    </div>
  );
});
