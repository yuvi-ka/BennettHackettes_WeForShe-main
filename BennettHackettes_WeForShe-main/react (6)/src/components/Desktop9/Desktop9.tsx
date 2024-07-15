import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Desktop9.module.css';
import { Polygon1Icon } from './Polygon1Icon';
import { Polygon2Icon } from './Polygon2Icon';
import { Polygon3 } from './Polygon3/Polygon3';
import { Polygon4Icon } from './Polygon4Icon';
import { Polygon6Icon } from './Polygon6Icon';
import { Polygon7Icon } from './Polygon7Icon';
import { Polygon9Icon } from './Polygon9Icon';
import { Polygon9Icon2 } from './Polygon9Icon2';
import { Polygon10Icon } from './Polygon10Icon';
import { Polygon11Icon } from './Polygon11Icon';
import { Polygon12Icon } from './Polygon12Icon';
import { Rectangle27 } from './Rectangle27/Rectangle27';
import { Rectangle40 } from './Rectangle40/Rectangle40';
import { Rectangle55 } from './Rectangle55/Rectangle55';

interface Props {
  className?: string;
}
/* @figmaId 2458:639 */
export const Desktop9: FC<Props> = memo(function Desktop9(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.image57}></div>
      <div className={classes.polygon9}>
        <Polygon9Icon className={classes.icon} />
      </div>
      <div className={classes.polygon6}>
        <Polygon6Icon className={classes.icon2} />
      </div>
      <div className={classes.polygon92}>
        <Polygon9Icon2 className={classes.icon3} />
      </div>
      <div className={classes.polygon1}>
        <Polygon1Icon className={classes.icon4} />
      </div>
      <div className={classes.polygon4}>
        <Polygon4Icon className={classes.icon5} />
      </div>
      <div className={classes.polygon10}>
        <Polygon10Icon className={classes.icon6} />
      </div>
      <Polygon3 />
      <div className={classes.polygon2}>
        <Polygon2Icon className={classes.icon7} />
      </div>
      <Rectangle40 />
      <Rectangle40 className={classes.rectangle41} />
      <Rectangle40
        className={classes.rectangle42}
        text={{
          myBoards: <div className={classes.myBoards}> Collabs</div>,
        }}
      />
      <div className={classes.polygon7}>
        <Polygon7Icon className={classes.icon8} />
      </div>
      <div className={classes.polygon11}>
        <Polygon11Icon className={classes.icon9} />
      </div>
      <div className={classes.polygon12}>
        <Polygon12Icon className={classes.icon10} />
      </div>
      <Rectangle27 className={classes.rectangle28} />
      <div className={classes.image38}></div>
      <Rectangle55 />
      <div className={classes.image41}></div>
      <div className={classes.image40}></div>
      <div className={classes.image39}></div>
      <div className={classes.image7}></div>
      <div className={classes.icons8Collage503}></div>
    </div>
  );
});
