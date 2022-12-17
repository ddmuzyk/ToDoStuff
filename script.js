let button = document.getElementById('enter');
let input = document.getElementById('userinput');
let ul = document.querySelector('ul');

const inputLength = () => {
    return input.value.length;
}

const addListAfterClick = (() => {
    if (inputLength() > 0) {
        createListElement();
    } 
});

const addListAfterKeypress = ((event) => {
    if (inputLength() > 0 && event.which === 13) {
        createListElement();
    } 
})

const createListElement = (() => {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = '';
    li.appendChild(createButton());
});

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

// -------------------------------Exercise part----------------------------------



ul.onclick = function(event) {
    event.target.classList.toggle('done');
}

const createButton = (() => {
    let buttonDelete = document.createElement('button');
    buttonDelete.textContent = "Delete";
    buttonDelete.classList.add("delete");
    buttonDelete.onclick = function() {
        buttonDelete.parentElement.remove();
    }
    return buttonDelete;
})
