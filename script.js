function newElement() {
        var li = document.createElement("li");
        var inputValue = document.getElementById("input-field").value;
        var t = document.createTextNode(inputValue);
        var cInput = document.createElement("input");
        cInput.type = 'checkbox';
        cInput.id = 'notify';
        var x = document.createElement("LABEL");
        x.appendChild(t);
        li.appendChild(cInput);
        li.appendChild(x);

        if (inputValue === '') {
                document.getElementById('wAlert').style.visibility = 'visible';
                document.querySelector('.alert2').innerHTML = 'An empty field cannot be added.';

        }
        else {
                document.getElementById("myUL").appendChild(li);
        }
        document.getElementById("input-field").value = "";
}

document.getElementById('wClose').addEventListener('click', () => {
        document.getElementById('wAlert').style.visibility = 'hidden';
});

document.querySelector('#myUL').addEventListener('click', () => {
        if (event.target.checked == true) {
                if (document.querySelector('#myUL').childNodes.length < 2) {
                        this.event.srcElement.checked = false;
                        document.getElementById('wAlert').style.visibility = 'visible';
                        document.querySelector('.alert2').innerHTML = 'You cannot delete the last task from the list.';
                }
                else if (document.querySelector('#myUL').childNodes.length >= 2) {
                        this.event.path[1].remove();
                        this.event.srcElement.nextSibling.remove();
                        this.event.srcElement.remove();
                }
        }
});
