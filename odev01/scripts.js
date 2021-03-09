const cards = document.querySelectorAll('.memory-card');


/*
**************************************************
Bu Ödev https://marina-ferreira.github.io/projects/js/memory-game/ linkindeki 
hafiza oyunu kodları değiştirilerek ve 1.hafta ders dokumanlarından faydalanılarak yapılmıştır.
**************************************************
*/

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let secimhakki = 2;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');
firstCard = this;//first card this olmadan let isMatch = firstCard.dataset.framework === "True" çalışmıyor
 
 /*if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }*/ // değer dönmesi için 2. kartın dönmesini bekleyen kod bloğuydu bizim projede 1 kart dönmeli o yüzden kapandı

  //secondCard = this; bunada gerek yok 2. kart için
  checkForMatch();
}

function checkForMatch() {
	//alert("fonksiyon çalıştı");
  let isMatch = firstCard.dataset.framework === "True";/*burası 2 kartın datasetleri eşitmi diye bakıldığı yerdi buna 
  true değeri vererek kediyi açıp açmadıpımı kontrolediyorum index sayfasında data-framework değiştirdim*/
  if (isMatch){
	  //alert("buldunn kediyi")
	  let html = "<p>Tebrikler buldunuz: "+isMatch+":::</p>\n";
	  //html+= "<p> Yeniden başlamak için tıklayınız.</p>\n";
	  html+= "<span onclick='sayfayenile()'> yeniden başlamak için tıklayınız</span>";
	  const quizDiv = document.getElementById("quizDivId");
    quizDiv.innerHTML = html;
  }else {
        //alert('Yatırım tavsiyesi değildir');
		let html = "<p>Kaybettin ama Tekrar deneyebilirsin: "+isMatch+":::</p>\n";
		html+= "<span onclick='sayfayenile()'> yeniden başlamak için tıklayınız</span>";
		const quizDiv = document.getElementById("quizDivId");
    quizDiv.innerHTML = html;
    }
  //isMatch ? disableCards() : unflipCards(); // burayı kapatarak kartların tekrar dönmesini engellemiş olduk
}
function sayfayenile() {var yenidenbaşla = window.location.reload();}//yeniden başla linki için

function disableCards() { //hafıza oyunu methodu kullanılmıyor benim ödevimde
  //firstCard.removeEventListener('click', flipCard);
  //secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() { //hafıza oyunu methodu kullanılmuyor benim ödevimde
  //lockBoard = true;

  setTimeout(() => {
  //  firstCard.classList.remove('flip');
    //secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() { // hafıza oyunu methodu kullanılmıyor benim ödevimde
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {//bu ne işe yarıyor anlamadım bi yerde de çağırılmıyor
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 3);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));