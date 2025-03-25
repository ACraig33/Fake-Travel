     const themeToggle= document.querySelector(".dark-button");
      const body= document.body;
      
      themeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      navigation.classList.toggle('dark-mode');
      header.classList.toggle('dark-mode');
      });
		