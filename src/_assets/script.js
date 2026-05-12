// header burger
const navBurger = document.querySelector('.nav-burger');
const navList = document.querySelector('.nav-list');
if (navBurger && navList) {
  navBurger.addEventListener('click', function () {
    const expanded = navBurger.getAttribute('aria-expanded') === 'true';
    navBurger.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    navBurger.setAttribute(
      'aria-label',
      expanded ? 'Відкрити меню' : 'Закрити меню',
    );

    navList.classList.toggle('is-open');
  });

  navList.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navBurger.setAttribute('aria-expanded', 'false');
      navList.classList.remove('is-open');
    });
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      navBurger.setAttribute('aria-expanded', 'false');
      navList.classList.remove('is-open');
    }
  });
}

// redirect gh Oauth token to CMS admin interface
const isOnAdminRoute = window.location.pathname.indexOf('/admin') === 0;

function extractIdentityToken(query, hash) {
  const pattern =
    /(invite_token|confirmation_token|recovery_token|email_change_token)=/;
  if (!pattern.test(query) && !pattern.test(hash)) return null;

  const source = query && query !== '?' ? query : hash || '';
  return source ? source.substring(1) : '';
}

if (!isOnAdminRoute) {
  const token = extractIdentityToken(
    window.location.search,
    window.location.hash,
  );
  if (token) {
    window.location.replace('/admin/?' + token);
  }
}
