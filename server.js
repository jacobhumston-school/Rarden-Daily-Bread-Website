import express from 'express';
const app = express();
app.use('/', express.static('src/', { extensions: ['html'] }));
app.get('/', function (_, response) {
    response.redirect('/home');
});
app.listen(80, () => console.log('Server is listening on port 80.'));
