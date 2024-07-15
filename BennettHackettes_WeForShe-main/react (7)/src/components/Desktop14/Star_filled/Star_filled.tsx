import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Star_filled.module.css';
import { Star_filledIcon } from './Star_filledIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 2518:805 */
export const Star_filled: FC<Props> = memo(function Star_filled(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <Star_filledIcon className={classes.icon2} />}</div>
    </div>
  );
});
