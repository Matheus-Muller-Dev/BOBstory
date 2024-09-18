import { auth } from './firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

async function login(event) {
    event.preventDefault();
    const email = document.getElementById('login').value;
    const password = document.getElementById('senha').value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("Usuário logado:", user);
        window.location.href = "homePage.html";
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Erro ao fazer login:", errorCode, errorMessage);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('loginForm').addEventListener('submit', login);
});
