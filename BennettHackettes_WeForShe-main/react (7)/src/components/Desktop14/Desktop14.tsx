import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Arrow1Icon } from './Arrow1Icon';
import classes from './Desktop14.module.css';
import { Ellipse15Icon } from './Ellipse15Icon';
import { Ellipse15Icon2 } from './Ellipse15Icon2';
import { Ellipse15Icon3 } from './Ellipse15Icon3';
import { Ellipse15Icon4 } from './Ellipse15Icon4';
import { Rectangle24Icon } from './Rectangle24Icon';
import { Rectangle27 } from './Rectangle27/Rectangle27';
import { Rectangle84Icon } from './Rectangle84Icon';
import { Rectangle85 } from './Rectangle85/Rectangle85';
import { Rectangle87 } from './Rectangle87/Rectangle87';
import { Rectangle88 } from './Rectangle88/Rectangle88';
import { Rectangle91 } from './Rectangle91/Rectangle91';
import { Rectangle92Icon } from './Rectangle92Icon';

interface Props {
  className?: string;
}
/* @figmaId 2511:729 */
export const Desktop14: FC<Props> = memo(function Desktop14(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame12}>
        <div className={classes.rectangle1}></div>
        <Rectangle27 />
        <div className={classes.image5}></div>
        <div className={classes.ellipse15}>
          <Ellipse15Icon className={classes.icon} />
        </div>
        <div className={classes.ellipse152}>
          <Ellipse15Icon2 className={classes.icon2} />
        </div>
        <div className={classes.ellipse153}>
          <Ellipse15Icon3 className={classes.icon3} />
        </div>
        <div className={classes.ellipse154}>
          <Ellipse15Icon4 className={classes.icon4} />
        </div>
        <div className={classes.rectangle24}>
          <Rectangle24Icon className={classes.icon5} />
        </div>
        <div className={classes.rectangle84}>
          <Rectangle84Icon className={classes.icon6} />
        </div>
        <Rectangle85 />
        <Rectangle87 />
        <div className={classes.image69}></div>
        <div className={classes.image70}></div>
        <div className={classes.rectangle92}>
          <Rectangle92Icon className={classes.icon7} />
        </div>
        <Rectangle88 />
        <Rectangle91 />
        <div className={classes.rectangle93}></div>
        <div className={classes.fASHIONGURU}>FASHION GURU</div>
        <div className={classes.yourPoints}>Your Points</div>
        <div className={classes.arrow1}>
          <Arrow1Icon className={classes.icon8} />
        </div>
        <div className={classes.rectangle97}></div>
        <div className={classes.youAre1StarAwayFromBecomingThe}>
          You are 1 star away from becoming the next Fashion Guru!!
        </div>
        <div className={classes.rectangle98}></div>
        <div className={classes.rectangle99}></div>
        <div className={classes.nameKauren_121}>Name : Kauren_121</div>
        <div className={classes.nameLaude_games12}>Name : laude_games12</div>
        <div className={classes.image71}></div>
      </div>
    </div>
  );
});
