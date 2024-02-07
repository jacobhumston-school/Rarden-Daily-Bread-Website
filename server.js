import express from 'express';
const app = express();
app.use('/', function (request, _, next) {
    console.log(`Request ${request.method} for ${request.url}`);
    next();
});
app.use('/', express.static('src/', { extensions: ['html'] }));
app.listen(80, () => console.log('Server is listening on port 80.'));
