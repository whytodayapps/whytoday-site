const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');
if (toggle && navigation) {
  const close = () => { navigation.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.textContent = 'Menu'; };
  toggle.addEventListener('click', () => {
    const open = navigation.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Close' : 'Menu';
  });
  navigation.addEventListener('click', event => { if (event.target.closest('a')) close(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && navigation.classList.contains('open')) { close(); toggle.focus(); } });
  matchMedia('(min-width: 761px)').addEventListener('change', event => { if(event.matches) close(); });
}
