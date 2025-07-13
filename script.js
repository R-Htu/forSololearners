function toggleTheme() {
      const html = document.documentElement;
      const icon = document.querySelector('#iconBtn i');
      const isDark = html.classList.contains('dark');

      //	(ㆆ _ ㆆ) Toggle the dark class on <html>
      html.classList.toggle('dark');

      // ☜(⌒▽⌒)☞ Change the icon
      if (isDark) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
      } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
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
      '( ͡° ͜ʖ ͡°)╭∩╮︻╦╤─',
      '(▀̿Ĺ̯▀̿ ̿)︻̷̿┻̿═━一 BANG!',
      '(╯°□°）╯︵ ┻━┻︻デ═一',
      '(⌐■_■)–︻╦╤─ Pew Pew!',
      "(ง'̀-'́)ง︻デ═一",
      '(•_•) /︻╦̵̵͇̿̿̿̿╤──',
      '(¬_¬")︻╦╤─'
    ];


    button.addEventListener('click', () => {
        if (isOpen) {
          ///|\ ^._.^ /|\ Shrink lines
          hLine.classList.replace('w-full', 'w-0');
          vLine.classList.replace('h-full', 'h-0');
          button.textContent = `${myGuns[Math.floor(Math.random()*myGuns.length)]}`;
          
        } else {
           // ┌( ͝° ͜ʖ͡°)=ε/̵͇̿̿/’̿’̿ ̿   Expand lines
          hLine.classList.replace('w-0', 'w-full');
          vLine.classList.replace('h-0', 'h-full');
        }
        button.setAttribute('aria-pressed', !isOpen);
        isOpen = !isOpen;
        });
    });



  