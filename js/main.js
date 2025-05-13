
    onload = () => {
      const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");

        const titles = (' Read This if you get tired').split('');
        const titleElement = document.getElementById('title');
        let index = 0;

 function play() {
          //Link Audio Bisa Diganti
          var audio = new Audio('anchor.mp3');
          audio.play();
        }

        function appendTitle() {
          if (index < titles.length) {
            titleElement.innerHTML += titles[index];
            index++;
            setTimeout(appendTitle, 300); // 300ms delay per huruf
          } else {
            // Setelah teks utama selesai, tambahkan subtitle kecil
          const subtitle = document.createElement('p');
subtitle.innerHTML = 
  "You give your all to everyone you meet,<br>" +
  "With a heart so pure, so fiercely sweet.<br>" +
  "For all you give, you deserve much more,<br>" +
  "A brighter path, a kinder shore.<br>" +
  "You're strength itself, the truest test—<br>" +
  "The strongest soul among the best.";
subtitle.style.fontSize = '20px';
subtitle.style.marginTop = '2px';
subtitle.style.color = '#fff';

            // Menambahkan subtitle di bawah #title
            titleElement.appendChild(subtitle);
          }
        }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
