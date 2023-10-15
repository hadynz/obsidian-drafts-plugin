import { Plugin } from 'obsidian';

import { DRAFTS_VIEW_TYPE, DraftsView } from './DraftsView';

export default class KindlePlugin extends Plugin {
  public onload(): void {
    console.log('Drafts plugin: loading plugin', new Date().toLocaleString());

    this.registerView(DRAFTS_VIEW_TYPE, (leaf) => new DraftsView(leaf));

    this.addRibbonIcon('dice', 'Activate view', async () => {
      await this.activateView();
    });
  }

  async activateView() {
    this.app.workspace.detachLeavesOfType(DRAFTS_VIEW_TYPE);

    await this.app.workspace.getRightLeaf(false).setViewState({
      type: DRAFTS_VIEW_TYPE,
      active: true,
    });

    this.app.workspace.revealLeaf(this.app.workspace.getLeavesOfType(DRAFTS_VIEW_TYPE)[0]);
  }

  public onunload(): void {
    console.log('Drafts plugin: unloading plugin', new Date().toLocaleString());
  }
}
