function getUsersHandler() {
  fetch('/users')
    .then( (response) => response.json()) // get parsed response in promise
    .then(result => { // convert parse
      // d response to html
      document.getElementById('usersList').innerHTML =
        '<ul>' + result.map(
          user => `<li>${user.name}</li>`
        ).join("") +
        '</ul>'
    });

}

function addNewUserClick() {
  fetch(`/add?user=${document.getElementById('newUserName').value}`)
    .then(response => response.json())
    .then((response) => {
      if (response.result === 200) {
        getUsersHandler();
      }
    });
}