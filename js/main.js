var removebtn = document.getElementsByClassName('btn-danger');
for(i = 0 ; i < removebtn.length ; i++){
    removebtn[i].addEventListener('click' , removebtns)
}
function removebtns(event){
    var e = event.target;
    var parents = e.parentElement.parentElement.remove()
    //console.log(parents)
}
var addTocart = document.getElementsByClassName('btn-secondary');
for(i = 0 ; i < addTocart.length ; i++){
    addTocart[i].addEventListener('click' , addTocarts)
}
function addTocarts(event){
    var addToCart = event.target;
    var addTocartEl = addToCart.parentElement
    //console.log(addTocartEl)
    var titlename = addTocartEl.children[0].innerText;
    var text = addTocartEl.children[1].innerText;
    addTocartupdate(titlename , text)
}
var tbody = document.getElementsByTagName('tbody')[0]
function addTocartupdate( titlename , text){
    var createElement = document.createElement('tr');
    createElement.innerHTML = `<td class="py-5"><h5 class="left2">${titlename}</h5></td>
    <td class="py-5"><h5 class="left">${text}</h5></td>
    <td class="py-5"><button class="btn btn-danger" onclick="myFunction2()">Remove</button></td>`
    tbody.append(createElement);
}
