import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Rectangle87.module.css';

interface Props {
  className?: string;
}
/* @figmaId 2517:824 */
export const Rectangle87: FC<Props> = memo(function Rectangle87(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle87}></div>
      <div className={classes.rectangle89}></div>
      <div className={classes.image67}></div>
    </div>
  );
});
