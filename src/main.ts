// https://github.com/markwylde/infigrid

import '../styles/main.scss';
import { ConnectionManager } from './connection-manager';
import { Scene } from './scene';

const connectionManager = new ConnectionManager(import.meta.env.VITE_WEBSOCKET_URL);

connectionManager.on('open', () => {
    connectionManager.send({ type: 'PING', data: 'Hello there', });
});

connectionManager.on('message', (data) => {
    console.log('Message:', data);
});

const scene = new Scene();
scene.mount('root');
