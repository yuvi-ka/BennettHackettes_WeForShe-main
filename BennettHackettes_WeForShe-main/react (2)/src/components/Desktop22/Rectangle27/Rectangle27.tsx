import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Myntra1 } from '../Myntra1/Myntra1';
import classes from './Rectangle27.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    vector?: ReactNode;
    vector2?: ReactNode;
    vector3?: ReactNode;
    vector4?: ReactNode;
    vector5?: ReactNode;
    vector6?: ReactNode;
    vector7?: ReactNode;
    vector8?: ReactNode;
    vector9?: ReactNode;
    vector10?: ReactNode;
    vector11?: ReactNode;
    vector12?: ReactNode;
    vector13?: ReactNode;
    vector14?: ReactNode;
  };
}
/* @figmaId 2454:551 */
export const Rectangle27: FC<Props> = memo(function Rectangle27(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle27}></div>
      <Myntra1
        className={classes.myntra1}
        swap={{
          vector: props.swap?.vector,
          vector2: props.swap?.vector2,
          vector3: props.swap?.vector3,
          vector4: props.swap?.vector4,
          vector5: props.swap?.vector5,
          vector6: props.swap?.vector6,
          vector7: props.swap?.vector7,
          vector8: props.swap?.vector8,
          vector9: props.swap?.vector9,
          vector10: props.swap?.vector10,
          vector11: props.swap?.vector11,
          vector12: props.swap?.vector12,
          vector13: props.swap?.vector13,
          vector14: props.swap?.vector14,
        }}
      />
      <div className={classes.hOME}>HOME</div>
      <div className={classes.tRENDMOSAIC}>TREND-MOSAIC</div>
      <div className={classes.cHICMIRAGE}>CHIC-MIRAGE</div>
    </div>
  );
});
