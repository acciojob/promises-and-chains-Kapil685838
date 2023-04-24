//your JS code here. If required.

let userDetails = document.querrySelector('form');

userDetails.addEventListener('onsubmit', promiseResolve);

function promiseResolve(event){
	return new Promise((resolve, reject) => {
		event.preventDefault();
		setTimeout(() => {
			if(document.getElementById('age').value >= 18){
				resolve(alert(`Welcome, ${document.getElementById('name').value}. You can vote.`));
			}
			resolve(alert(`Welcome, ${document.getElementById('name').value}. You aren't old enough.`));
		}, 4 * 1000);
	});
}