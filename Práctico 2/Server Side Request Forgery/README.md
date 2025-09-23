# Mock Payment Server

Este proyecto es un servidor de pagos simulado explotar la vulnerabilidad de **Server Side Request Forgery**.

## Requisitos
- Node.js (v16 o superior recomendado)
- npm

## Instalación
1. Abrir una terminal en la carpeta del proyecto.
2. Instalar las dependencias necesarias:
   ```bash
   npm install express body-parser
   ```

## Ejecución
1. Ejecutar el servidor con el siguiente comando:
   ```bash
   node mock_payment.js
   ```
2. El servidor escuchará en `http://127.0.0.1:8090`.
