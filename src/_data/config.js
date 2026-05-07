const baseURL = process.env.NODE_ENV === 'production' ? '/kp-web' : '';

const routes = {
  home: baseURL + '/',
  services: baseURL + '/services/',
  tariffs: baseURL + '/tariffs/',
  documents: baseURL + '/documents/',
  news: baseURL + '/news/',
  contacts: baseURL + '/contacts/',
  admin: baseURL + '/admin/',
};

export default { baseURL, routes };
