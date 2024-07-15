import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Myntra1 } from '../Myntra1/Myntra1';
import classes from './Rectangle27.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 2454:551 */
export const Rectangle27: FC<Props> = memo(function Rectangle27(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle27}></div>
      <Myntra1 className={classes.myntra1} />
      <div className={classes.hOME}>HOME</div>
      <div className={classes.tRENDMOSAIC}>TREND-MOSAIC</div>
      <div className={classes.cHICMIRAGE}>CHIC-MIRAGE</div>
    </div>
  );
});
