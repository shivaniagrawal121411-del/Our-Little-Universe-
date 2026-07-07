

/* ======================================================
   OUR LITTLE UNIVERSE ❤️
   JavaScript
   ====================================================== */


/* ===============================
   Global Variables
================================ */

let reasonIndex = 0;
let taps = 0;
let countdownInterval;


/* ===============================
   Helper Function
================================ */

function setContent(html){

    const content = document.getElementById("content");

    content.innerHTML = html;

    const card = content.querySelector(".card");

    if(card){

        card.animate(
            [
                {
                    opacity:0,
                    transform:"translateY(25px)"
                },
                {
                    opacity:1,
                    transform:"translateY(0)"
                }
            ],
            {
                duration:500,
                easing:"ease"
            }
        );

    }

}


/* ===============================
   Enter Universe
================================ */

function enterUniverse(){

    document.querySelector(".intro").style.display="none";

    document
    .getElementById("universe")
    .classList
    .remove("hidden");


    createHearts();

}


/* ===============================
   Floating Hearts
================================ */

function createHearts(){

    for(let i=0;i<20;i++){

        const heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML="❤️";

        heart.style.left=Math.random()*100+"%";

        heart.style.animationDuration=
        (3+Math.random()*3)+"s";


        document.body.appendChild(heart);


        setTimeout(()=>{

            heart.remove();

        },5000);

    }

}


/* ===============================
   Bambolina
================================ */

function showBambolina(){

setContent(`

<div class="card">

<h2>🤫 Secret Transmission...</h2>

<p>

🥺 Bambolina is sad...

<br><br>

✨ Bambolina wants...

<br>

💃 DAGMAGDOLA 💃

<br>

DAGMAG DOLA!!

<br><br>

🤣 WALLAHHH!!

<br><br>

❤️ Babbu is always here for Bambolina.

</p>

</div>

`);

}

/* ===============================
   Love Letter
================================ */

function showLetter(){

setContent(`

<div class="card">

<h3>💌 A Letter For My Jaan</h3>

<p>

Jaan ❤️

<br><br>

05.11.2022 was the day our little universe started.

<br><br>

Since then, you have become my favourite person,
my biggest smile and my home even from miles away.

<br><br>

Every laugh, every conversation and every little
moment with you means more than you know.

<br><br>

I cannot wait for 25.09.2026 —
the day I get to see you again and create
more beautiful memories together.

<br><br>

Forever yours,

<br><br>

Shivi ❤️

</p>

</div>

`);

}


/* ===============================
   Our Song
================================ */

function showSong(){

setContent(`

<div class="card">

<h3>🎵 Our Song</h3>

<p>
A song that reminds me of you ❤️
</p>


<iframe

src="https://open.spotify.com/embed/track/6egfWbtFFhMToV2DvmEzmo"

height="352"

allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">

</iframe>


</div>

`);

}


/* ===============================
   Secret Message
================================ */

function showSecret(){

setContent(`

<div class="card">

<h3>🌙 A Secret For My Jaan</h3>

<p>

If you found this...

it means you explored every corner
of our little universe ❤️

<br><br>

Among all the stars, all the places,
and all the possibilities...

I would still choose you.

<br><br>

Thank you for being my happiness,
my peace and my favourite person.

<br><br>

One day this distance will just become
a story we tell...

and we will smile knowing we loved
each other through everything.

<br><br>

Forever yours,

<br>

Shivi ❤️

</p>

</div>

`);

}


/* ===============================
   Reasons
================================ */

const reasons=[

"Your smile makes my day ❤️",

"The way you make ordinary moments special",

"Your voice that instantly makes me happy",

"How you understand me without words",

"Your little habits that I secretly love",

"Your kindness and your beautiful heart",

"The way we laugh together",

"Because you are my favourite person",

"Because you make distance feel smaller",

"Because you are simply my Jaan ❤️"

];


function showReasons(){

setContent(`

<div class="card">

<h3>💯 Reasons I Love You</h3>


<p id="reason">

${reasons[reasonIndex]}

</p>


<button onclick="nextReason()">

Another reason ❤️

</button>


</div>

`);

}


function nextReason(){

reasonIndex++;


if(reasonIndex>=reasons.length){

reasonIndex=0;

}


document
.getElementById("reason")
.innerHTML=reasons[reasonIndex];

}


/* ===============================
   Countdown
================================ */

function showCountdown(){

setContent(`

<div class="card">

<h3>⏳ Until I Hold You Again ❤️</h3>


<p>

Jaan, every second takes me closer to you ✨

</p>


<h2 id="timer">
Loading...
</h2>


<p>

I can't wait to see you on 25.09 ❤️

</p>


</div>

`);


startCountdown();

}


function startCountdown(){

clearInterval(countdownInterval);


const meetDate =
new Date("September 25, 2026 00:00:00").getTime();


countdownInterval=setInterval(()=>{


const now=new Date().getTime();


const distance=meetDate-now;


if(distance<=0){

clearInterval(countdownInterval);

document.getElementById("timer").innerHTML=
"Today is the day ❤️";

return;

}


const days=Math.floor(
distance/(1000*60*60*24)
);


const hours=Math.floor(
(distance%(1000*60*60*24))/
(1000*60*60)
);


const minutes=Math.floor(
(distance%(1000*60*60))/
(1000*60)
);


const seconds=Math.floor(
(distance%(1000))/1000
);



document.getElementById("timer").innerHTML=`

${days} Days ❤️<br>

${hours} Hours ✨<br>

${minutes} Minutes 💕<br>

${seconds} Seconds

`;


},1000);

}

/* ===============================
   Memories Gallery
================================ */

function showMemories(){

setContent(`

<div class="card">

<h2>📸 Our Love Story ❤️</h2>


<p>

Every photo is a little piece of our universe ✨

</p>


<div class="gallery">


${createGalleryItem(
"https://i.ibb.co/qFXY2cn9/IMG-0258.jpg",
"✨ Where every memory began"
)}


${createGalleryItem(
"https://i.ibb.co/1YNcLr3c/IMG-8501.jpg",
"😊 My favourite smile"
)}


${createGalleryItem(
"https://i.ibb.co/sdwNCFxz/IMG-8506.jpg",
"❤️ You & Me"
)}


${createGalleryItem(
"https://i.ibb.co/LhnH4RrT/IMG-8548.jpg",
"🌸 A beautiful day together"
)}


${createGalleryItem(
"https://i.ibb.co/x87X2C4g/IMG-8810.jpg",
"💖 My happy place"
)}


${createGalleryItem(
"https://i.ibb.co/bg4TSvmg/IMG-8864.jpg",
"🥹 A memory I'll always keep"
)}


${createGalleryItem(
"https://i.ibb.co/CK9wb6xQ/IMG-8891.jpg",
"🌍 Distance means nothing"
)}


${createGalleryItem(
"https://i.ibb.co/zW1GRhrr/IMG-9052.jpg",
"💞 Forever starts here"
)}


${createGalleryItem(
"https://i.ibb.co/k2dpBFbF/IMG-9981.jpg",
"✨ Another perfect moment"
)}


${createGalleryItem(
"https://i.ibb.co/0ptrjn7n/IMG-1907.jpg",
"❤️ Just us"
)}


${createGalleryItem(
"https://i.ibb.co/0RHzPntG/IMG-4547.jpg",
"🌹 One more beautiful memory"
)}


${createGalleryItem(
"https://i.ibb.co/PZSdfXbS/IMG-2978.jpg",
"🥰 I choose you. Always."
)}


${createGalleryItem(
"https://i.ibb.co/KxqjyWXX/IMG-9757.jpg",
"♾️ To infinity and beyond"
)}


</div>

</div>

`);

}


function createGalleryItem(image,text){

return `

<div>

<img 
src="${image}"
loading="lazy"
alt="Our memory">

<p>${text}</p>

</div>

`;

}


/* ===============================
   Forever
================================ */

function showForever(){

setContent(`

<div class="card forever">

<h1>
❤️ Shivi & Jaan ❤️
</h1>


<p>

Two hearts.

<br><br>

One story.

<br><br>

Thousands of miles.

<br><br>

One promise...

<br><br>

I will always choose you.

<br><br>

Forever yours,

<br><br>

Shivi ✨

</p>


</div>

`);

}


/* ===============================
   Hidden Title Secret
================================ */

function secretTap(){

taps++;


if(taps===5){


setContent(`

<div class="card">

<h2>
🌙 Congratulations, Jaan...
</h2>


<p>

You found the final secret ❤️

<br><br>

If you're reading this...

it means you explored every little corner
of our universe.

<br><br>

Every heart.

Every star.

Every memory.

Every line of code...

was written for one person.

<br><br>

✨ You. ✨

<br><br>

No matter which universe we're in...

I'd still choose you.

Every single time.

<br><br>

♾️

<br><br>

Love,

<br>

Your Babbu ❤️

</p>


</div>

`);


taps=0;


}

}


/* ===============================
   Extra Heart Effect
================================ */

document.addEventListener(
"click",
function(event){

if(event.target.classList.contains("star")){

createHearts();

}

});
