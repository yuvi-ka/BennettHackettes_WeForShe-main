import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Component31 } from './Component31/Component31';
import { Component33 } from './Component33/Component33';
import { Component35 } from './Component35/Component35';
import classes from './Desktop20.module.css';
import { Rectangle27 } from './Rectangle27/Rectangle27';
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
/* @figmaId 2518:1085 */
export const Desktop20: FC<Props> = memo(function Desktop20(props = {}) {
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
      <div className={classes.frame36}>
        <Component35
          className={classes.component36}
          classes={{
            tinywow_change_bg_photo_601764: classes.tinywow_change_bg_photo_601764,
            tinywow_change_bg_photo_6017642: classes.tinywow_change_bg_photo_6017642,
          }}
        />
        <div className={classes.tinywow_change_bg_photo_601733}></div>
        <Component31
          className={classes.component32}
          classes={{
            tinywow_change_bg_photo_601734: classes.tinywow_change_bg_photo_601734,
            tinywow_change_bg_photo_6017342: classes.tinywow_change_bg_photo_6017342,
          }}
        />
        <Component33
          className={classes.component34}
          classes={{
            tinywow_change_bg_photo_601757: classes.tinywow_change_bg_photo_601757,
            tinywow_change_bg_photo_6017572: classes.tinywow_change_bg_photo_6017572,
          }}
        />
      </div>
    </div>
  );
});
