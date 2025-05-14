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
