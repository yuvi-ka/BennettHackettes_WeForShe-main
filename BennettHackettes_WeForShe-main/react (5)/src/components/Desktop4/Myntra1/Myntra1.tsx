import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Myntra1.module.css';
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
  classes?: {
    root?: string;
  };
}
/* @figmaId 2324:162 */
export const Myntra1: FC<Props> = memo(function Myntra1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon} />
      </div>
      <div className={classes.vector2}>
        <VectorIcon2 className={classes.icon2} />
      </div>
      <div className={classes.vector3}>
        <VectorIcon3 className={classes.icon3} />
      </div>
      <div className={classes.vector4}>
        <VectorIcon4 className={classes.icon4} />
      </div>
      <div className={classes.vector5}>
        <VectorIcon5 className={classes.icon5} />
      </div>
      <div className={classes.vector6}>
        <VectorIcon6 className={classes.icon6} />
      </div>
      <div className={classes.vector7}>
        <VectorIcon7 className={classes.icon7} />
      </div>
      <div className={classes.vector8}>
        <VectorIcon8 className={classes.icon8} />
      </div>
      <div className={classes.vector9}>
        <VectorIcon9 className={classes.icon9} />
      </div>
      <div className={classes.vector10}>
        <VectorIcon10 className={classes.icon10} />
      </div>
      <div className={classes.vector11}>
        <VectorIcon11 className={classes.icon11} />
      </div>
      <div className={classes.vector12}>
        <VectorIcon12 className={classes.icon12} />
      </div>
      <div className={classes.vector13}>
        <VectorIcon13 className={classes.icon13} />
      </div>
      <div className={classes.vector14}>
        <VectorIcon14 className={classes.icon14} />
      </div>
    </div>
  );
});
