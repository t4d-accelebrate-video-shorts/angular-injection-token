import { InjectionToken } from '@angular/core';

import { ConsoleLogger } from '../services/console-logger.service';
import { HttpLogger } from '../services/http-logger.service';

export interface ILogger {
  info(msg: string): void;
  warn(msg: string): void;
  error(msg: string): void;
}
