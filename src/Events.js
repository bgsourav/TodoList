import React from 'react';
import './event.css'

const Events = () => {
	const addform = document.querySelector(".add");
const div = document.querySelector(".main")

const generate = (todo) => {
    const html = `<div class="a">
    <span  class="btn">x</span>
    <h3 class="flex">${todo}</h3>
    </div>`;
    div.innerHTML += html;

}
if(addform){
addform.addEventListener('submit', e => {

    e.preventDefault();
    const todo = addform.add.value.trim();

    if (todo.length) {
        generate(todo);
        addform.reset();

    }
});}

if(div){
div.addEventListener('click', e => {

    if (e.target.classList.contains('btn')) {
        e.target.parentElement.remove();
    }

    if (e.target.classList.contains('flex')) {
        e.target.classList.toggle('checked');
      }
});}
return (
		<div>
			<h1 class="title">TODO LIST</h1>
			<form class="add">
				<input class="Text" type="text" name="add" placeholder="add a new to do......" />
			</form>
			<div class="main">
				<div class="a">
					<span class="btn">x</span>
					<h3 class="flex">AFLL quix</h3>
				</div>
				<div class="a">
					<span class="btn">x</span>
					<h3 class="flex">DDCO quix</h3>
				</div>
				<div class="a">
					<span class="btn">x</span>
					<h3 class="flex">DSA quix</h3>
				</div>
			</div>
		</div>
	);
};

export default Events;
