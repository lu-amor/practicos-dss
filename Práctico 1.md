# Práctico 1

> Lucía Amor, Lucía Olivera
> 

# 1. Instalación de una máquina virtual de Kali Linux en VMware

## 1.1 Instalación de VMware

1. Ir a [https://www.vmware.com/products/desktop-hypervisor/workstation-and-fusion](https://www.vmware.com/products/desktop-hypervisor/workstation-and-fusion)
2. Seleccionar **Download now**
    <img width="1269" height="704" alt="Screenshot_2025-08-21_at_20 32 17" src="https://github.com/user-attachments/assets/5e315f68-0ddd-4976-8eda-7356a9e7eef2" />
    
3. Crear una cuenta en [https://access.broadcom.com/default/ui/v1/signin/](https://access.broadcom.com/default/ui/v1/signin/)
    <img width="1269" height="704" alt="Screenshot_2025-08-21_at_20 32 23" src="https://github.com/user-attachments/assets/a08da41f-4a0c-49ba-8796-f6f86d11c87f" />
    
4. Iniciar sesión en la cuenta y luego navegar a [https://support.broadcom.com/group/ecx/free-downloads](https://support.broadcom.com/group/ecx/free-downloads)
5. Seleccionar **VMware Fusion**
    <img width="1269" height="704" alt="Screenshot_2025-08-21_at_20 36 51" src="https://github.com/user-attachments/assets/b60eb1dc-d525-4ea7-95ab-131895823c70" />
    
6. Seleccionar la versión **13.6.2**
    <img width="1269" height="704" alt="Screenshot_2025-08-21_at_20 37 28" src="https://github.com/user-attachments/assets/81a3f4fd-4adf-42b3-8c43-b944a907628e" />
    
7. El checkbox para aceptar los Términos y Condiciones está deshabilitado. Para habilitarlo:
    1. Seleccionar **Terms and Conditions**
        <img width="1269" height="704" alt="Screenshot_2025-08-21_at_20 40 11" src="https://github.com/user-attachments/assets/742c9610-b02b-4fdb-af1f-574205debbcd" />
        
    2. Seleccionar cualquiera de las opciones
        <img width="1269" height="704" alt="Screenshot_2025-08-21_at_20 41 37" src="https://github.com/user-attachments/assets/fd3fc59e-bbb4-4381-8a4d-22e2a9747a8f" />
        
        Se abrirá un PDF con los Términos y Condiciones para leer si se desea
        <img width="1269" height="704" alt="Screenshot_2025-08-21_at_20 44 25" src="https://github.com/user-attachments/assets/f7c85f78-952d-4977-b1dd-47d8fee6bbae" />
        
8. Retroceder hasta 7.a. el checkbox debería estar habilitado; seleccionarlo y luego seleccionar el botón de descarga
    <img width="1269" height="704" alt="Screenshot_2025-08-21_at_20 44 33" src="https://github.com/user-attachments/assets/cff56209-c6b6-4ecc-8849-918bca0a3784" />
    
    1. Completar los datos personales
        <img width="1269" height="704" alt="Screenshot_2025-08-21_at_20 45 06" src="https://github.com/user-attachments/assets/23e00d71-9d2b-41dc-bd31-5df84a14dbe9" />
        
    2. Permitir las descargas
        <img width="1269" height="704" alt="Screenshot_2025-08-21_at_20 46 01" src="https://github.com/user-attachments/assets/6fbf10aa-575d-4c72-9d6e-64e72a263bba" />
        
9. Abrir el archivo descargado, instalarlo y dar permisos al sistema operativo
    
    ![Screenshot 2025-08-21 at 20.47.13.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-21_at_20.47.13.png)
    
    1. Otorgar permisos administrativos
        
        ![Screenshot 2025-08-21 at 20.47.23.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-21_at_20.47.23.png)
        
    2. Aceptar Términos y Condiciones y finalizar la instalación
        
        ![Screenshot 2025-08-21 at 20.48.07.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-21_at_20.48.07.png)
        
10. Abrir VMware, para dar permisos de accesibilidad: `OK > Open System Settings`
    1. Activar la opción **VMware**
    
    ![Screenshot 2025-08-21 at 20.49.24.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-21_at_20.49.24.png)
    

## 1.2 Instalación de máquina virtual de Kali Linux

1. Desde [https://www.kali.org/get-kali/#kali-installer-images](https://www.kali.org/get-kali/#kali-installer-images) descargar el Installer para x86_64, descargará un archivo *.iso*
    
    ![Screenshot 2025-08-25 at 18.30.19.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-25_at_18.30.19.png)
    
2. Abrir **VMware**
    1. arrastrar el archivo *.iso* descargado al recuadro negro y seleccionar **Continue**
        
        ![Screenshot 2025-08-21 at 20.49.51.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-21_at_20.49.51.png)
        
    2. Verificar que el archivo *.iso* sea el correcto y seleccionar **Continue**
        
        ![Screenshot 2025-08-24 at 20.48.12.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-24_at_20.48.12.png)
        
    3. Seleccionar `Linux > Debian 12.x 64-bit Arm`
        
        ![Screenshot 2025-08-24 at 20.55.08.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-24_at_20.55.08.png)
        
    4. Finalizar la instalación.
        
        ![Screenshot 2025-08-24 at 20.55.38.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-24_at_20.55.38.png)
        
3. Una vez finalizada la instalación se abrirá una interfaz con distintas opciones de instalación.
    1. Seleccionar **Install**
        
        ![Screenshot 2025-08-24 at 20.56.10.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-24_at_20.56.10.png)
        
    2. Seleccionar el idioma de preferencia
        
        ![Screenshot 2025-08-24 at 20.56.59.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-24_at_20.56.59.png)
        
    3. Seleccionar país
        
        ![Screenshot 2025-08-24 at 20.57.49.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-24_at_20.57.49.png)
        
    4. Seleccionar idioma del teclado
        
        ![Screenshot 2025-08-24 at 20.58.24.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-24_at_20.58.24.png)
        
    5. Ingresar un nombre de red para la máquina virtual
        
        ![Screenshot 2025-08-24 at 20.59.49.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-24_at_20.59.49.png)
        
    6. Configuración de usuarios y contraseñas:
        1. Ingresar nombre completo para el nuevo usuario
            
            ![Screenshot 2025-08-24 at 22.53.32.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-24_at_22.53.32.png)
            
        2. Ingresar un nombre de usuario
            
            ![Screenshot 2025-08-24 at 22.54.21.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-24_at_22.54.21.png)
            
        3. Ingresar y verificar contraseña
            
            ![Screenshot 2025-08-24 at 22.54.34.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-24_at_22.54.34.png)
            
            ![Screenshot 2025-08-24 at 22.54.50.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-24_at_22.54.50.png)
            
    7. Para el particionado de discos:
        1. Seleccionar el disco a particionar
            
            ![Screenshot 2025-08-24 at 22.59.34.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-24_at_22.59.34.png)
            
        2. Para la selección de esquema de particionado elegir **“Todos los ficheros en una partición”**
            
            ![Screenshot 2025-08-24 at 22.59.55.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-24_at_22.59.55.png)
            
        3. Finalizar el particionado y confirmar los cambios en los discos
    8. Seleccionar los programas a instalar como se ve en la imagen
        
        ![Screenshot 2025-08-24 at 23.02.27.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-24_at_23.02.27.png)
        
    9. Finalizar la instalación e iniciar sesión con las credenciales del punto 2.f.
        
        ![Screenshot 2025-08-24 at 23.12.08.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-24_at_23.12.08.png)
        

# 2. Instalación de un Proxy de interceptación

## 2.1 Instalación de BURP

1. Ir a [https://portswigger.net/burp/releases/professional-community-2025-7-4](https://portswigger.net/burp/releases/professional-community-2025-7-4), seleccionar `Burp Suite Community Edition`, `Linux (ARM)` y **Download**
    
    ![Screenshot 2025-08-25 at 17.12.11.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-25_at_17.12.11.png)
    
2. Abrir una terminal y moverse a la carpeta donde está el archivo descargado (por defecto es `Descargas`)
    1. En la terminal ejecutar:
        
        ```
        chmod +x <nombre del archivo>.sh
        ```
        
        ```
        ./<nombre del archivo>.sh
        ```
        
    2. En el Setup Wizard que se abre seleccionar `Next > Next > Next > Finish`
        
        ![Screenshot 2025-08-25 at 17.16.11.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-25_at_17.16.11.png)
        
        ![Screenshot 2025-08-25 at 17.17.06.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-25_at_17.17.06.png)
        
        ![Screenshot 2025-08-25 at 17.17.17.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-25_at_17.17.17.png)
        
        ![Screenshot 2025-08-25 at 17.21.34.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-25_at_17.21.34.png)
        
    3. Verificar la correcta instalación
        
        ![Screenshot 2025-08-25 at 17.22.41.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-25_at_17.22.41.png)
        

## 2.2 Instalación de ZAP

1. Dentro de un navegador en la máquina virtual ir a [https://www.zaproxy.org/download/](https://www.zaproxy.org/download/) 
2. Descargar Linux Installer (debería descargar un archivo *.sh*)
    
    ![Screenshot 2025-08-22 at 15.06.31.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/3a8d66d6-7883-4974-9c53-226668d6ad93.png)
    
3. Abrir una terminal, moverse a la carpeta donde está el archivo descargado (por defecto es `Descargas`) y ejecutar:
    
    ```
    chmod +x <nombre del archivo>
    ```
    
    ```
    sudo ./<nombre del archivo>
    ```
    
    Ingresar la contraseña del usuario si la pide y se abrirá un Setup Wizard
    
4. Pasos de instalación en el Setup Wizard:
    1. Aceptar los términos de licencia
        
        ![Screenshot 2025-08-21 at 20.56.59.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/da6912c1-4dc1-47d5-aec0-27b7171a78df.png)
        
    2. Seleccionar **Instalación estándar**
        
        ![Screenshot 2025-08-21 at 20.57.11.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/bbd2f323-22f7-4978-a50a-5200388f66e0.png)
        
    3. Seleccionar **Instalar**
        
        ![Screenshot 2025-08-21 at 20.57.17.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/0a9eb96f-b618-42bb-b739-11a1f57c8d85.png)
        

# 3. Instalación de Visual Studio Code en la máquina virtual de Kali Linux5.

1. Desde [https://code.visualstudio.com/Download](https://code.visualstudio.com/Download#)
2. Descargar el archivo *.deb* para **Arm64**
    
    ![Screenshot 2025-08-22 at 15.34.53.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/d1e866bc-926b-480b-833b-faec36fbe7d5.png)
    
3. Abrir una terminal ejecutar
    
    ```
    sudo apt install ./<nombre del archivo>
    ```
    
    Cuando aparezca esta ventana en el instalador seleccionar **<Si>**
    
    ![Screenshot 2025-08-22 at 15.37.37.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/dfbc7e75-7f0e-4ce4-af9f-0da617026b06.png)
    

# 4. Instalación de Docker en la máquina virtual de Kali Linux6.

[https://docs.docker.com/engine/install/debian/#installation-methods](https://docs.docker.com/engine/install/debian/#installation-methods)

Abrir una terminal y ejecutar:

```bash
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```

![Screenshot 2025-08-25 at 17.47.46.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-25_at_17.47.46.png)

Descargar el archivo para Debian

![Screenshot 2025-08-25 at 17.48.43.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-25_at_17.48.43.png)

![Screenshot 2025-08-25 at 17.49.19.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-25_at_17.49.19.png)

![Screenshot 2025-08-25 at 17.50.26.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-25_at_17.50.26.png)

![Screenshot 2025-08-25 at 17.50.38.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-25_at_17.50.38.png)

![Screenshot 2025-08-25 at 17.51.16.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-25_at_17.51.16.png)

![Screenshot 2025-08-25 at 17.56.15.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-25_at_17.56.15.png)

![Screenshot 2025-08-25 at 17.58.00.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-25_at_17.58.00.png)

![Screenshot 2025-08-25 at 18.53.47.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-25_at_18.53.47.png)

# 5. Ejecución de OWASP Juice Shop7 en un ambiente Dockerizado.

1. Crear un archivo *.yml* con el siguiente contenido y guardarlo
    
    ```yaml
    version: '3'
    services:
      juice-shop:
        image: bkimminich/juice-shop
        ports:
          - "3000:3000"
    ```
    
    ![Screenshot 2025-08-25 at 19.02.47.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-25_at_19.02.47.png)
    
2. Abrir una terminal y moverse hasta la carpeta donde está creado el archivo del paso anterior
3. Ejecutar
    
    ```bash
    sudo docker compose up
    ```
    
    ![Screenshot 2025-08-25 at 19.06.58.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-25_at_19.06.58.png)
    

```bash
// Para corroborar qué contenedores están corriendo
docker ps
// Si pide permisos
sudo docker ps

// Para detener un contenedor
docker stop <id-contenedor>
```

# 6. Ejecución de Crappi8 en un ambiente Dockerizado.

1. Abrir una terminal y ejecutar:
    
    ```bash
    curl -o /tmp/crapi.zip https://github.com/OWASP/crAPI/archive/refs/heads/main.zip
    ```
    
    Corroborar que el archivo se haya descargado correctamente:
    
    ```bash
    ls -lh /tmp/crapi.zip
    ```
    
    Si la respuesta a ese comando tiene un cero entre tu nombre de usuario y la fecha, como en el siguiente ejemplo:
    
    -rw-rw-r-- 1 lucia lucia 0 ago 26 17:29 /tmp/crapi.zip
    
    Entonces el archivo no se ha descargado correctamente. A continuación ejecuta el siguiente comando en la terminal:
    
    ```bash
    curl -L https://github.com/OWASP/crAPI/archive/refs/heads/main.zip -o /tmp/crapi.zip
    
    // vuelva a corroborar la descarga con:
    ls -lh /tmp/crapi.zip 
    ```
    
2. Descomprimir el archivo que se descargó en el punto anterior, ya sea manualmente, o con el siguiente comando:

```bash
unzip /tmp/crapi.zip -d ~/path/deseado/para/descomprimir/
```

1. Abrir una terminal, moverse a la carpeta donde se descomprimió el archivo y ejecutar:
    
    ```bash
    cd crAPI-main/deploy/docker
    
    sudo docker compose pull
    
    sudo docker compose -f docker-compose.yml --compatibility up -d
    ```
    
2. Verificar que funciona entrando a [http://localhost:8888](http://localhost:8888/) desde un navegador
    
    ![Screenshot 2025-08-26 at 14.56.14.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-26_at_14.56.14.png)
    

# 7. Prueba de la visualización del tráfico en el proxy de interceptación (Burp Suite)

Este procedimiento permite configurar Burp Suite como proxy para luego interceptar el tráfico del navegador.

## 1. Configuración del Proxy en Burp Suite

1. Abrir **Burp Suite** e ir a `Proxy > Proxy Settings`
2. Verificar que el proxy esté activo con:
    - **Interface:** `127.0.0.1:8080`
    - **Running:** Activado (checkbox marcado)
    
    ![Screenshot 2025-08-25 at 23.54.35.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/9d0201d3-cc6d-43b2-9989-6cdfcf95a08f.png)
    

## 2. Configuración del Proxy en el Navegador (Firefox)

1. Abrir **Firefox** e ir a: `Settings > General > Network Settings` y hacer click en `Settings`
    
    ![Screenshot 2025-08-25 at 23.40.12.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-25_at_23.40.12.png)
    
    ![Untitled design.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/0885da1e-d768-4341-a52a-03f6369266d4.png)
    
2. Seleccionar **Manual proxy configuration** y completar los siguientes campos:
    - **HTTP Proxy:** `127.0.0.1`
    - **Port:** `8080`
    - Seleccionar el checkbox **“Also use this proxy por HTTPS”**
    
    Hacer click en **OK** para guardar los cambios.
    
    ![Screenshot 2025-08-26 at 00.00.39.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-26_at_00.00.39.png)
    

## 3. Emisión del certificado para HTTPS

1. Abrir Burp Suite e ir a: `Proxy > Proxy Settings`, luego seleccionar **Import/ export CA certificate**
    
    ![Screenshot 2025-08-25 at 23.54.35.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-25_at_23.54.35.png)
    
2. Seleccionar **Certificate in DER format**
    
    ![Screenshot 2025-08-25 at 23.54.47.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-25_at_23.54.47.png)
    
3. Elegir una ubicación para guardarlo y confirmar

## 4. Configuración del Certificado en el Navegador (Firefox)

1. Abrir **Firefox** e ir a `Settings > Privacy & Security > Security > Certificates` y hacer click en **View Certificates**
    
    ![Screenshot 2025-08-26 at 13.00.36.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-26_at_13.00.36.png)
    
2. Hacer click en **Import**
    
    ![Screenshot 2025-08-26 at 13.00.45.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-26_at_13.00.45.png)
    
3. Seleccionar el certificado emitido
    
    ![Screenshot 2025-08-26 at 13.00.56.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-26_at_13.00.56.png)
    
4. Marcar el checkbox **“Trust this CA to identify websites”** y hacer click en **OK** para guardar los cambios
    
    ![Screenshot 2025-08-26 at 13.02.26.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-26_at_13.02.26.png)
    
5. Al hacer scroll debería aparecer PortSwigger como entidad certificadora
    
    ![Screenshot 2025-08-26 at 13.02.43.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-26_at_13.02.43.png)
    

## 5. Visualización de tráfico en el proxy de interceptación

Teniendo el proxy configurado, es posible visualizar el tráfico de la siguiente manera:

1. Abrir **Firefox** y acceder a cualquier página web (ej: www.ucu.edu.uy)
    
    ![Screenshot 2025-08-26 at 13.24.22.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-26_at_13.24.22.png)
    
2. En Burp Suite ir a `Proxy > HTTP history` 
    
    Aparecerá todo el tráfico interceptado
    
    ![Screenshot 2025-08-26 at 13.24.49.png](Pr%C3%A1ctico%201%202568f0dea26480a5bba5c1fb16d032e4/Screenshot_2025-08-26_at_13.24.49.png)
