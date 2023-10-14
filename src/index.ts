import { Plugin } from 'obsidian';

import { ExampleView, VIEW_TYPE_EXAMPLE } from './ExampleView';

export default class KindlePlugin extends Plugin {
  public onload(): void {
    console.log('Drafts plugin: loading plugin', new Date().toLocaleString());

    this.registerView(VIEW_TYPE_EXAMPLE, (leaf) => new ExampleView(leaf));

    this.addRibbonIcon('dice', 'Activate view', async () => {
      await this.activateView();
    });
  }

  async activateView() {
    this.app.workspace.detachLeavesOfType(VIEW_TYPE_EXAMPLE);

    await this.app.workspace.getRightLeaf(false).setViewState({
      type: VIEW_TYPE_EXAMPLE,
      active: true,
    });

    this.app.workspace.revealLeaf(this.app.workspace.getLeavesOfType(VIEW_TYPE_EXAMPLE)[0]);
  }

  public onunload(): void {
    console.log('Drafts plugin: unloading plugin', new Date().toLocaleString());
  }
}
