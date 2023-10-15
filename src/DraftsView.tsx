import { ItemView, WorkspaceLeaf } from 'obsidian';
import React, { StrictMode } from 'react';
import { Root, createRoot } from 'react-dom/client';
import { Tree } from './primitives';
import { DraftsToolbar } from './components';

export const DRAFTS_VIEW_TYPE = 'drafts-view';

export class DraftsView extends ItemView {
  root: Root | null = null;

  constructor(leaf: WorkspaceLeaf) {
    super(leaf);
  }

  getViewType() {
    return DRAFTS_VIEW_TYPE;
  }

  getDisplayText() {
    return 'Drafts view';
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async onOpen() {
    this.root = createRoot(this.containerEl.children[1]);
    this.root.render(
      <StrictMode>
        <DraftsToolbar />
        <Tree />
      </StrictMode>,
    );
  }

  async onClose() {
    this.root?.unmount();
  }
}
