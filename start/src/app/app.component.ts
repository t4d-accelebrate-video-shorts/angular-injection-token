import { Component, Inject } from '@angular/core';

// import { ILogger } from './models/Logger';
import { ConsoleLogger } from './services/console-logger.service';
// import { HttpLogger } from './services/http-logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private logger: ConsoleLogger) {
    this.logger.info('test');
  }
}
