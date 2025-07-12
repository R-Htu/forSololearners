function toggleTheme() {
      const html = document.documentElement;
      const icon = document.querySelector('#iconBtn i');
      const isDark = html.classList.contains('dark');

      // Toggle the dark class on <html>
      html.classList.toggle('dark');

      // Change the icon
      if (isDark) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
      } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
      }
    }