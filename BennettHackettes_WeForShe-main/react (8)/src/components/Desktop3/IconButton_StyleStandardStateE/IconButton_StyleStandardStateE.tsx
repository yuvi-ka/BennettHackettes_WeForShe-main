import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Settings } from '../Settings/Settings';
import { Icon } from './Icon';
import classes from './IconButton_StyleStandardStateE.module.css';

interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 2321:58 */
export const IconButton_StyleStandardStateE: FC<Props> = memo(function IconButton_StyleStandardStateE(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.container}>
        <div className={classes.stateLayer}>
          {props.swap?.icon || (
            <Settings
              swap={{
                icon: <Icon className={classes.icon} />,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
});
