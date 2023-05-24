import * as express from 'express';
import * as path from 'path';
import * as url from 'url';

const port = process.env.port || 8080;
const app = express();
app.use(express.json());

app.all('/*', function (req: any, res: any, next: any) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Key, Authorization'
  );
  res.header(
    'Access-Control-Allow-Methods',
    'POST, GET, OPTIONS, PUT, DELETE, PATCH'
  );
  next();
});

// allow static content to render
app.use('/', express.static(path.join(__dirname, 'public')));

// main routes
app.get('/api', (req: any, res: any) => {
  res.json({ message: 'Welcome to interview-screening-backend!' });
});

// fallback when refreshed browser
app.get('*', (req: express.Request, res: express.Response) => {
  const pathname = url.parse(req.url).pathname;
  const pathArr = pathname.split('/');
  const apps = {
    'ptg-angular-app': 'ptg-angular-app',
    'ptg-react-app': 'ptg-react-app',
  };
  const projectName = pathArr[1] && apps[pathArr[1]];
  if (projectName) {
    res.sendFile(path.join(__dirname, `public/${projectName}`) + '/index.html');
  } else {
    res.sendFile(path.join(__dirname, ``) + '/index.html');
  }
});
const server = app.listen(port, async () => {
  console.log('listening on', port);
});
server.on('error', console.error);