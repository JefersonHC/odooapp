const mensajeEnviado = () => {
	let alert = document.createElement('ion-alert');
	alert.header = 'Mensaje';

	alert.message = 'Tu mensaje se ha enviado correctamente';
	alert.buttons = ['Cancelar', 'Aceptar'];
	document.body.appendChild(alert);
	return alert.present();
}

const cancelar = () => {
	document.querySelector('#nombre').value = '';
	document.querySelector('#correo').value = '';
	document.querySelector('#mensaje').value = '';
	document.querySelector('#asunto').value = '';
}

(function () {
	emailjs.init("user_9Vx2rUCqSyapkudmJ0YOM");
})();

const vue = new Vue({
	el: '#app',
	data() {
		return {
			from_name: '',
			from_email: '',
			message: '',
			subject: '',
		}
	},
	methods: {
		enviar() {
			let data = {
				from_name: document.querySelector('#nombre').value,
				from_email: document.querySelector('#correo').value,
				message: document.querySelector('#mensaje').value,
				subject: document.querySelector('#asunto').value,
			};

			emailjs.send("gmail", "template_ez8O7JCJ", data)
				.then(function (response) {
					if (response.text === 'OK') {
						mensajeEnviado();
						/*alert('El correo se ha enviado de forma exitosa');*/
					}
					console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
				}, function (err) {
					alert('Ocurrió un problema al enviar el correo');
					console.log("FAILED. error=", err);
				});
		}
	}
});

