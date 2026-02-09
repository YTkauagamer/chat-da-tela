// Configuração de conexão com o seu canal
const client = new tmi.Client({
    connection: {
        secure: true,
        reconnect: true
    },
    channels: ['youtubekaua']
});

client.connect();

const gifElement = document.getElementById('gif-display');

// Adicione aqui seus comandos e os links dos GIFs
const commands = {
    '!zap': 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGJmZzZidm5mZzZidm5mZzZidm5mZzZidm5mZzZidm5mZzZidm5mJmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/3o7TKMGpxxyDQYXrJC/giphy.gif',
    '!hype': 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGJmZzZidm5mZzZidm5mZzZidm5mZzZidm5mZzZidm5mZzZidm5mJmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/l41lTjJp9N7Yy8uE8/giphy.gif'
};

client.on('message', (channel, tags, message, self) => {
    if (self) return; // Ignora mensagens do próprio bot

    const cmd = message.toLowerCase().trim();

    if (commands[cmd]) {
        // Mostra o GIF
        gifElement.src = commands[cmd];
        gifElement.style.display = 'block';

        // Esconde o GIF após 5 segundos
        setTimeout(() => {
            gifElement.style.display = 'none';
            gifElement.src = ''; 
        }, 5000);
    }
});

