var btn

// ===== Functions =====

function show (btn) {
    console.log('cheguei na function')
    btn = btn;
    if (window.scrollY <= 50) {
        btn.style.display = "none";
    } else {
        btn.style.display = "flex";
    }
};
var create = function () {
    // cria um novo elemento div
    const newBtn = document.createElement("div");

    // e adiciona algum conteúdo ao elemento
    const newContent = document.createTextNode(" ");

    // adiciona o "text node" para o div recém criado
    newBtn.appendChild(newContent);
    newBtn.id = "backTop";

    // adiciona o elemento recém criado e seu conteúdo dentro do DOM
    const currentDiv = document.getElementById("#grad2");
    console.log('currentDiv: ', currentDiv);
    document.body.insertBefore(newBtn, currentDiv);

    btn = document.getElementById("backTop");
    console.log('Btn na function: ', btn)
    btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m296-224-56-56 240-240 240 240-56 56-184-183-184 183Zm0-240-56-56 240-240 240 240-56 56-184-183-184 183Z"/></svg>'
};
// ===== End =====

// Verification step:
// 1. Go to the file head
const linkRels = document.head.querySelectorAll("link");
// 2. Ther's no 'google icons incluided'
var verification = false;

// 2.5 Verify each element
for (i = 0; i < linkRels.length; i++) {
    const element = linkRels[i];
    // 3. Check if the link rel is "stylesheet"
    if (element.rel === "stylesheet") {
        // 4. Check if the link is 'google icons'
        if (element.href.includes("material-icons")) {
            //4.5 THERE'S GOOGLE ICONS
            verification = true;
            // So just go on -> create()
            create();
            break;
        }
    }
    // 5. If there's no 'google icons'... I search all elements and do not found.
    if (i === linkRels.length - 1 && verification === false) {
        // So includ it!
        document.head.innerHTML +=
            '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />';
    }
    verification = true;
    // Them, go on -> create()
    create();
    break;
}

const btt = document.getElementById("backTop");
btt.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

if(verification){
    console.log('cheguei, ta verificado')
    window.addEventListener('scroll', () => {
                            console.clear()
        console.log('cheguei na função - mostrar')
        console.log('scrollY: ', window.scrollY)
        
        if(window.scrollY >= 50){
            btn.style = 'display: flex'
            console.log('btn.style: ', btn.style)
            console.log('btn: ', btn)
        }else{
            btn.style = 'display: none'
        };
    }
        )
    }
