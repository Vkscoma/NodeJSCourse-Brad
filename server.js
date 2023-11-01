const http = require('http'); //core node module - no need to install
const todos = [
    { id: 1, text: 'Wash dishes' },
    { id: 234, text: 'Do laundry' },
    { id: 2, text: 'Take shower' }
];

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('X-Request-Test-ID', 'test');
    res.write('<h1>Reached Page</h1>')
    res.end(JSON.stringify({
        success: true,
        data: todos
    }));
});

const PORT = 4500;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
