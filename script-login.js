document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const validCredentials = [
        { username: 'user1', password: 'pass1' },
        { username: 'user2', password: 'pass2' },
        { username: 'user3', password: 'pass3' }
    ];

    let loginSuccess = false;
    for (let i = 0; i < validCredentials.length; i++) {
        if (validCredentials[i].username === username && validCredentials[i].password === password) {
            loginSuccess = true;
            break;
        }
    }

    const messageElement = document.getElementById('message');
    if (loginSuccess) {
        messageElement.style.color = 'green';
        messageElement.textContent = 'Login berhasil!';
    } else {
        messageElement.style.color = 'red';
        messageElement.textContent = 'Username atau password salah!';
    }
});
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
if (video.paused) {
  video.play();
  btn.innerHTML = "Pause";
} else {
  video.pause();
  btn.innerHTML = "Play";
}
}
