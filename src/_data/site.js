const routes = {
  home: '/',
  services: '/services/',
  tariffs: '/tariffs/',
  documents: '/documents/',
  news: '/news/',
  contacts: '/contacts/',
  admin: '/admin/',
};

const navigation = {
  items: [
    { title: 'Послуги', url: routes.services },
    { title: 'Тарифи', url: routes.tariffs },
    { title: 'Документи', url: routes.documents },
    { title: 'Новини', url: routes.news },
    { title: 'Контакти', url: routes.contacts },
  ],
};

const org = {
  name: 'КП-Сервіс',
  tagline: 'Надійні комунальні послуги для громади',
  description:
    'Комунальне підприємство громади м. Порожньо. Основні напрями роботи: постачання води, централізоване водовідведення, вивезення ТПВ, викачування нечистот (септиків) та управління багатоквартирними будинками.',
  phone: '+380481234567',
  email: 'info@kp-service.local',
  address: 'вул. Центральна, 45, м. Порожньо',
  hours: 'Пн-Пт: 08:00-17:00, Сб: 09:00-13:00',
};

const tariffsUpdated = '2026-04-20';

export default { routes, navigation, org, tariffsUpdated };
