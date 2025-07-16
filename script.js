/* 
===========================================
   💣 dark/light mode section 
===========================================
*/

function toggleTheme() {
      const html = document.documentElement;
      const icon = document.querySelector('#iconBtn i');
      const isDark = html.classList.contains('dark');

      //	(ㆆ _ ㆆ) Toggle the dark class o <nhtml>
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

/* 
===========================================
    🔫 Gun Section & Horizontal/Vertical Lines 
===========================================
*/
const gunSounds = [
      new Audio('gunSound/cinematic-gun.mp3'),
      new Audio('gunSound/plasma-gun-fire.mp3'),
      new Audio('gunSound/gun-fire1.mp3'),
      new Audio('gunSound/laser-gun.mp3'),
      new Audio('gunSound/laser-gun2.mp3'),
      new Audio('gunSound/single-gun-shot.mp3'),
      new Audio('gunSound/ray-gun.mp3'),
      new Audio('gunSound/grappling-gun.mp3'),
  ];

const myGuns = [
      '(⌐■_■)–︻╦╤─',
      '(☞ﾟ∀ﾟ)☞︻╦̵̵͇̿̿̿̿╤──',
      '︻デ═一',
      '▄︻̷̿┻̿═━一',
      '╾━╤デ╦︻',
      '( ͡° ͜ʖ͡°)︻╦╤─',
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
        'Pew ─╤╦︻(¬‿¬)',
      '──╤̿̿̿̿╵╵╦︻☝(°ロ°)',
      'Pew Pew 一═デ︻☜(ຈل͜ຈ☜)',
      'FIRE! ─╤╦︻ﾉ(༼ ಠ益ಠ ༽ヽ',
      'Pew! ─╤╦︻／(ﾟｰﾟ／)',
      '一═デ︻ง(°͟ل͜°͠ ง)',
      'Pew ──╤̿̿̿̿╵╵╦︻ﾉ( ͝° ͜ʖ͡°)ヽ',
      '一═デ︻ಠ_ಠ',
      'Pew ╾━╤デ╦︻(ʘ‿ʘ)',
      '──╤̿̿̿̿╵╵╦︻ᕗ(‶↼‸↼⇀)ᕙ',
      'Pew... ─╤╦︻(ಥ﹏ಥ)',
      'Pew Pew! ─╤╦︻彡ノ(ಠ益ಠ)ノ',
      'BANG! ━═┻̿︻̷̿( ̿▀̿Ĺ̯▀̿)',
      'Boom ──╤̵̵͇̿̿̿̿╦︻ง(°ل͜°ง)',
      '─╤╦︻( ͡° ͜ʖ͡°)',
      '─╤╦︻–(■_■⌐)',
      '──╤̵̵͇̿̿̿̿╦︻☜(ﾟ∀ﾟ☜)',
      '一═デ︻ง(ง̀-́’)',
      '──╤̵̵͇̿̿̿̿╦︻ \\(•_•)',
      '─╤╦︻("¬_¬)'
    ];

document.querySelectorAll('.btn-responsive').forEach(button => {
  const hLine = button.querySelector('.hor-line');
  const vLine = button.querySelector('.ver-line');
  let isOpen = true;

  button.addEventListener('click', () => {
    const randomSound = gunSounds[Math.floor(Math.random() * gunSounds.length)];
    const emoji = button.querySelector('.emoji');
    const symbol = button.querySelector('.emoji-symbol');
    symbol.classList.add('hidden');

    if (isOpen) {
      symbol.classList.add('hidden');
      randomSound.play();

      hLine.classList.replace('w-full', 'w-0');
      vLine.classList.replace('h-full', 'h-0');

      emoji.classList.remove('hidden');
      emoji.style.display = "inline-block";

      // 🤍 Reset rotation instantly and force reflow
      emoji.style.transition = "none";
      emoji.style.transform = "rotate(0deg)";
      emoji.style.zIndex = '20';
      emoji.offsetWidth;

      // 👁️‍🗨️👁️‍🗨️Animate rotation
      emoji.style.transition = "transform 0.6s ease";
      emoji.style.transform = "rotate(1080deg)";
 
      // 👁️‍🗨️👁️‍🗨️Get emoji's position relative to viewport and page
      const rect = emoji.getBoundingClientRect();
      const startX = rect.left + window.scrollX + emoji.offsetWidth /  2;
      const startY = rect.top + window.scrollY + emoji.offsetHeight / 2;

      const baseAngle = Math.random() * 720;

      for (let i = 0; i < 6; i++) {
        const smoke = document.createElement('span');
        smoke.classList.add('smoke', 'absolute', 'text-sm');
        smoke.textContent = '💨💥';
      

        // 💡Position at center
        smoke.style.left = `${startX}px`;
        smoke.style.top = `${startY}px`;
        smoke.style.zIndex = '40';

        document.body.appendChild(smoke);

        const angleDeg = baseAngle + i * 60;
        const angleRad = angleDeg * Math.PI / 180;
        const offsetX = Math.cos(angleRad) * 150;
        const offsetY = Math.sin(angleRad) * 150;

        let startTime = null;
        const duration = 1500;

        function animateSmoke(timestamp) {
          if (!startTime) startTime = timestamp;
          const elapsed = timestamp - startTime;
          const progress = Math.min(elapsed / duration, 1.5);

          const currentX = startX + offsetX * progress;
          const currentY = startY + offsetY * progress;
          smoke.style.left = `${currentX}px`;
          smoke.style.top = `${currentY}px`;
          smoke.style.opacity = `${1 - progress}`;

          if (progress < 1.5) {
            requestAnimationFrame(animateSmoke);
          } else {
            smoke.remove();
          }
        }

      requestAnimationFrame(animateSmoke);
}


      
      emoji.textContent = myGuns[Math.floor(Math.random() * myGuns.length)];

      // 💃 Reset emoji rotation after animation completes
      const resetSpin = () => {
        emoji.style.transition = "none";
        emoji.style.transform = "rotate(0deg)";
        emoji.offsetWidth;
        emoji.style.transition = "transform 0.6s ease";
        emoji.removeEventListener('transitionend', resetSpin);
      };

      emoji.addEventListener('transitionend', resetSpin);
    } else {
      hLine.classList.replace('w-0', 'w-full');
      vLine.classList.replace('h-0', 'h-full');
    }

    button.setAttribute('aria-pressed', !isOpen);
    isOpen = !isOpen;
  });
});

/* 
===========================================
    💜💜Sololearn screenshot images
===========================================
*/

const images = [
    'images/instruction.jpg',
    'images/first.jpg',
    'images/second.jpg',
    'images/third.jpg',
    'images/fouth.jpg',
    'images/fifth.jpg',
    'images/sixth.jpg',
    'images/seventh.jpg'
];
let currentIndex = 0;
const img = document.getElementById('sliderImage');
const sliderWrapper = document.getElementById('sliderWrapper');
const sliderImg = document.getElementById('sliderImage');
const streakBtn = document.querySelector('[data-streak="streak"]');

streakBtn.addEventListener('click',() => {
  currentIndex = 0;
  sliderImg.src = images[currentIndex];
  sliderWrapper.classList.remove('hidden');
  sliderWrapper.classList.add('opacity-100');
  
});

let startY = 0;

sliderImg.addEventListener('touchstart', (e)=> {
  e.stopPropagation();
  startY = e.touches[0].clientY;
  
});

sliderImg.addEventListener('touchend', (e)=> {
  const endY = e.changedTouches[0].clientY;
  const distance = startY - endY;

  if (distance > 50) slideNextImage(); 
});

sliderImg.addEventListener('mousedown', (e)=> {
  e.stopPropagation();
  startY = e.clientY;
});

sliderImg.addEventListener('mouseup', (e)=> {
  const endY = e.clientY;
  const distance = startY - endY;
  if (distance >= 0) {
    slideNextImage();
  }
});

const slideNextImage =  () => {
  sliderImg.classList.add('opacity-0', '-translate-y-10');

  setTimeout(() => {
    currentIndex++;
    if (currentIndex >= images.length) {
      sliderWrapper.classList.add('hidden');
      sliderImg.classList.remove('-translate-y-10','opacity-0')
      return;
    }

    sliderImg.src = images[currentIndex];
    sliderImg.classList.remove('-translate-y-10');
    sliderImg.classList.add('translate-y-10');

    setTimeout(()=>{
      sliderImg.classList.remove('opacity-0');
      sliderImg.classList.remove('translate-y-10');
      sliderImg.classList.add('opacity-100');
    }, 50);
  }, 500);

}

sliderWrapper.addEventListener('touchstart', ()=>{
  sliderWrapper.classList.add('hidden')
});
sliderWrapper.addEventListener('mousedown', ()=>{
  sliderWrapper.classList.add('hidden')
});

   
/* 
===========================================
    🍁🍀season mode section 
===========================================
*/
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





  