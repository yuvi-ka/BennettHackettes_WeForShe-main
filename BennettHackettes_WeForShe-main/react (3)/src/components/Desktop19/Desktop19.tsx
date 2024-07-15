import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Desktop19.module.css';
import { Navigate_next } from './Navigate_next/Navigate_next';
import { Navigate_nextIcon } from './Navigate_nextIcon';
import { Rectangle27 } from './Rectangle27/Rectangle27';
import { Rectangle104 } from './Rectangle104/Rectangle104';
import { VectorIcon } from './VectorIcon';
import { VectorIcon2 } from './VectorIcon2';
import { VectorIcon3 } from './VectorIcon3';
import { VectorIcon4 } from './VectorIcon4';
import { VectorIcon5 } from './VectorIcon5';
import { VectorIcon6 } from './VectorIcon6';
import { VectorIcon7 } from './VectorIcon7';
import { VectorIcon8 } from './VectorIcon8';
import { VectorIcon9 } from './VectorIcon9';
import { VectorIcon10 } from './VectorIcon10';
import { VectorIcon11 } from './VectorIcon11';
import { VectorIcon12 } from './VectorIcon12';
import { VectorIcon13 } from './VectorIcon13';
import { VectorIcon14 } from './VectorIcon14';

interface Props {
  className?: string;
}
/* @figmaId 2518:1026 */
export const Desktop19: FC<Props> = memo(function Desktop19(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Rectangle27
        className={classes.rectangle69}
        swap={{
          vector: <VectorIcon className={classes.icon} />,
          vector2: <VectorIcon2 className={classes.icon2} />,
          vector3: <VectorIcon3 className={classes.icon3} />,
          vector4: <VectorIcon4 className={classes.icon4} />,
          vector5: <VectorIcon5 className={classes.icon5} />,
          vector6: <VectorIcon6 className={classes.icon6} />,
          vector7: <VectorIcon7 className={classes.icon7} />,
          vector8: <VectorIcon8 className={classes.icon8} />,
          vector9: <VectorIcon9 className={classes.icon9} />,
          vector10: <VectorIcon10 className={classes.icon10} />,
          vector11: <VectorIcon11 className={classes.icon11} />,
          vector12: <VectorIcon12 className={classes.icon12} />,
          vector13: <VectorIcon13 className={classes.icon13} />,
          vector14: <VectorIcon14 className={classes.icon14} />,
        }}
      />
      <div className={classes.image55}></div>
      <div className={classes.icons8Collage507}></div>
      <div className={classes.tinywow_change_bg_photo_601723}></div>
      <div className={classes.frame35}>
        <div className={classes.tinywow_change_bg_photo_601750}></div>
        <div className={classes.tinywow_change_bg_photo_601731}></div>
        <div className={classes.tinywow_change_bg_photo_601752}></div>
        <div className={classes.tinywow_change_bg_photo_601753}></div>
      </div>
      <Navigate_next
        className={classes.navigate_next}
        swap={{
          icon: <Navigate_nextIcon className={classes.icon15} />,
        }}
      />
      <Rectangle104 className={classes.rectangle105} />
    </div>
  );
});
