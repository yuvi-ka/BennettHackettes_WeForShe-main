import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Component24 } from './Component24/Component24';
import classes from './Desktop4.module.css';
import { Image31 } from './Image31/Image31';
import { Polygon1Icon } from './Polygon1Icon';
import { Polygon2Icon } from './Polygon2Icon';
import { Polygon3Icon } from './Polygon3Icon';
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
import { Rectangle46 } from './Rectangle46/Rectangle46';
import { Rectangle47Icon } from './Rectangle47Icon';

interface Props {
  className?: string;
}
/* @figmaId 2336:144 */
export const Desktop4: FC<Props> = memo(function Desktop4(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
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
      <div className={classes.polygon3}>
        <Polygon3Icon className={classes.icon7} />
      </div>
      <div className={classes.polygon2}>
        <Polygon2Icon className={classes.icon8} />
      </div>
      <div className={classes.rectangle47}>
        <Rectangle47Icon className={classes.icon9} />
      </div>
      <Rectangle40 />
      <Rectangle40 className={classes.rectangle41} />
      <Rectangle40
        className={classes.rectangle42}
        text={{
          myBoards: <div className={classes.myBoards}> Collabs</div>,
        }}
      />
      <div className={classes.frame23}></div>
      <div className={classes.frame24}>
        <Component24 />
        <div className={classes.image30}></div>
        <Image31 />
        <div className={classes.wishlist}>Wishlist</div>
      </div>
      <div className={classes.polygon7}>
        <Polygon7Icon className={classes.icon10} />
      </div>
      <div className={classes.polygon11}>
        <Polygon11Icon className={classes.icon11} />
      </div>
      <div className={classes.polygon12}>
        <Polygon12Icon className={classes.icon12} />
      </div>
      <div className={classes.image32}></div>
      <Rectangle46 />
      <div className={classes.loungeWear}>lounge wear</div>
      <div className={classes.image36}></div>
      <Rectangle27 className={classes.rectangle48} />
      <div className={classes.image42}></div>
      <div className={classes.icons8Collage504}></div>
    </div>
  );
});
