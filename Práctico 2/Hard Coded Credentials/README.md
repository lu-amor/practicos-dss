# Instructivo para ejecutar `generador_tokens.ts`

Este archivo genera tokens JWT usando una clave embebida en el práctico para explotar la vulnerabilidad de **Hard Coded Credentials**.

## Requisitos previos

- Tener instalado Node.js (recomendado v18 o superior).
- Tener instalado npm (gestor de paquetes de Node.js).

## Pasos para la ejecución

1. **Abrir una terminal** y navegar al directorio del archivo

2. **Instalar las dependencias necesarias**:
   ```sh
   npm install jsonwebtoken readline-sync
   npm install --save-dev @types/jsonwebtoken @types/readline-sync
   ```

3. **Ejecutar el archivo con ts-node** (para instalar ts-node, ejecutar `npm install -g ts-node`):
   ```sh
   npx ts-node generador_tokens.ts
   ```

4. **Uso**:
   - Ingresar un `userId` (número) cuando se solicite.
   - Escribir `exit` para finalizar el programa.
   - El programa mostrará el token generado en pantalla.
