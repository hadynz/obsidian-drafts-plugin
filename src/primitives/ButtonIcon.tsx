import clsx from 'clsx';
import React, { ComponentType } from 'react';
import { IconBaseProps } from 'react-icons';

const IconSize = 'var(--icon-size)';

type ButtonIconProps = {
  label: string;
  isSelected: boolean;
  onClick?: () => void;
  Icon: ComponentType<IconBaseProps>;
};

export const ButtonIcon = ({ label, isSelected, Icon, onClick }: ButtonIconProps) => {
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
