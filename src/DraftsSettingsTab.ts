import _ from 'lodash';
import { App, PluginSettingTab, Setting } from 'obsidian';

import KindlePlugin from './';

type AdapterFile = {
  type: 'folder' | 'file';
};

export interface Settings {
  inboxFolder?: string;
  archiveFolder?: string;
}

export const DEFAULT_SETTINGS: Settings = {};

export class DraftsSettingsTab extends PluginSettingTab {
  constructor(
    app: App,
    private plugin: KindlePlugin,
  ) {
    super(app, plugin);
  }

  display(): void {
    this.containerEl.empty();

    this.inboxFolder();
    this.archiveFolder();
  }

  private inboxFolder() {
    new Setting(this.containerEl)
      .setName('Inbox folder location')
      .setDesc('Vault folder to use as inbox for drafts')
      .addDropdown((dropdown) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
        const files = (this.app.vault.adapter as any).files as AdapterFile[];

        const folders = _.pickBy(files, (val) => {
          return val.type === 'folder';
        });

        Object.keys(folders).forEach((val) => {
          dropdown.addOption(val, val);
        });

        return dropdown.setValue(this.plugin.settings.inboxFolder).onChange(async (value) => {
          this.plugin.settings.inboxFolder = value;
          await this.plugin.saveSettings();
        });
      });
  }

  private archiveFolder() {
    new Setting(this.containerEl)
      .setName('Archive folder location')
      .setDesc('Vault folder to use as archive for drafts')
      .addDropdown((dropdown) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
        const files = (this.app.vault.adapter as any).files as AdapterFile[];

        const folders = _.pickBy(files, (val) => {
          return val.type === 'folder';
        });

        Object.keys(folders).forEach((val) => {
          dropdown.addOption(val, val);
        });

        return dropdown.setValue(this.plugin.settings.archiveFolder).onChange(async (value) => {
          this.plugin.settings.archiveFolder = value;
          await this.plugin.saveSettings();
        });
      });
  }
}
