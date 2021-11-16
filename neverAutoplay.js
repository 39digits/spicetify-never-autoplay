// NAME: Never Autoplay
// AUTHOR: 39digits
// DESCRIPTION: Never Autoplay at the end of an album

(function NeverAutoplay() {
  if (!Spicetify.LocalStorage) {
    setTimeout(NeverAutoplay, 1000);
    return;
  }

  let isEnabled = Spicetify.LocalStorage.get('NeverAutoplay') === '1';

  new Spicetify.Menu.Item('Never Autoplay', isEnabled, (self) => {
    isEnabled = !isEnabled;
    Spicetify.LocalStorage.set('NeverAutoplay', isEnabled ? '1' : '0');
    self.setState(isEnabled);
  }).register();

  Spicetify.Player.addEventListener('songchange', () => {
    if (!isEnabled) return;
    const data = Spicetify.Player.data || Spicetify.Queue;
    if (!data) return;

    if (data.track.provider === 'autoplay') {
      Spicetify.Player.pause();
    }
  });
})();
