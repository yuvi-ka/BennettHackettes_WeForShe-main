import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Component31.module.css';

interface Props {
  className?: string;
  classes?: {
    tinywow_change_bg_photo_601734?: string;
    tinywow_change_bg_photo_6017342?: string;
    root?: string;
  };
}
/* @figmaId 2518:992 */
export const Component31: FC<Props> = memo(function Component31(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div
        className={`${props.classes?.tinywow_change_bg_photo_601734 || ''} ${classes.tinywow_change_bg_photo_601734}`}
      ></div>
      <div
        className={`${props.classes?.tinywow_change_bg_photo_6017342 || ''} ${classes.tinywow_change_bg_photo_6017342}`}
      ></div>
    </div>
  );
});
