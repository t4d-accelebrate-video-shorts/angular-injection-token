import { Injectable } from '@angular/core';

import { ILogger } from '../models/Logger';
import { LogLevel, LogEntry } from '../models/LogEntry';

@Injectable({
  providedIn: 'root',
})
export class ConsoleLogger implements ILogger {

  private log(logEntry: LogEntry) {
    console.log(logEntry.toString());
  }

  public info(msg: string) {
    this.log(new LogEntry(msg));
  }

  public warn(msg: string) {
    this.log(new LogEntry(msg, LogLevel.Warn));
  }

  public error(msg: string) {
    this.log(new LogEntry(msg, LogLevel.Error));
  }
}
