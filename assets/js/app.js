const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); // No estaba seleccionada la clase porque faltaba el punto.
const $b = document.querySelector('.blog'); // 'blog' es una clase no un ID, se debe poner el punto.
const $l = document.querySelector('.location'); // Se debe crear un párrafo con la clase "location" en el HTML para poder usarlo.

async function displayUser(username) { // Como se esta usando "await" para el manejo de promesas, la función debe tener "async".
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json(); // Se creó la variable "data" que devolverá los datos en en json
  console.log(data);
  $n.textContent = `${data.name}`; // Para la interpolacion se usan comiilas graves y no simples.
  $b.textContent = `${data.blog}`; // Para la interpolacion se usan comiilas graves y no simples.
  $l.textContent = `${data.location}`; // Para la interpolacion se usan comiilas graves y no simples.
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}` // Esta mal nombre de la variable. Es "$n".
}

displayUser('stolinski').catch(handleError);