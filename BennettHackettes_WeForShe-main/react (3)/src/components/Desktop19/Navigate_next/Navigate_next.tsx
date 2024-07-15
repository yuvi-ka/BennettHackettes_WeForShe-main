import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Navigate_next.module.css';
import { Navigate_nextIcon } from './Navigate_nextIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 2518:1154 */
export const Navigate_next: FC<Props> = memo(function Navigate_next(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <Navigate_nextIcon className={classes.icon2} />}</div>
    </div>
  );
});
