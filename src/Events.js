import React, { useEffect } from 'react';
import './event.css'
// import './todo.js'



const Events = () => {
	useEffect(() => {
		const addform = document.querySelector(".add");
		const div = document.querySelector(".main")

		const generate = (todo) => {
			const html = `<li class="a">
    <span  class="btn">x</span>
    <h3 class="flex">${todo}</h3>
    </li>`;
			div.innerHTML += html;

		}


		addform.addEventListener('submit', e => {

			e.preventDefault();
			const todo = addform.add.value.trim();

			if (todo.length) {
				generate(todo);
				addform.reset();

			}
		});


		div.addEventListener('click', e => {

			if (e.target.classList.contains('btn')) {
				e.target.parentElement.remove();
			}

			if (e.target.classList.contains('flex')) {
				e.target.classList.toggle('checked');
			}
		});

	})
	return (
		
		<div>
			<h1 class="title">TODO LIST</h1>
			<form class="add">
				<input class="Text" type="text" name="add" placeholder="add a new to do......" />
			</form>
			<div class="main">
				<div class="a">
					<span class="btn">x</span>
					<h3 class="flex">AFLL quiz</h3>
				</div>
				<div class="a">
					<span class="btn">x</span>
					<h3 class="flex">DDCO quiz</h3>
				</div>
				<div class="a">
					<span class="btn">x</span>
					<h3 class="flex">DSA quiz</h3>
				</div>
			</div>
		</div>
	
	);
};

export default Events;