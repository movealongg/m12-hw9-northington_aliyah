const navButtons = document.querySelectorAll('#navbar ul li');

function wrapper() {
	const loopThrough = () => {
		let thisButtonText = this.childNodes[0].nodeValue;

		for (let i = 0; i < thisButtonLength; i++) {

		}

	};
	loopThrough();
};

for(let i = 0; i < navButtons.length; i++) {
	navButtons[i].addEventListener('click', wrapper);
};
