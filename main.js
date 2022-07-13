const typed = new Typed("#typing-stuff", {
    strings: ["Chatbot", "Female", "Cute Girl"],
    loop: true,
    typeSpeed: 60,
    backSpeed: 30,
});

particlesJS.load('particles-js', 'particlesjs-config.json', () => {
    console.log('Particles.js config loaded!');
});



function gotoa() {
    document.getElementById('about').scrollIntoView(true);
}
function gotoc() {
    document.getElementById('contact').scrollIntoView(true);
}

function bars(){
    document.getElementById("navbar").style.width = "100%";
}

function closeNav(){
    document.getElementById("navbar").style.width = "0%";
}


function sendEmail() {
    const sub = document.getElementById("sub").value
    const mes = document.getElementById("message").value
    window.open(`mailto:pranavajay594@gmail.com?subject=${sub}&body=${mes}`)
}

