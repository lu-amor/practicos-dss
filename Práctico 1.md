# Práctico 1

> Lucía Amor, Lucía Olivera
> 

## 1. Instalación de una máquina virtual de Kali Linux en VMware

### 1.1 Instalación de VMware

1. En el navegador de la computadora donde se desea instalar la máquina virtual, entrar al siguiente link: [https://www.vmware.com/products/desktop-hypervisor/workstation-and-fusion](https://www.vmware.com/products/desktop-hypervisor/workstation-and-fusion)
2. Seleccionar el botón **Download now**
    <img width="1269" height="704" alt="Screenshot_2025-08-21_at_20 32 17" src="https://github.com/user-attachments/assets/5e315f68-0ddd-4976-8eda-7356a9e7eef2" />
    
3. Se le redigirá a la siguiente página: [https://access.broadcom.com/default/ui/v1/signin/](https://access.broadcom.com/default/ui/v1/signin/). Si se cuenta con un usuario, iniciar sesión, de lo contrario clickee sobre el desplegable **LOGIN**, y seleccione la opción **REGISTER**
    <img width="1269" height="704" alt="Screenshot_2025-08-21_at_20 32 23" src="https://github.com/user-attachments/assets/a08da41f-4a0c-49ba-8796-f6f86d11c87f" />
    
4. Iniciar sesión en la cuenta y luego navegar a [https://support.broadcom.com/group/ecx/free-downloads](https://support.broadcom.com/group/ecx/free-downloads)
5. Seleccionar **VMware Fusion** entre las opciones de "Free Downloads"
    <img width="1269" height="704" alt="Screenshot_2025-08-21_at_20 36 51" src="https://github.com/user-attachments/assets/b60eb1dc-d525-4ea7-95ab-131895823c70" />
    
6. Se le redigirá a una página con las opciones para su descarga, seleccionar la versión **13.6.2**
    <img width="1269" height="704" alt="Screenshot_2025-08-21_at_20 37 28" src="https://github.com/user-attachments/assets/81a3f4fd-4adf-42b3-8c43-b944a907628e" />
    
7. El checkbox para aceptar los Términos y Condiciones está deshabilitado. Para habilitarlo:
    1. Seleccionar **Terms and Conditions**
        <img width="1269" height="704" alt="Screenshot_2025-08-21_at_20 40 11" src="https://github.com/user-attachments/assets/742c9610-b02b-4fdb-af1f-574205debbcd" />
        
    2. Seleccionar cualquiera de las opciones de idioma que aparecen
        <img width="1269" height="704" alt="Screenshot_2025-08-21_at_20 41 37" src="https://github.com/user-attachments/assets/fd3fc59e-bbb4-4381-8a4d-22e2a9747a8f" />
        
        Se abrirá un PDF con los Términos y Condiciones para leer si se desea
        <img width="1269" height="704" alt="Screenshot_2025-08-21_at_20 44 25" src="https://github.com/user-attachments/assets/f7c85f78-952d-4977-b1dd-47d8fee6bbae" />
        
8. Retroceder hasta 7.a. el checkbox debería estar habilitado; seleccionarlo y luego seleccionar el botón de descarga
    <img width="1269" height="704" alt="Screenshot_2025-08-21_at_20 44 33" src="https://github.com/user-attachments/assets/cff56209-c6b6-4ecc-8849-918bca0a3784" />
    
    1. Completar los datos personales, checkear la opción "I Agree" a los términos y condiciones y clickear el botón "Submit"
        <img width="1269" height="704" alt="Screenshot_2025-08-21_at_20 45 06" src="https://github.com/user-attachments/assets/23e00d71-9d2b-41dc-bd31-5df84a14dbe9" />
        
    2. Permitir descargas de "vmware.com" y "support.broadcom.com", clickeando "Allow" o "Permitir"
        <img width="1269" height="704" alt="Screenshot_2025-08-21_at_20 46 01" src="https://github.com/user-attachments/assets/6fbf10aa-575d-4c72-9d6e-64e72a263bba" />
        
9. Abrir el archivo descargado, instalarlo y dar permisos al sistema operativo
    <img width="1410" height="795" alt="Screenshot_2025-08-21_at_20 47 13" src="https://github.com/user-attachments/assets/b206a8c7-d14b-423c-b99c-a50c5919c2ef" />
    
    1. Otorgar permisos administrativos, proporcionando la contraseña de su equipo
        <img width="1410" height="795" alt="Screenshot_2025-08-21_at_20 47 23" src="https://github.com/user-attachments/assets/cfb6d8db-9b98-4dd7-a6a1-be966d58ace5" />
        
    2. Aceptar Términos y Condiciones y finalizar la instalación, clickeando el botón "Agree"
        <img width="1410" height="795" alt="Screenshot_2025-08-21_at_20 48 07" src="https://github.com/user-attachments/assets/1005d184-e9b2-49b3-bfeb-1d2d77ba7691" />
        
10. Abrir VMware, para dar permisos de accesibilidad: `OK > Open System Settings > Accessibility`
    1. Activar la opción **VMware**
        <img width="1410" height="795" alt="Screenshot_2025-08-21_at_20 49 24" src="https://github.com/user-attachments/assets/e45c10a9-7d5b-4f0f-8ba9-816578a3d5e4" />
    
### 1.2 Instalación de máquina virtual de Kali Linux

1. Desde [https://www.kali.org/get-kali/#kali-installer-images](https://www.kali.org/get-kali/#kali-installer-images) descargar el Installer para x86_64, descargará un archivo *.iso*
    <img width="1710" height="984" alt="Screenshot_2025-08-25_at_18 30 19" src="https://github.com/user-attachments/assets/ae9e605c-2ac8-40c6-be73-f3083244f0c0" />
    
2. Abrir **VMware**
    1. Arrastrar el archivo *.iso* descargado al recuadro negro y seleccionar **Continue**
        <img width="1410" height="795" alt="Screenshot_2025-08-21_at_20 49 51" src="https://github.com/user-attachments/assets/4c1044fd-f389-4cf1-8c72-1ca4473d7ab7" />
        
    2. Verificar que el archivo *.iso* sea el correcto y seleccionar **Continue**
        <img width="1410" height="795" alt="Screenshot_2025-08-24_at_20 48 12" src="https://github.com/user-attachments/assets/13e7030c-643a-4543-8bd0-f132ddef73c9" />
        
    3. Cuando se solicite la elección de sistema operativo, seleccionar `Linux > Debian 12.x 64-bit Arm` y presionar "continuar"
        <img width="1410" height="795" alt="Screenshot_2025-08-24_at_20 55 08" src="https://github.com/user-attachments/assets/f5f2416d-c7fc-42e1-a647-d1ad66ce259e" />
        
    4. Finalizar la instalación, marcando la opción "Finish".
        <img width="1410" height="795" alt="Screenshot_2025-08-24_at_20 55 38" src="https://github.com/user-attachments/assets/0a82b9ac-1317-4ad9-a826-c7bea96797da" />
        
3. Una vez finalizada la instalación se abrirá una interfaz con distintas opciones de instalación, en este proceso se utilizarán las "flechas" del teclado para realizar movimientos y la tecla "enter" para seleccionar una opción.
    1. Seleccionar **Install**
        <img width="1410" height="795" alt="Screenshot_2025-08-24_at_20 56 10" src="https://github.com/user-attachments/assets/bb9982d2-1701-4d24-acc9-971062caddaf" />
        
    2. Seleccionar el idioma de preferencia
        <img width="1410" height="795" alt="Screenshot_2025-08-24_at_20 56 59" src="https://github.com/user-attachments/assets/968364c8-8a75-49cd-a7ba-6dbbf9e2f2b8" />
        
    3. Seleccionar país
        <img width="1410" height="795" alt="Screenshot_2025-08-24_at_20 57 49" src="https://github.com/user-attachments/assets/6ef1a658-ce34-41f1-9b9d-00fb8e5da921" />
        
    4. Seleccionar idioma del teclado
        <img width="1410" height="795" alt="Screenshot_2025-08-24_at_20 58 24" src="https://github.com/user-attachments/assets/9442b1bf-8db2-4aad-92ad-6bf4539c2c3b" />
        
    5. Ingresar un nombre de red interno y externo para la máquina virtual; el segundo no es necesario completarlo, se puede enviar vacío.
        <img width="1410" height="795" alt="Screenshot_2025-08-24_at_20 59 49" src="https://github.com/user-attachments/assets/ff0b65a6-9eb6-4b50-8b46-90ad32a541b8" />
        
    6. Configuración de usuarios y contraseñas:
        1. Ingresar nombre completo para el nuevo usuario
            <img width="1410" height="795" alt="Screenshot_2025-08-24_at_22 53 32" src="https://github.com/user-attachments/assets/dde77d58-49a3-41b0-85c5-2cf6a49468d9" />
            
        2. Ingresar un nombre de usuario
            <img width="1410" height="795" alt="Screenshot_2025-08-24_at_22 54 21" src="https://github.com/user-attachments/assets/d19ea091-65ea-4f2a-a394-3751668bcc6f" />
            
        3. Ingresar y verificar contraseña
            <img width="1410" height="795" alt="Screenshot_2025-08-24_at_22 54 34" src="https://github.com/user-attachments/assets/52d8bd24-2101-4372-b859-55f4a8777afa" />
            <img width="1410" height="795" alt="Screenshot_2025-08-24_at_22 54 50" src="https://github.com/user-attachments/assets/4f7b44ac-cb2d-493b-a413-d3cc0d894784" />
            
    7. Para el particionado de discos:
        1. Seleccionar el disco a particionar
            <img width="1410" height="795" alt="Screenshot_2025-08-24_at_22 59 34" src="https://github.com/user-attachments/assets/27c921c5-51f3-4def-8258-76547a4da173" />
            
        2. Para la selección de esquema de particionado elegir **“Todos los ficheros en una partición”**
            <img width="1410" height="795" alt="Screenshot_2025-08-24_at_22 59 55" src="https://github.com/user-attachments/assets/ddbb095d-05a5-42a8-8070-d2d986a8f131" />
            
        3. Finalizar el particionado y confirmar los cambios en los discos
    8. Seleccionar los programas a instalar como se ve en la imagen
        <img width="1410" height="795" alt="Screenshot_2025-08-24_at_23 02 27" src="https://github.com/user-attachments/assets/7b9f26dc-0e90-4dd8-b558-faffa7132f1c" />
        
    9. Finalizar la instalación e iniciar sesión con las credenciales del punto 3.vi.
        <img width="1410" height="795" alt="Screenshot_2025-08-24_at_23 12 08" src="https://github.com/user-attachments/assets/38f48742-6291-4b96-a258-ace22181948f" />

## 2. Instalación de un Proxy de interceptación

### 2.1 Instalación de BURP

1. Dentro del navegador de la máquina virtual, ir a [https://portswigger.net/burp/releases/professional-community-2025-7-4](https://portswigger.net/burp/releases/professional-community-2025-7-4), seleccionar `Burp Suite Community Edition`, `Linux (ARM)` y **Download**
    <img width="1410" height="795" alt="Screenshot_2025-08-25_at_17 12 11" src="https://github.com/user-attachments/assets/f0545b29-75ef-4c9e-974a-f63d28e0d2d7" />
    
2. Abrir una terminal y moverse a la carpeta donde está el archivo descargado (por defecto es `Descargas`)
    1. En la terminal ejecutar:
        
        ```
        chmod +x <nombre del archivo>.sh
        ```
        
        ```
        ./<nombre del archivo>.sh
        ```
        
    2. Automáticamente se abrirá el Setup Wizard, ahí debe seleccionar `Next > Next > Next > Finish`
        <img width="1410" height="795" alt="Screenshot_2025-08-25_at_17 16 11" src="https://github.com/user-attachments/assets/1ebf086c-1f08-49ec-9ef8-4a63357705be" />
        <img width="1410" height="795" alt="Screenshot_2025-08-25_at_17 17 06" src="https://github.com/user-attachments/assets/c1cf5fa4-b844-4b88-ad2e-86bc7372a4a6" />
        <img width="1410" height="795" alt="Screenshot_2025-08-25_at_17 17 17" src="https://github.com/user-attachments/assets/5bde3923-abe4-42fa-8123-68a48505edec" />
        <img width="1410" height="795" alt="Screenshot_2025-08-25_at_17 21 34" src="https://github.com/user-attachments/assets/9df5dc8c-e195-4649-b582-ac9347d45ed7" />
        
    3. Verificar la correcta instalación buscando “Burp Suite Community Edition” en las aplicaciones de la vm; utilizando el buscador general.
        <img width="1410" height="795" alt="Screenshot_2025-08-25_at_17 22 41" src="https://github.com/user-attachments/assets/fbb71dd8-6766-49bf-a041-45991dc72c9c" />        

### 2.2 Instalación de ZAP

1. Dentro de un navegador en la máquina virtual ir a [https://www.zaproxy.org/download/](https://www.zaproxy.org/download/) 
2. Descargar **Linux Installer** (debería descargar un archivo *.sh*)
    <img width="1857" height="710" alt="Screenshot_2025-08-22_at_15 06 31" src="https://github.com/user-attachments/assets/ac4fe6f1-670d-4445-9188-a2945548ec6f" />
    
3. Abrir una terminal, moverse a la carpeta donde está el archivo descargado (por defecto es `Descargas`) y ejecutar:
    
    ```
    chmod +x <nombre del archivo>
    ```
    
    ```
    sudo ./<nombre del archivo>
    ```
    
    Ingresar la contraseña del usuario de la computadora (vm) si la pide y se abrirá un Setup Wizard
    
4. Pasos de instalación en el Setup Wizard:
    1. Aceptar los términos de licencia
        <img width="598" height="492" alt="Screenshot_2025-08-21_at_20 56 59" src="https://github.com/user-attachments/assets/f9d1eb2c-6b51-495f-b5eb-0270d41cc311" />
        
    2. Seleccionar **Instalación estándar**
        <img width="600" height="496" alt="Screenshot_2025-08-21_at_20 57 17" src="https://github.com/user-attachments/assets/407aabf7-60bb-43a5-a534-427607f4f64f" />
        
    3. Seleccionar **Instalar**
        <img width="601" height="503" alt="Screenshot_2025-08-21_at_20 57 18" src="https://github.com/user-attachments/assets/3aa80024-f2ae-487e-834a-9515dde48dc3" />

## 3. Instalación de Visual Studio Code en la máquina virtual de Kali Linux5.

1. Desde [https://code.visualstudio.com/Download](https://code.visualstudio.com/Download#)
2. Descargar el archivo *.deb* para **Arm64**
    <img width="1494" height="974" alt="Screenshot_2025-08-22_at_15 34 53" src="https://github.com/user-attachments/assets/0e1087c3-3bb6-4680-b642-0d2123b79672" />
    
3. Abrir una terminal ejecutar
    
    ```
    sudo apt install ./<nombre del archivo>
    ```
    
    Cuando aparezca esta ventana en el instalador seleccionar **<Si>**
    <img width="731" height="578" alt="Screenshot_2025-08-22_at_15 37 37" src="https://github.com/user-attachments/assets/42e69d4c-01ba-4b77-b89d-13739250fe38" />  

## 4. Instalación de Docker en la máquina virtual de Kali Linux6.

El proceso a explicar está basado en los pasos a seguir mostrados en el siguiente link: [https://docs.docker.com/engine/install/debian/#installation-methods](https://docs.docker.com/engine/install/debian/#installation-methods)

1. En la terminal de la VM ejecutar:

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
Se comenzarán a realizar descargas, ingresar contraseña de la vm cuando sea solicitada. Presionar la tecla S o Y para confirmar la descarga cuando sea necesario.
<img width="1410" height="795" alt="Screenshot_2025-08-25_at_17 49 19" src="https://github.com/user-attachments/assets/dd4f9198-1e34-4bcc-a8cf-0d8b3c8c75e2" />

<img width="1410" height="795" alt="Screenshot_2025-08-25_at_17 50 26" src="https://github.com/user-attachments/assets/f0ae9aaf-bcb7-4621-b7c4-55bd1235dee4" />

<img width="1410" height="795" alt="Screenshot_2025-08-25_at_17 50 38" src="https://github.com/user-attachments/assets/1a977a3b-6564-4be5-8157-7a66189ee32a" />

2. Ejecutar en la terminal
```
sudo apt install docker.io docker-compose
```
Cuando se solicite confirmación, teclear Yo S + enter. 
<img width="1410" height="795" alt="Screenshot_2025-08-25_at_17 51 16" src="https://github.com/user-attachments/assets/c98e38e7-6e9e-4b6a-baac-a0699bed2668" />

<img width="1410" height="795" alt="Screenshot_2025-08-25_at_17 56 15" src="https://github.com/user-attachments/assets/7ebb453f-263c-4e2c-a83a-c27a8ccbfa04" />

3. Para comenzar y verificar la correcta instalación de docker, ejecutar en la terminal:

```
sudo systemctl enable docker

# Luego...
sudo systemctl start docker

# Para verificar la versión de docker instalada:
docker --version

```

<img width="1410" height="795" alt="Screenshot_2025-08-25_at_18 53 47" src="https://github.com/user-attachments/assets/2462d17a-ef73-4f0a-bd76-07deeccff139" />

## 5. Ejecución de OWASP Juice Shop7 en un ambiente Dockerizado.

1. Crear un archivo *.yml* con el siguiente contenido y guardarlo
    
    ```yaml
    version: '3'
    services:
      juice-shop:
        image: bkimminich/juice-shop
        ports:
          - "3000:3000"
    ```
    
    <img width="1410" height="795" alt="Screenshot_2025-08-25_at_19 02 47" src="https://github.com/user-attachments/assets/dcc6e2f3-6002-42c6-a841-d5e93ceaa5b3" />
    
2. Abrir una terminal y moverse hasta la carpeta donde está creado el archivo del paso anterior
3. Ejecutar
    
    ```bash
    sudo docker compose up
    ```
    <img width="1410" height="795" alt="Screenshot_2025-08-25_at_19 06 58" src="https://github.com/user-attachments/assets/841ae9c5-7eda-4198-86c8-616ab7203915" /> 

```bash
# Para corroborar qué contenedores están corriendo
docker ps
# Si pide permisos
sudo docker ps

# Para detener un contenedor
docker stop <id-contenedor>
```

## 6. Ejecución de Crappi8 en un ambiente Dockerizado.

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
    <img width="1710" height="1107" alt="Screenshot_2025-08-26_at_14 56 14" src="https://github.com/user-attachments/assets/998dadae-52c6-4342-8e3c-35a9a38bc65f" />

## 7. Prueba de la visualización del tráfico en el proxy de interceptación (Burp Suite)

Este procedimiento permite configurar Burp Suite como proxy para luego interceptar el tráfico del navegador.

### 7.1. Configuración del Proxy en Burp Suite

1. Abrir **Burp Suite** e ir a `Proxy > Proxy Settings`
2. Verificar que el proxy esté activo con:
    - **Interface:** `127.0.0.1:8080`
    - **Running:** Activado (checkbox marcado)
    <img width="1348" height="372" alt="Screenshot_2025-08-25_at_23 53 15" src="https://github.com/user-attachments/assets/9d29f0f7-634d-43b5-8508-7c9f5ffe333d" />


### 7.2. Configuración del Proxy en el Navegador (Firefox)

1. Abrir **Firefox** e ir a: `Settings > General > Network Settings` y hacer click en `Settings`
    <img width="1710" height="1107" alt="Screenshot_2025-08-25_at_23 40 12" src="https://github.com/user-attachments/assets/2c37879d-c71e-4aa6-9913-7b515d8e0309" />
    <img width="1863" height="1109" alt="Screenshot_2025-08-25_at_23 41 37" src="https://github.com/user-attachments/assets/443f6926-3573-4f2b-a5c9-e2159e61839d" />
    
2. Seleccionar **Manual proxy configuration** y completar los siguientes campos:
    - **HTTP Proxy:** `127.0.0.1`
    - **Port:** `8080`
    - Seleccionar el checkbox **“Also use this proxy por HTTPS”**
    
    Hacer click en **OK** para guardar los cambios.
    <img width="1710" height="1107" alt="Screenshot_2025-08-26_at_00 00 39" src="https://github.com/user-attachments/assets/48143cca-eed8-424a-8ff1-0000eaba9884" />

### 7.3. Emisión del certificado para HTTPS

1. Abrir Burp Suite e ir a: `Proxy > Proxy Settings`, luego seleccionar **Import/ export CA certificate**
    <img width="1710" height="1107" alt="Screenshot_2025-08-25_at_23 54 35" src="https://github.com/user-attachments/assets/00ab957e-91d1-4a45-8a54-d5ee4ef8ca20" />
    
2. Seleccionar **Certificate in DER format**
    <img width="1710" height="1107" alt="Screenshot_2025-08-25_at_23 54 47" src="https://github.com/user-attachments/assets/1ac43b86-146c-414c-ae97-97b93d80b805" />
    
3. Elegir una ubicación para guardarlo y confirmar

### 7.4. Configuración del Certificado en el Navegador (Firefox)

1. Abrir **Firefox** e ir a `Settings > Privacy & Security > Security > Certificates` y hacer click en **View Certificates**
    <img width="1710" height="1107" alt="Screenshot_2025-08-26_at_13 00 36" src="https://github.com/user-attachments/assets/b1c9ed1e-87d1-4a30-8339-c19b3d738fb9" />
    
2. Hacer click en **Import**
    <img width="1710" height="1107" alt="Screenshot_2025-08-26_at_13 00 45" src="https://github.com/user-attachments/assets/0c387213-5bda-4062-94c4-6812e77cba14" />
    
3. Seleccionar el certificado emitido
    <img width="1710" height="1107" alt="Screenshot_2025-08-26_at_13 00 56" src="https://github.com/user-attachments/assets/c65ef655-3771-4289-8bee-85fc00be9c59" />
    
4. Marcar el checkbox **“Trust this CA to identify websites”** y hacer click en **OK** para guardar los cambios
    <img width="1710" height="1107" alt="Screenshot_2025-08-26_at_13 02 26" src="https://github.com/user-attachments/assets/ba99bbf8-2da9-4c73-b8f1-759379225130" />
    
5. Al hacer scroll debería aparecer PortSwigger como entidad certificadora
    <img width="1710" height="1107" alt="Screenshot_2025-08-26_at_13 02 43" src="https://github.com/user-attachments/assets/e4395e06-eb0d-4d10-ba77-9113a2adce52" />

### 7.5. Visualización de tráfico en el proxy de interceptación

Teniendo el proxy configurado, es posible visualizar el tráfico de la siguiente manera:

1. Abrir **Firefox** y acceder a cualquier página web (ej: www.ucu.edu.uy)
    <img width="1710" height="1107" alt="Screenshot_2025-08-26_at_13 24 22" src="https://github.com/user-attachments/assets/81be3c5e-2569-4faa-ad46-6af2a32062d3" />
    
2. En Burp Suite ir a `Proxy > HTTP history` 
    
    Aparecerá todo el tráfico interceptado
    <img width="1710" height="1107" alt="Screenshot_2025-08-26_at_13 24 49" src="https://github.com/user-attachments/assets/bcb6dea9-8acf-4f52-8a14-7e2c0f89a770" />
