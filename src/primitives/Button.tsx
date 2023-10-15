import clsx from 'clsx';
import React from 'react';

const SmallFontSize = 'var(--font-ui-smaller)';

type ButtonProps = {
  label: string;
  text: string;
  isSelected: boolean;
  onClick?: () => void;
};

export const Button = ({ label, text, isSelected, onClick }: ButtonProps) => {
  return (
    <div
      className={clsx('clickable-icon nav-action-button')}
      style={{ fontSize: SmallFontSize }}
      aria-label={label}
      onClick={onClick}
    >
      {text}
    </div>
  );
};
