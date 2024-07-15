import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Rectangle82.module.css';

interface Props {
  className?: string;
  classes?: {
    line5?: string;
    root?: string;
  };
}
/* @figmaId 2510:774 */
export const Rectangle82: FC<Props> = memo(function Rectangle82(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle82}></div>
      <div className={classes.helloLorem9xxxxxxxxxxOrdersWis}>
        <div className={classes.textBlock}>
          <p></p>
        </div>
        <div className={classes.textBlock2}> Hello Lorem</div>
        <div className={classes.textBlock3}> 9xxxxxxxxxx</div>
        <div className={classes.textBlock4}>
          <p></p>
        </div>
        <div className={classes.textBlock5}>
          <p></p>
        </div>
        <div className={classes.textBlock6}> Orders</div>
        <div className={classes.textBlock7}>
          <p></p>
        </div>
        <div className={classes.textBlock8}> Wishlist</div>
        <div className={classes.textBlock9}>
          <p></p>
        </div>
        <div className={classes.textBlock10}> Contact US</div>
        <div className={classes.textBlock11}>
          <p></p>
        </div>
        <div className={classes.textBlock12}> Challenges &amp; Rewards</div>
        <div className={classes.textBlock13}>
          <p></p>
        </div>
        <div className={classes.textBlock14}>
          <p></p>
        </div>
        <div className={classes.textBlock15}> Friends &amp; Followers</div>
        <div className={classes.textBlock16}>
          <p></p>
        </div>
        <div className={classes.textBlock17}> Saved Boards</div>
        <div className={classes.textBlock18}>
          <p></p>
        </div>
        <div className={classes.textBlock19}> Exclusive Offers</div>
        <div className={classes.textBlock20}>
          <p></p>
        </div>
        <div className={classes.textBlock21}>
          <p></p>
        </div>
        <div className={classes.textBlock22}> Edit Profile</div>
        <div className={classes.textBlock23}> Logout</div>
        <div className={classes.textBlock24}>
          <p></p>
        </div>
      </div>
      <div className={classes.line4}></div>
      <div className={`${props.classes?.line5 || ''} ${classes.line5}`}></div>
      <div className={classes.line6}></div>
    </div>
  );
});
