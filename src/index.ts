import * as dotenv from 'dotenv';
dotenv.config();

import { Server } from 'net';
import { createServer } from './server';
import mediatorConfig, { urn } from './assets/mediatorConfig/mediator.json';
const utils = require('openhim-mediator-utils');
import Logger from './utils/logger';
import AppConfig from './config/appConfig';

const PORT = AppConfig.app.port;
const openhimConfig = {
    username: 'root@openhim.org',
    password: 'password',
    // apiURL: 'https://openhim-core:8080',
    apiURL: 'https://localhost:8080',
    trustSelfSigned: true,
    urn
};

export function setUpMediator(): void {
    utils.registerMediator(
        openhimConfig,
        mediatorConfig,
        (err: Error | null) => {
            if (err) {
                throw new Error(
                    `Failed to register mediator. Check your Config. ${err}`
                );
            }

            console.log('Successfully registered mediator!');

            utils.fetchConfig(
                openhimConfig,
                (err: Error | null, initialConfig: any) => {
                    if (err) {
                        throw new Error(
                            `Failed to fetch initial config. ${err}`
                        );
                    }
                    console.log(
                        'Initial Config: ',
                        JSON.stringify(initialConfig)
                    );

                    const emitter = utils.activateHeartbeat(openhimConfig);

                    emitter.on('error', (err: Error) => {
                        console.error(`Heartbeat failed: ${err}`);
                    });

                    emitter.on('config', (newConfig: any) => {
                        console.log(
                            'Received updated config:',
                            JSON.stringify(newConfig)
                        );
                    });
                }
            );
        }
    );
}

function startServer(): Server {
    const app = createServer();
    // mediatorSetup();
    setUpMediator();

    return app.listen(PORT, () => {
        Logger.debug(
            `App ${AppConfig.app.name} with api version ${AppConfig.app.apiVersion} is starting`
        );
        Logger.debug(`App is listening on port ${PORT}`);
    });
}

startServer();
