function toggleTheme() {
      const html = document.documentElement;
      const icon = document.querySelector('#iconBtn i');
      const isDark = html.classList.contains('dark');

      //	(ㆆ _ ㆆ) Toggle the dark class on <html>
      html.classList.toggle('dark');

      // ☜(⌒▽⌒)☞ Change the icon
      if (isDark) {
        icon.classList.remove('fa-sun','text-yellow-500');
        icon.classList.add('fa-moon', 'text-gray-900');
      } else {
        icon.classList.remove('fa-moon', 'text-gray-900');
        icon.classList.add('fa-sun','text-yellow-500');
      }
    }


    document.querySelectorAll('.btn-responsive').forEach(button => {
    const hLine = button.querySelector('.hor-line');
    const vLine = button.querySelector('.ver-line');
    let isOpen = true;

    const myGuns = [
  '(⌐■_■)–︻╦╤─',
  '(☞ﾟ∀ﾟ)☞︻╦̵̵͇̿̿̿̿╤──',
  '︻デ═一',
  '▄︻̷̿┻̿═━一',
  '╾━╤デ╦︻',
  '( ͡° ͜ʖ ͡°)︻╦╤─',
  '(▀̿Ĺ̯▀̿ ̿)︻̷̿┻̿═━一 BANG!',
  '(╯°□°）╯︵ ┻━┻︻デ═一',
  '(⌐■_■)–︻╦╤─ Pew Pew!',
  "(ง'̀-'́)ง︻デ═一",
  '(•_•) /︻╦̵̵͇̿̿̿̿╤──',
  '(¬_¬")︻╦╤─',
  '(¬‿¬)︻╦╤─ Pew',
  '(°ロ°)☝︻╦̵̵͇̿̿̿̿╤──',
  '(☞ຈل͜ຈ)☞︻デ═一 Pew Pew',
  'ヽ༼ ಠ益ಠ ༽ﾉ︻╦╤─ - FIRE!',
  '＼(ﾟｰﾟ＼)︻╦╤─ Pew!',
  '(ง ͠° ͟ل͜ ͡°)ง︻デ═一',
  'ヽ( ͝° ͜ʖ͡°)ﾉ︻╦̵̵͇̿̿̿̿╤── Pew',
  'ಠ_ಠ︻デ═一',
  '(ʘ‿ʘ)╾━╤デ╦︻ Pew',
  'ᕙ(⇀‸↼‶)ᕗ︻╦̵̵͇̿̿̿̿╤──',
  '(ಥ﹏ಥ)︻╦╤─ Pew...',
  '(ノಠ益ಠ)ノ彡︻╦╤─ Pew Pew!',
  'ლ(ಠ益ಠლ)︻デ═一',
  '(ง°ل͜°)ง︻╦̵̵͇̿̿̿̿╤── Boom',
];

const gunSounds = [
  new Audio('gunSound/cinematic-gun.mp3'),
  new Audio('gunSound/plasma-gun-fire.mp3'),
  new Audio('gunSound/gun-fire1.mp3'),
  new Audio('gunSound/laser-gun.mp3'),
  new Audio('gunSound/laser-gun2.mp3'),
  new Audio('gunSound/single-gun-shot.mp3'),
  new Audio('gunSound/ray-gun.mp3'),
  new Audio('gunSound/grapping-gun.mp3'),
]


    
    button.addEventListener('click', () => {
      const randomSound = gunSounds[Math.floor(Math.random() * gunSounds.length)];
    
       const emoji = button.querySelector('.emoji');
      const symbol = button.querySelector('.emoji-symbol');
        if (isOpen) {

          randomSound.play();
          
          ///|\ ^._.^ /|\ Shrink lines
          hLine.classList.replace('w-full', 'w-0');
          vLine.classList.replace('h-full', 'h-0');

          symbol.classList.add('hidden');
          emoji.textContent = myGuns[Math.floor(Math.random() * myGuns.length)];
          emoji.classList.remove('hidden');
          
        } else {
           // ┌( ͝° ͜ʖ͡°)=ε/̵͇̿̿/’̿’̿ ̿   Expand lines
          hLine.classList.replace('w-0', 'w-full');
          vLine.classList.replace('h-0', 'h-full');

          symbol.classList.remove('hidden');
          emoji.classList.add('hidden');
        }
        button.setAttribute('aria-pressed', !isOpen);
        isOpen = !isOpen;
        });
    });

   

const leafBtn = document.getElementById('leafBtn');
const leafIcon = document.getElementById('leafIcon');

let isAutumn = false;

leafBtn.addEventListener('click', ()=> {

  isAutumn = !isAutumn;
  const allseasonBg = document.querySelectorAll('.season-bg');

  allseasonBg.forEach(el=>{
    
    el.classList.remove(isAutumn ? 'spring-mode' : 'autumn-mode');
    el.classList.add(isAutumn ? 'autumn-mode' : 'spring-mode');
  });

  leafIcon.textContent = isAutumn ? "🍁" : "🍀";
  
})

/*leafBtn.addEventListener('click', () => {
  document.body.classList.remove(
    'bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url("https://clipground.com/images/green-leaves-background-clipart-15.jpg")]',
    'bg-cover',
    'bg-center',
    'min-h-screen',
    'rounded-lg',
    'shadow-lg'
  );

  document.body.classList.add(
    'bg-[linear-gradient(rgba(255,77,0,0.4),rgba(252,5,5,0.4)),url("https://clipground.com/images/green-leaves-background-clipart-15.jpg")]',
    'bg-cover',
    'bg-center',
    'min-h-screen',
    'rounded-lg',
    'shadow-lg'
  );
});
*/



  