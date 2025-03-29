//your JS code here. If required.
const status = document.getElementById('status');
const enterBtn = document.getElementById('enterBtn');

enterBtn.addEventListener('click',()=>{
	let newStatus = document.createElement('h1');
	newStatus.id = 'status';
	status.textContent = 'Entered Metaverse';
})