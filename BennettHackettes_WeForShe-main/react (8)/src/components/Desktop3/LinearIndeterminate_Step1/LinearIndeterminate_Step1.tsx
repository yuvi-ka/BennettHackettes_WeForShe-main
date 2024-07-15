import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './LinearIndeterminate_Step1.module.css';

interface Props {
  className?: string;
  classes?: {
    trackShape?: string;
    root?: string;
  };
}
/* @figmaId 2362:173 */
export const LinearIndeterminate_Step1: FC<Props> = memo(function LinearIndeterminate_Step1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.track}>
        <div className={`${props.classes?.trackShape || ''} ${classes.trackShape}`}></div>
      </div>
    </div>
  );
});
