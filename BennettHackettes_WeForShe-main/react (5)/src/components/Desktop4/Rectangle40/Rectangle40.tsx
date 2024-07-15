import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Rectangle40.module.css';
import { Rectangle40Icon } from './Rectangle40Icon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    myBoards?: ReactNode;
  };
}
/* @figmaId 2433:256 */
export const Rectangle40: FC<Props> = memo(function Rectangle40(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle40}>
        <Rectangle40Icon className={classes.icon} />
      </div>
      {props.text?.myBoards != null ? props.text?.myBoards : <div className={classes.myBoards}>My Boards</div>}
    </div>
  );
});
