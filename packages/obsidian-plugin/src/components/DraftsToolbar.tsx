import React, { useState } from 'react';
import { HiOutlineArchiveBox, HiOutlineInboxArrowDown, HiOutlineTrash } from 'react-icons/hi2';
import { Button, ButtonIcon, Select, Toolbar } from '@obsidian-drafts/primitives';

type Pane = 'inbox' | 'archive' | 'trash' | 'all';

// eslint-disable-next-line @typescript-eslint/ban-types
type DraftsToolbarProps = {};

export const DraftsToolbar = ({}: DraftsToolbarProps) => {
  const [selectedPane, setSelectedPane] = useState<Pane>(null);

  return (
    <>
      <Toolbar>
        <ButtonIcon
          label="Inbox"
          isSelected={selectedPane === 'inbox'}
          Icon={HiOutlineInboxArrowDown}
          onClick={() => setSelectedPane('inbox')}
        />
        <ButtonIcon
          label="Archive"
          isSelected={selectedPane === 'archive'}
          Icon={HiOutlineArchiveBox}
          onClick={() => setSelectedPane('archive')}
        />
        <Button
          label="All notes"
          text="All"
          isSelected={selectedPane === 'all'}
          onClick={() => setSelectedPane('all')}
        />
        <ButtonIcon
          label="Trash"
          isSelected={selectedPane === 'trash'}
          Icon={HiOutlineTrash}
          onClick={() => setSelectedPane('trash')}
        />
      </Toolbar>
      <div>
        <Select options={[{ label: 'Option A', value: 'a' }]} />
      </div>
    </>
  );
};
