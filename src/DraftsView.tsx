import { ItemView, WorkspaceLeaf, Vault } from 'obsidian';
import React, { StrictMode } from 'react';
import { Root, createRoot } from 'react-dom/client';
import { Tree } from './primitives';
import { DraftsToolbar } from './components';
import { Settings } from './DraftsSettingsTab';

export const DRAFTS_VIEW_TYPE = 'drafts-view';

export class DraftsView extends ItemView {
  root: Root | null = null;

  constructor(
    leaf: WorkspaceLeaf,
    private vault: Vault,
    private settings: Settings,
  ) {
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
    const hady = this.vault
      .getMarkdownFiles()
      .filter((f) => f.path.startsWith(this.settings.inboxFolder))
      .map((f) => ({
        title: f.basename,
        contentPreview: 'Preview content',
        tags: [],
        lastModifiedDate: new Date(),
      }));

    this.root = createRoot(this.containerEl.children[1]);
    this.root.render(
      <StrictMode>
        <DraftsToolbar />
        <Tree inbox={hady} />
      </StrictMode>,
    );
  }

  async onClose() {
    this.root?.unmount();
  }
}
