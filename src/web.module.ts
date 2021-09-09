import * as KrixModule from '@krix/module';

import { Router } from './router';
import { WebServer } from './web.server';

export const kxWebModule = new KrixModule.KxModule({
  dependencies: [
    Router,
    WebServer,
  ],
});
