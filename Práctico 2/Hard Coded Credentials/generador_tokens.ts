import jwt from 'jsonwebtoken';
import readlineSync from 'readline-sync';

let parar = false;
while (!parar) {
    const userId = readlineSync.question('Introduce un userId (número) o "exit" para salir: ');
    if (userId === 'exit') {
        break;
    }
    console.log(userId);
    const token = jwt.sign({ id: userId }, 'secreto_super_seguro', { expiresIn: '1h' });
    console.log(token);
}