import { CachedMetadata, Plugin, TAbstractFile, TFile } from 'obsidian';

import { DEFAULT_SETTINGS, DraftsSettingsTab, Settings } from './DraftsSettingsTab';
import { DRAFTS_VIEW_TYPE, DraftsView } from './DraftsView';

export default class KindlePlugin extends Plugin {
  public settings: Settings;

  public onload = async (): Promise<void> => {
    console.log('Drafts plugin: loading plugin', new Date().toLocaleString());

    this.registerView(
      DRAFTS_VIEW_TYPE,
      (leaf) => new DraftsView(leaf, this.app.vault, this.settings),
    );

    this.addSettingTab(new DraftsSettingsTab(this.app, this));

    await this.loadSettings();

    this.addRibbonIcon('dice', 'Activate Drafts view', async () => {
      await this.activateView();
    });

    this.registerEvent(this.app.metadataCache.on('changed', this.metadataCacheChange));
    this.registerEvent(this.app.vault.on('rename', this.fileRenameChange));
  };

  private metadataCacheChange = (file: TFile, data: string, cache: CachedMetadata) => {
    console.log('Metadata changed', file, data, cache);
  };

  private fileRenameChange = (file: TAbstractFile, oldPath: string) => {
    console.log('File rename', file, oldPath);
  };

  public onunload = (): void => {
    console.log('Drafts plugin: unloading plugin', new Date().toLocaleString());
  };

  private activateView = async () => {
    this.app.workspace.detachLeavesOfType(DRAFTS_VIEW_TYPE);

    await this.app.workspace.getLeftLeaf(false).setViewState({
      type: DRAFTS_VIEW_TYPE,
      active: true,
    });

    this.app.workspace.revealLeaf(this.app.workspace.getLeavesOfType(DRAFTS_VIEW_TYPE)[0]);
  };

  private loadSettings = async () => {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData()) as Settings;
  };

  public saveSettings = async () => {
    await this.saveData(this.settings);
  };
}
