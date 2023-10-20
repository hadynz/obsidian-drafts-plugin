import React from 'react';
import clsx from 'clsx';

const SmallFontSize = 'var(--font-ui-smaller)';

type ButtonProps = {
  label: string;
  text: string;
  isSelected: boolean;
  onClick?: () => void;
};

export const Button = ({ label, text, onClick }: ButtonProps) => {
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
