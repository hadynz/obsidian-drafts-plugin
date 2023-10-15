import clsx from 'clsx';
import React from 'react';
import { styled } from '@stitches/react';
import * as Tokens from '../tokens';
import moment from 'moment';

type TreeItemProps = {
  title: string;
  contentPreview?: string;
  tags?: string[];
  lastModifiedDate: Date;
  isSelected: boolean;
  onSelected: () => void;
};

export const TreeItem = ({
  title,
  contentPreview,
  tags,
  lastModifiedDate,
  isSelected,
  onSelected,
}: TreeItemProps) => {
  const onClick = () => {
    onSelected();
  };

  return (
    <Content
      className={clsx({
        'is-active': isSelected,
      })}
      onClick={onClick}
    >
      <div>
        <Title>{title}</Title>
        {contentPreview && <Preview>{contentPreview}</Preview>}
      </div>
      {tags?.length > 0 && (
        <div>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      )}
      <ModifiedDate>{`Modified ${moment(lastModifiedDate).fromNow()}`}</ModifiedDate>
    </Content>
  );
};

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',
  marginTop: Tokens.Size_4_1,

  borderRadius: 'var(--radius-s)',
  color: 'var(--nav-item-color)',
  fontSize: 'var(--nav-item-size)',
  lineHeight: 'var(--line-height-tight)',
  fontWeight: 'var(--nav-item-weight)',
  padding: 'var(--nav-item-padding)',
  position: 'relative',

  '&.is-active': {
    color: Tokens.NavItemColorActive,
    backgroundColor: Tokens.NavItemBackgroundActive,
    fontWeight: Tokens.NavItemWeightActive,
  },

  '&:focus': {
    backgroundColor: 'Yellow',
  },
});

const Title = styled('div', {
  fontSize: Tokens.FontMedium,
});

const Preview = styled('div', {
  fontSize: Tokens.FontSmall,
  /* Ellipsis after x lines */
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 3,
});

const Tag = styled('span', {
  color: Tokens.TagColor,
  backgroundColor: Tokens.TagBackground,
  borderRadius: Tokens.TagRadius,
  paddingLeft: Tokens.TagPaddingX,
  paddingRight: Tokens.TagPaddingX,
  paddingTop: Tokens.TagPaddingY,
  paddingBottom: Tokens.TagPaddingY,
  fontSize: Tokens.FontSmall,
});

const ModifiedDate = styled('div', {
  fontSize: Tokens.FontSmaller,
  textAlign: 'right',
});