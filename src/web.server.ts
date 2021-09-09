import * as NodeHttp from 'http';
import { Defer } from './shared';

import * as KrixModule from '@krix/module';

@KrixModule.Dependency({ singletone: false })
export class WebServer {
  private server: NodeHttp.Server;

  constructor () {
    this.server = NodeHttp.createServer((req, resp) => {
      this.requestListener(req, resp);
    });
  }

  /**
   * Handles `request` events from HTTP server.
   *
   * @private
   * @param  {NodeHttp.IncomingMessage} req
   * @param  {NodeHttp.ServerResponse} resp
   * @return {void}
   */
  private requestListener (
    req: NodeHttp.IncomingMessage,
    resp: NodeHttp.ServerResponse,
  ): void {
  }

  /**
   * Starts HTTP server.
   *
   * @param  {number} port
   * @return {Promise<void>}
   */
  async listen (
    port: number,
  ): Promise<void> {
    const defer = Defer.create();
    this.server.listen(port, 'localhost', () => {
      defer.resolve();
    });
    await defer.wait();
  }
}
