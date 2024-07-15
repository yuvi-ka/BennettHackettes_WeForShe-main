import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Star } from '../Star/Star';
import { Star_filled } from '../Star_filled/Star_filled';
import classes from './Rectangle91.module.css';
import { Rectangle91Icon } from './Rectangle91Icon';
import { Rectangle91Icon2 } from './Rectangle91Icon2';
import { Rectangle91Icon3 } from './Rectangle91Icon3';
import { Star_filledIcon } from './Star_filledIcon';
import { Star_filledIcon2 } from './Star_filledIcon2';
import { Star_filledIcon3 } from './Star_filledIcon3';
import { Star_filledIcon4 } from './Star_filledIcon4';
import { Star_filledIcon5 } from './Star_filledIcon5';
import { Star_filledIcon6 } from './Star_filledIcon6';
import { Star_filledIcon7 } from './Star_filledIcon7';
import { Star_filledIcon8 } from './Star_filledIcon8';
import { Star_filledIcon9 } from './Star_filledIcon9';
import { StarIcon } from './StarIcon';
import { StarIcon2 } from './StarIcon2';
import { StarIcon3 } from './StarIcon3';
import { StarIcon4 } from './StarIcon4';

interface Props {
  className?: string;
}
/* @figmaId 2517:844 */
export const Rectangle91: FC<Props> = memo(function Rectangle91(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle91}></div>
      <div className={classes.rectangle94}></div>
      <div className={classes.rectangle95}></div>
      <div className={classes.rectangle96}></div>
      <div className={classes.stylePoints}>Style points</div>
      <div className={classes.dailyRewards}>Daily Rewards</div>
      <div className={classes.fashionPoints}>Fashion points</div>
      <Star_filled
        className={classes.star_filled}
        swap={{
          icon: <Star_filledIcon className={classes.icon} />,
        }}
      />
      <Star_filled
        className={classes.star_filled2}
        swap={{
          icon: <Star_filledIcon2 className={classes.icon2} />,
        }}
      />
      <Star_filled
        className={classes.star_filled3}
        swap={{
          icon: <Star_filledIcon3 className={classes.icon3} />,
        }}
      />
      <Star_filled
        className={classes.star_filled4}
        swap={{
          icon: <Star_filledIcon4 className={classes.icon4} />,
        }}
      />
      <Star_filled
        className={classes.star_filled5}
        swap={{
          icon: <Star_filledIcon5 className={classes.icon5} />,
        }}
      />
      <Star_filled
        className={classes.star_filled6}
        swap={{
          icon: <Star_filledIcon6 className={classes.icon6} />,
        }}
      />
      <Star_filled
        className={classes.star_filled7}
        swap={{
          icon: <Star_filledIcon7 className={classes.icon7} />,
        }}
      />
      <Star_filled
        className={classes.star_filled8}
        swap={{
          icon: <Star_filledIcon8 className={classes.icon8} />,
        }}
      />
      <Star_filled
        className={classes.star_filled9}
        swap={{
          icon: <Star_filledIcon9 className={classes.icon9} />,
        }}
      />
      <Star
        className={classes.star}
        swap={{
          icon: <StarIcon className={classes.icon10} />,
        }}
      />
      <Star
        className={classes.star2}
        swap={{
          icon: <StarIcon2 className={classes.icon11} />,
        }}
      />
      <div className={classes.icon14}>
        <Rectangle91Icon className={classes.icon15} />
      </div>
      <div className={classes.icon16}>
        <Rectangle91Icon2 className={classes.icon17} />
      </div>
      <div className={classes.icon18}>
        <Rectangle91Icon3 className={classes.icon19} />
      </div>
      <Star
        className={classes.star3}
        swap={{
          icon: <StarIcon3 className={classes.icon12} />,
        }}
      />
      <Star
        className={classes.star4}
        swap={{
          icon: <StarIcon4 className={classes.icon13} />,
        }}
      />
    </div>
  );
});
