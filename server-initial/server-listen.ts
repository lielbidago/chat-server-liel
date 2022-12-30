import app from './chat-app-server';

app.listen(3060, '0.0.0.0', () => {
    console.log('Chat-Server is running..');
});