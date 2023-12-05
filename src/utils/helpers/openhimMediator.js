// import mediatorConfig, { urn } from './assets/mediatorConfig/mediator.json';
// import {
//     registerMediator,
//     activateHeartbeat,
//     fetchConfig
// } from 'openhim-mediator-utils';
//
// const openhimConfig = {
//     username: 'root@openhim.org',
//     password: 'password',
//     apiURL: 'https://localhost:8080',
//     trustSelfSigned: true,
//     urn
// };
//
// export function setUpMediator() {
//     registerMediator(openhimConfig, mediatorConfig, (err) => {
//         if (err) {
//             throw new Error(
//                 `Failed to register mediator. Check your Config. ${err}`
//             );
//         }
//
//         console.log('Successfully registered mediator!');
//
//         fetchConfig(openhimConfig, (err, initialConfig) => {
//             if (err) {
//                 throw new Error(`Failed to fetch initial config. ${err}`);
//             }
//             console.log('Initial Config: ', JSON.stringify(initialConfig));
//
//             const emitter = activateHeartbeat(openhimConfig);
//
//             emitter.on('error', (err) => {
//                 console.error(`Heartbeat failed: ${err}`);
//             });
//
//             emitter.on('config', (newConfig) => {
//                 console.log(
//                     'Received updated config:',
//                     JSON.stringify(newConfig)
//                 );
//             });
//         });
//     });
// }
// // const setUpMediator = () => {
// //     registerMediator(openhimConfig, mediatorConfig, (err) => {
// //         if (err) {
// //             throw new Error(
// //                 `Failed to register mediator. Check your Config. ${err}`
// //             );
// //         }
// //
// //         console.log('Successfully registered mediator!');
// //
// //         fetchConfig(openhimConfig, (err, initialConfig) => {
// //             if (err) {
// //                 throw new Error(`Failed to fetch initial config. ${err}`);
// //             }
// //             console.log('Initial Config: ', JSON.stringify(initialConfig));
// //
// //             const emitter = activateHeartbeat(openhimConfig);
// //
// //             emitter.on('error', (err) => {
// //                 console.error(`Heartbeat failed: ${err}`);
// //             });
// //
// //             emitter.on('config', (newConfig) => {
// //                 console.log(
// //                     'Received updated config:',
// //                     JSON.stringify(newConfig)
// //                 );
// //             });
// //         });
// //     });
// // };
