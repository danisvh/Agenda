// script.js
console.log("Agenda Web");

const contactes = ["Jose","Saida","Ruben","Vero","Jenny"];
const llista = document.createElement('ul');
contactes.forEach(nom => {
    const li = document.createElement('li');
    li.textContent = nom;
    lista.appendCHiled(li);
});
document.body.appendChild(llista);

document.querySelector("form").addEventListerner("submit","e"=>{
    e.preventDefault();
    const input = document.querySelector("#nom");
    if(input.value.trim()===""){
        alert("EL camp no pot estar buit");
        return;
    }
    // Logica per afegit el contacte...
});
