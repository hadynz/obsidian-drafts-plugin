import React, { ComponentType } from 'react';
import { IconBaseProps } from 'react-icons';
import clsx from 'clsx';

const IconSize = 'var(--icon-size)';

type ButtonIconProps = {
  label: string;
  isSelected: boolean;
  onClick?: () => void;
  Icon: ComponentType<IconBaseProps>;
};

export const ButtonIcon = ({ label, Icon, onClick }: ButtonIconProps) => {
  return (
    <div
      className={clsx('clickable-icon nav-action-button')}
      aria-label={label}
      onClick={onClick}
    >
      <Icon style={{ height: IconSize, width: IconSize }} />
    </div>
  );
};
