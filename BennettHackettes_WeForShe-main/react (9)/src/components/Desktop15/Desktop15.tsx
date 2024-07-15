import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Desktop15.module.css';
import { Image6Icon } from './Image6Icon';
import { Myntra1 } from './Myntra1/Myntra1';
import { Rectangle1Icon } from './Rectangle1Icon';
import { Rectangle82 } from './Rectangle82/Rectangle82';
import { SearchBar_StateEnabledShowAvat } from './SearchBar_StateEnabledShowAvat/SearchBar_StateEnabledShowAvat';

interface Props {
  className?: string;
}
/* @figmaId 2510:833 */
export const Desktop15: FC<Props> = memo(function Desktop15(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame}>
        <div className={classes.frame2}>
          <div className={classes.frame15}></div>
          <div className={classes.image8}></div>
        </div>
      </div>
      <div className={classes.frame3}>
        <div className={classes.rectangle1}>
          <Rectangle1Icon className={classes.icon} />
        </div>
        <div className={classes.cHICMIRAGE}>CHIC-MIRAGE</div>
        <div className={classes.tRENDMOSAIC}>TREND-MOSAIC</div>
        <div className={classes.dONATION}>DONATION</div>
        <div className={classes.image12}></div>
        <div className={classes.image7}></div>
        <div className={classes.image10}></div>
        <div className={classes.image11}></div>
        <div className={classes.frame22}></div>
        <Myntra1 className={classes.myntra1} />
        <div className={classes.frame14}></div>
        <div className={classes.image9}></div>
        <div className={classes.image6}>
          <Image6Icon className={classes.icon2} />
        </div>
        <SearchBar_StateEnabledShowAvat className={classes.searchBar} />
        <div className={classes.rectangle28}></div>
        <Rectangle82 className={classes.rectangle83} classes={{ line5: classes.line5 }} />
      </div>
    </div>
  );
});
