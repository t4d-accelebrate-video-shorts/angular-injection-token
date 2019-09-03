import { InjectionToken, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ConsoleLogger } from '../services/console-logger.service';
import { HttpLogger } from '../services/http-logger.service';

export interface ILogger {
  info(msg: string): void;
  warn(msg: string): void;
  error(msg: string): void;
}

export const LoggerToken = new InjectionToken<ILogger>(
  'Logger', {
    providedIn: 'root',
    factory: () => new HttpLogger(inject(HttpClient)),
  });
