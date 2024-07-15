import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Arrow1Icon } from './Arrow1Icon';
import classes from './Desktop3.module.css';
import { Ellipse9Icon } from './Ellipse9Icon';
import { Ellipse9Icon2 } from './Ellipse9Icon2';
import { Ellipse10Icon } from './Ellipse10Icon';
import { Ellipse11Icon } from './Ellipse11Icon';
import { Ellipse12Icon } from './Ellipse12Icon';
import { Ellipse15Icon } from './Ellipse15Icon';
import { Ellipse15Icon2 } from './Ellipse15Icon2';
import { Ellipse15Icon3 } from './Ellipse15Icon3';
import { Ellipse15Icon4 } from './Ellipse15Icon4';
import { Frame17Icon } from './Frame17Icon';
import { Line1Icon } from './Line1Icon';
import { Line2Icon } from './Line2Icon';
import { Line3Icon } from './Line3Icon';
import { LinearIndeterminate_Step1 } from './LinearIndeterminate_Step1/LinearIndeterminate_Step1';
import { PlayCircle_Size48 } from './PlayCircle_Size48/PlayCircle_Size48';
import { PlayCircleIcon } from './PlayCircleIcon';
import { Rectangle15Icon } from './Rectangle15Icon';
import { Rectangle18Icon } from './Rectangle18Icon';
import { Rectangle24Icon } from './Rectangle24Icon';
import { Rectangle27 } from './Rectangle27/Rectangle27';
import { Rectangle27Icon } from './Rectangle27Icon';
import { SearchBar_StateEnabledShowAvat } from './SearchBar_StateEnabledShowAvat/SearchBar_StateEnabledShowAvat';

interface Props {
  className?: string;
  hide?: {
    supportingText?: boolean;
  };
}
/* @figmaId 2321:360 */
export const Desktop3: FC<Props> = memo(function Desktop3(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame12}>
        <div className={classes.rectangle15}>
          <Rectangle15Icon className={classes.icon3} />
        </div>
        <div className={classes.rectangle1}></div>
        <Rectangle27 />
        <div className={classes.image5}></div>
        <SearchBar_StateEnabledShowAvat
          className={classes.searchBar}
          hide={{
            supportingText: true,
          }}
        />
        <div className={classes.wARMTHREADS}>WARM THREADS</div>
        <div className={classes.line1}>
          <Line1Icon className={classes.icon4} />
        </div>
        <div className={classes.line2}>
          <Line2Icon className={classes.icon5} />
        </div>
        <div className={classes.line3}>
          <Line3Icon className={classes.icon6} />
        </div>
        <div className={classes.ellipse9}>
          <Ellipse9Icon className={classes.icon7} />
        </div>
        <div className={classes.ellipse10}>
          <Ellipse10Icon className={classes.icon8} />
        </div>
        <div className={classes.ellipse12}>
          <Ellipse12Icon className={classes.icon9} />
        </div>
        <div className={classes.ellipse11}>
          <Ellipse11Icon className={classes.icon10} />
        </div>
        <div className={classes.ellipse92}>
          <Ellipse9Icon2 className={classes.icon11} />
        </div>
        <div className={classes.yourCompassionTheirSecondChanc}>Your Compassion, Their Second Chance.</div>
        <div className={classes.helpUsSpreadKindnessAndCreateP}>
          <div className={classes.textBlock}>
            Help us spread kindness and create positive change. Your gift, no matter the size, can transform lives and
            bring hope to those who
          </div>
          <div className={classes.textBlock2}>
            <p className={classes.labelWrapper}>
              <span className={classes.label}>
                {' '}
                need it most. Stand with us in our mission to bring hope and healing.{' '}
              </span>
              <span className={classes.label2}> </span>
            </p>
          </div>
        </div>
        <div className={classes.rectangle18}>
          <Rectangle18Icon className={classes.icon12} />
        </div>
        <div className={classes.dONATENOW}> DONATE NOW</div>
        <div className={classes.k}>K</div>
        <div className={classes.n}>N</div>
        <div className={classes.o}>O</div>
        <div className={classes.w}>W</div>
        <div className={classes.unnamed}> </div>
        <div className={classes.m}>M</div>
        <div className={classes.o2}>O</div>
        <div className={classes.r}>R</div>
        <div className={classes.e}>E</div>
        <div className={classes.unnamed2}> </div>
        <div className={classes.a}>A</div>
        <div className={classes.b}>B</div>
        <div className={classes.o3}>O</div>
        <div className={classes.u}>U</div>
        <div className={classes.t}>T</div>
        <div className={classes.unnamed3}> </div>
        <div className={classes.t2}>T</div>
        <div className={classes.h}>H</div>
        <div className={classes.e2}>E</div>
        <div className={classes.unnamed4}> </div>
        <div className={classes.c}>C</div>
        <div className={classes.h2}>H</div>
        <div className={classes.a2}>A</div>
        <div className={classes.r2}>R</div>
        <div className={classes.i}>I</div>
        <div className={classes.t3}>T</div>
        <div className={classes.y}>Y</div>
        <div className={classes._300Volunteers}>300+ Volunteers</div>
        <div className={classes.ellipse15}>
          <Ellipse15Icon className={classes.icon13} />
        </div>
        <div className={classes.ellipse152}>
          <Ellipse15Icon2 className={classes.icon14} />
        </div>
        <div className={classes.ellipse153}>
          <Ellipse15Icon3 className={classes.icon15} />
        </div>
        <div className={classes.ellipse154}>
          <Ellipse15Icon4 className={classes.icon16} />
        </div>
        <div className={classes.rectangle24}>
          <Rectangle24Icon className={classes.icon17} />
        </div>
        <div className={classes.arrow1}>
          <Arrow1Icon className={classes.icon18} />
        </div>
        <PlayCircle_Size48
          className={classes.playCircle}
          classes={{ icon: classes.icon }}
          swap={{
            icon: (
              <div className={classes.icon}>
                <PlayCircleIcon className={classes.icon2} />
              </div>
            ),
          }}
        />
        <div className={classes.frame17}>
          <Frame17Icon className={classes.icon19} />
        </div>
      </div>
      <div className={classes.image26}></div>
      <LinearIndeterminate_Step1 className={classes.linearIndeterminate} classes={{ trackShape: classes.trackShape }} />
      <div className={classes.rectangle27}>
        <Rectangle27Icon className={classes.icon20} />
      </div>
      <div className={classes._100SecureOnlineDonationsYourGi}>
        <div className={classes.textBlock3}>100% Secure Online Donations</div>
        <div className={classes.textBlock4}>
          <p className={classes.labelWrapper2}>
            <span className={classes.label3}>Your gift will be deposited diversly into various charities</span>
          </p>
        </div>
        <div className={classes.textBlock5}>
          <p></p>
        </div>
      </div>
    </div>
  );
});
