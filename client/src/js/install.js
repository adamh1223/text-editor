const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  butInstall.classList.toggle('hidden', false);
  butInstall.addEventListener('click', async () => {
    butInstall.classList.toggle('hidden', true);
    event.prompt();
    const { outcome } = await event.userChoice;
    console.log(`User response to install prompt: ${outcome}`);
  });
});

// Handler for the `appinstalled` event
window.addEventListener('appinstalled', () => {
  console.log('PWA was installed');
});
