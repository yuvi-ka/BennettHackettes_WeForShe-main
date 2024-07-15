import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Component33.module.css';

interface Props {
  className?: string;
  classes?: {
    tinywow_change_bg_photo_601757?: string;
    tinywow_change_bg_photo_6017572?: string;
    root?: string;
  };
}
/* @figmaId 2518:998 */
export const Component33: FC<Props> = memo(function Component33(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div
        className={`${props.classes?.tinywow_change_bg_photo_601757 || ''} ${classes.tinywow_change_bg_photo_601757}`}
      ></div>
      <div
        className={`${props.classes?.tinywow_change_bg_photo_6017572 || ''} ${classes.tinywow_change_bg_photo_6017572}`}
      ></div>
    </div>
  );
});
