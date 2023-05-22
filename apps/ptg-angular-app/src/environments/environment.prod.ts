const baseUrl = 'http://20.114.244.229:1337/';
export const environment = {
  production: true,
  proj:"ptg-angular",
  login: `${baseUrl}auth/local`,
  signup: `${baseUrl}auth/local/register`,
  users: `${baseUrl}users`,
  URLToExclude: ['local', 'register'],
};
