import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './PlayCircle_Size48.module.css';
import { Size48Icon } from './Size48Icon';

interface Props {
  className?: string;
  classes?: {
    icon?: string;
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 2380:172 */
export const PlayCircle_Size48: FC<Props> = memo(function PlayCircle_Size48(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.icon || ''} ${classes.icon}`}>
        {props.swap?.icon || <Size48Icon className={classes.icon2} />}
      </div>
    </div>
  );
});
