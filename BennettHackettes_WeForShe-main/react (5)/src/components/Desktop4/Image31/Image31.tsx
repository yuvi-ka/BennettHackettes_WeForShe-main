import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Image31.module.css';

interface Props {
  className?: string;
}
/* @figmaId 2441:466 */
export const Image31: FC<Props> = memo(function Image31(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.image31}></div>
    </div>
  );
});
