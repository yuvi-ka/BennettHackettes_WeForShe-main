import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Component35.module.css';

interface Props {
  className?: string;
  classes?: {
    tinywow_change_bg_photo_601764?: string;
    tinywow_change_bg_photo_6017642?: string;
    root?: string;
  };
}
/* @figmaId 2518:1118 */
export const Component35: FC<Props> = memo(function Component35(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div
        className={`${props.classes?.tinywow_change_bg_photo_601764 || ''} ${classes.tinywow_change_bg_photo_601764}`}
      ></div>
      <div
        className={`${props.classes?.tinywow_change_bg_photo_6017642 || ''} ${classes.tinywow_change_bg_photo_6017642}`}
      ></div>
    </div>
  );
});
