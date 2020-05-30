function getUsersHandler() {
  fetch('/users')
    .then( (response) => response.json()) // get parsed response in promise
    .then(result => { // convert parse
      // d response to html
      document.getElementById('usersList').innerHTML =
        '<ul>' + result.reverse().map(
        user => `<li>${user.name}</li>`
        ).join("") +
        '</ul>'
    });

}

function clearUserListHandler() {
  fetch('/clear')
    .then( response => response.json()) // get parsed response in promise
    .then( response => handleErrors(response)) // handle clear user list errors
    .then( response => {
      if (response.code === 200) {
        getUsersHandler();
      }
    });

}

function addNewUserClick() {
  fetch(`/add?user=${document.getElementById('userName').value}&pass=${document.getElementById('userPass').value}`)
    .then( response => response.json())
    .then( response => handleErrors(response)) // handle clear user list errors
    .then( response => {
      if (response.code === 200) {
        getUsersHandler();
      }
    });
}

function handleErrors(response) {
  if (response.code !== 200) {
    console.error(`Error code: ${response.result} result: ${JSON.stringify(response)}`);
  }
  return response;
}