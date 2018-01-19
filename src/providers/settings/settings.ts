import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SettingsProvider {

  public settings: Settings = {
    url: 'http://localhost'
  }

}

export interface Settings {
  url: string;
}
