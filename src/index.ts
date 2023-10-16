import { Plugin } from 'obsidian';

import { DEFAULT_SETTINGS, DraftsSettingsTab, Settings } from './DraftsSettingsTab';
import { DRAFTS_VIEW_TYPE, DraftsView } from './DraftsView';

export default class KindlePlugin extends Plugin {
  public settings: Settings;

  public async onload(): Promise<void> {
    console.log('Drafts plugin: loading plugin', new Date().toLocaleString());

    this.registerView(DRAFTS_VIEW_TYPE, (leaf) => new DraftsView(leaf));

    this.addSettingTab(new DraftsSettingsTab(this.app, this));

    await this.loadSettings();
    await this.activateView();
  }

  public onunload(): void {
    console.log('Drafts plugin: unloading plugin', new Date().toLocaleString());
  }

  private async activateView() {
    this.app.workspace.detachLeavesOfType(DRAFTS_VIEW_TYPE);

    await this.app.workspace.getLeftLeaf(false).setViewState({
      type: DRAFTS_VIEW_TYPE,
      active: true,
    });

    this.app.workspace.revealLeaf(this.app.workspace.getLeavesOfType(DRAFTS_VIEW_TYPE)[0]);
  }

  private async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData()) as Settings;
  }

  public async saveSettings() {
    await this.saveData(this.settings);
  }
}
