burger = document.querySelector('.hamburger');
navmenu = document.querySelector('.navmenu');

burger.addEventListener('click', ()=>{
    navmenu.classList.toggle('navmenuresp');
})



const accordion = document.getElementsByClassName('contentBox');
for (i = 0; i < accordion.length; i++){
    accordion[i].addEventListener("click", function () {
        this.classList.toggle("active");
    })
}


const counterone = document.querySelectorAll('.countFirst');
        const speedone = 162.5;
        counterone.forEach(countFirst => {
            const updtCountersone = () => {
                const targetone = countFirst.getAttribute('data-target');
                const countone = +countFirst.innerText;

                const scoreone = targetone / speedone;

                if (countone < targetone) {
                    countFirst.innerText = countone + scoreone;
                    setTimeout(updtCountersone, 100);
                }
                else {
                    countFirst.innerText = targetone;
                }
            };
            updtCountersone();
        });

        const countertwo = document.querySelectorAll('.countSecond');
        const speedtwo = 320;
        countertwo.forEach(countSecond => {
            const updtCounterstwo = () => {
                const targettwo = countSecond.getAttribute('data-target');
                const counttwo = +countSecond.innerText;

                const scoretwo = targettwo / speedtwo;

                if (counttwo < targettwo) {
                    countSecond.innerText = counttwo + scoretwo;
                    setTimeout(updtCounterstwo, 60);
                }
                else {
                    countSecond.innerText = targettwo;
                }
            };
            updtCounterstwo();
        });

        const counterthree = document.querySelectorAll('.countThird');
        const speedthree = 20;
        counterthree.forEach(countThird => {
            const updtCountersthree = () => {
                const targetthree = countThird.getAttribute('data-target');
                const countthree = +countThird.innerText;

                const scorethree = targetthree / speedthree;

                if (countthree < targetthree) {
                    countThird.innerText = countthree + scorethree;
                    setTimeout(updtCountersthree, 250);
                }
                else {
                    countThird.innerText = targetthree;
                }
            };
            updtCountersthree();
        });

        const counterfour = document.querySelectorAll('.countFourth');
        const speedfour = 20;
        counterfour.forEach(countFourth => {
            const updtCountersfour = () => {
                const targetfour = countFourth.getAttribute('data-target');
                const countfour = +countFourth.innerText;

                const scorefour = targetfour / speedfour;

                if (countfour < targetfour) {
                    countFourth.innerText = countfour + scorefour;
                    setTimeout(updtCountersfour, 250);
                }
                else {
                    countFourth.innerText = targetfour;
                }
            };
            updtCountersfour();
        });