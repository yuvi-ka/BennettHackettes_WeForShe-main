import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Line8Icon } from './Line8Icon';
import { Line9Icon } from './Line9Icon';
import { Rectangle15Icon } from './Rectangle15Icon';
import classes from './Rectangle85.module.css';

interface Props {
  className?: string;
}
/* @figmaId 2514:803 */
export const Rectangle85: FC<Props> = memo(function Rectangle85(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle85}></div>
      <div className={classes.rectangle15}>
        <Rectangle15Icon className={classes.icon} />
      </div>
      <div className={classes.rewardsAndBadges}>Rewards and Badges</div>
      <div className={classes.rectangle86}></div>
      <div className={classes.line8}>
        <Line8Icon className={classes.icon2} />
      </div>
      <div className={classes.line9}>
        <Line9Icon className={classes.icon3} />
      </div>
    </div>
  );
});
