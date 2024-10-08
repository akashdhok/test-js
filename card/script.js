function generate(){
    let name = document.querySelector('#name').value
    let email = document.querySelector('#email').value
    let number = document.querySelector('#number').value
    let image = document.querySelector('#image').value
    let card = ` <section id="card">
        <div id="img"><img src="${image}" alt=""></div>
        <div id="content">
           
                <h1>${name}</h1>
                <h3>${email}</h3>
                <h3>${number}</h3>
           
        </div>
    </section>`
    alert("Write code")
    document.querySelector("#output").innerHTML = card;
    document.querySelector("#form").style.display = "none"
    print()
    return false;
}