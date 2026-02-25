# 21. Desplegar en Itch.io

!!! info "Objetivo de esta sección"
    Publicar tu juego de Unity en **[itch.io](https://itch.io)** para que cualquier persona pueda jugarlo desde el navegador o descargarlo.

!!! tip "🙋‍♀️ Ayuda"
    🙋‍♀️ No olvides preguntarle a los mentores de Campfire si necesitas ayuda.

---

## ¿Qué es Itch.io?

**Itch.io** es una plataforma gratuita para publicar y compartir videojuegos independientes. Es la forma más rápida de que tus compañeros y familia puedan probar tu juego sin necesidad de instalar nada.

Puedes publicar tu juego:
- **Para PC** (ejecutable `.exe` que se descarga)
- **Para WebGL** (se juega directo en el navegador, sin descargar nada)

---

## Paso 1 – Configurar Player Settings

Antes de hacer el Build, configura la información de tu juego.

!!! example "Actividad – Player Settings"
    1. En Unity, ve al menú **Edit → Project Settings**.
    2. En el panel izquierdo, haz clic en **Player**.
    3. Configura los siguientes campos:
        - **Product Name**: el nombre de tu juego (ej: `MiJuego Campfire`)
        - **Company Name**: tu nombre o el nombre de tu equipo
        - **Version**: `1.0`

📸 **Foto aquí (ventana Project Settings – Player):**  
![Player Settings](img/REEMPLAZAR.png)

---

## Paso 2 – Configurar el Splash Screen

El **Splash Screen** es la pantalla que se muestra mientras carga el juego. Puedes personalizarla con el logo de tu equipo.

!!! example "Actividad – Splash Screen"
    1. En **Project Settings → Player**, busca la sección **Splash Image**.
    2. Desactiva **Show Unity Logo** si no quieres el logo de Unity (disponible solo en planes de pago; en la versión gratuita aparece el logo de Unity obligatoriamente).
    3. En **Logos**, puedes agregar tu propio logo haciendo clic en el **+** y arrastrando un sprite.
    4. Cambia el **Background Color** al color que quieras para la pantalla de carga.

📸 **Foto aquí (sección Splash Image en Player Settings):**  
![Splash Screen](img/REEMPLAZAR.png)

---

## Paso 3 – Build para PC (Windows)

!!! example "Actividad – Build PC"
    1. Ve al menú **File → Build Settings**.
    2. Asegúrate de que la plataforma seleccionada sea **PC, Mac & Linux Standalone**.
    3. En la lista **Scenes In Build**, verifica que tu escena principal esté incluida.  
       Si no aparece, ábrela en Unity y haz clic en **Add Open Scenes**.
    4. Haz clic en **Build** (o **Build And Run** para probar inmediatamente).
    5. Elige una carpeta de destino (ej: `Builds/PC/`) y espera a que termine.
    6. Cuando termine, tendrás un archivo **`.exe`** y una carpeta **`_Data`** — ambos son necesarios. Comprime todo en un **ZIP**.

📸 **Foto aquí (ventana Build Settings con PC seleccionado):**  
![Build PC](img/REEMPLAZAR.png)

!!! warning "No muevas el .exe solo"
    El archivo `.exe` no funciona sin su carpeta `_Data`. Siempre compártelos juntos dentro del ZIP.

---

## Paso 4 – Build para WebGL (navegador)

El Build de WebGL permite que cualquiera juegue desde el navegador sin instalar nada.

!!! example "Actividad – Build WebGL"
    1. Ve a **File → Build Settings**.
    2. Selecciona la plataforma **WebGL** en la lista de la izquierda.
    3. Haz clic en **Switch Platform** y espera (puede tardar varios minutos).
    4. Haz clic en **Build**.
    5. Elige una carpeta de destino (ej: `Builds/WebGL/`).
    6. Espera a que Unity termine de compilar. Al final tendrás una carpeta con varios archivos, incluido **`index.html`**.

📸 **Foto aquí (Build Settings con WebGL seleccionado):**  
![Build WebGL](img/REEMPLAZAR.png)

---

## Arreglo común – Auto Graphics API

Si el Build de WebGL da error relacionado con **Auto Graphics API**, sigue estos pasos:

!!! example "Actividad – Deshabilitar Auto Graphics API"
    1. Ve a **Edit → Project Settings → Player**.
    2. En la sección **Other Settings**, busca **Auto Graphics API**.
    3. **Desmarca** esa casilla.
    4. En la lista de APIs que aparece, asegúrate de que solo quede **WebGL 2.0** (elimina las demás si hay alguna incompatible).
    5. Vuelve a hacer el Build de WebGL.

📸 **Foto aquí (Other Settings con Auto Graphics API desmarcado):**  
![Auto Graphics API](img/REEMPLAZAR.png)

---

## Paso 5 – Crear una cuenta en Itch.io

!!! example "Actividad – Registrarse en Itch.io"
    1. Ve a **[itch.io](https://itch.io)** y haz clic en **Register**.
    2. Completa el formulario: nombre de usuario, correo y contraseña.
    3. Confirma tu correo electrónico.
    4. ¡Listo! Ya tienes tu cuenta de desarrollador.

📸 **Foto aquí (pantalla de registro en Itch.io):**  
![Itch.io registro](img/REEMPLAZAR.png)

---

## Paso 6 – Crear el proyecto en Itch.io

!!! example "Actividad – Subir el juego"
    1. Inicia sesión en **itch.io** y haz clic en tu avatar (arriba a la derecha).
    2. Selecciona **Dashboard** y luego **Create new project**.
    3. Completa los campos:
        - **Title**: nombre de tu juego
        - **Project URL**: la URL donde se va a publicar (ej: `mi-juego-campfire`)
        - **Kind of project**: `HTML` (si es WebGL) o `Downloadable` (si es solo PC)
        - **Classification**: `Games`
    4. Sube una imagen de portada en **Cover image**.
    5. En la sección **Uploads**, sube tu archivo ZIP.

📸 **Foto aquí (formulario Create new project en Itch.io):**  
![Crear proyecto Itch.io](img/REEMPLAZAR.png)

---

## Paso 7 – Embed options (WebGL en navegador)

Para que el juego se juegue directo en la página de Itch.io sin descargar nada:

!!! example "Actividad – Configurar Embed para WebGL"
    1. En la sección **Uploads** de tu proyecto, sube el ZIP con los archivos de WebGL.  
       ⚠️ El ZIP **debe contener el archivo `index.html`** en la raíz (no dentro de subcarpetas).
    2. Cuando suba el archivo, marca la casilla **This file will be played in the browser**.
    3. En **Embed options**, ajusta el tamaño del juego:
        - **Width**: `960` (o el ancho de tu juego)
        - **Height**: `600` (o el alto de tu juego)
    4. Activa **Enable fullscreen button** para que los jugadores puedan entrar a pantalla completa.

📸 **Foto aquí (sección Uploads con "played in the browser" marcado):**  
![Embed WebGL](img/REEMPLAZAR.png)

!!! warning "El ZIP debe tener index.html en la raíz"
    Si comprimes la carpeta WebGL completa, el `index.html` quedará dentro de una subcarpeta y no funcionará.  
    **Solución**: entra a la carpeta `Builds/WebGL/`, selecciona **todos los archivos** de adentro y comprímalos directamente.

---

## Paso 8 – Publicar (Draft → Public)

!!! example "Actividad – Hacer el juego público"
    1. Baja hasta la sección **Visibility & access** en la edición del proyecto.
    2. Cambia de **Draft** a **Public** cuando estés listo para que todos puedan verlo.
    3. Haz clic en **Save & view page** para ver cómo queda la página.
    4. Comparte el enlace con tus compañeros y familia. 🎉

📸 **Foto aquí (sección Visibility con opción Public seleccionada):**  
![Publicar Itch.io](img/REEMPLAZAR.png)

!!! tip "Draft primero"
    Puedes dejar el proyecto en **Draft** mientras lo terminas — solo tú puedes verlo. Cámbialo a **Public** cuando esté listo.

---

## ✅ Checklist de publicación en Itch.io

Marca cada ítem cuando lo hayas completado:

<ul class="cf-checklist">
  <li><label><input type="checkbox"> Configuré <strong>Player Settings</strong> (nombre del juego, compañía, versión)</label></li>
  <li><label><input type="checkbox"> Personalicé el <strong>Splash Screen</strong> (color o logo)</label></li>
  <li><label><input type="checkbox"> Hice el <strong>Build para PC</strong> y lo comprimí en ZIP</label></li>
  <li><label><input type="checkbox"> Hice el <strong>Build para WebGL</strong> sin errores</label></li>
  <li><label><input type="checkbox"> Resolví el problema de <strong>Auto Graphics API</strong> si apareció</label></li>
  <li><label><input type="checkbox"> Creé mi cuenta en <strong>Itch.io</strong></label></li>
  <li><label><input type="checkbox"> Creé el proyecto en Itch.io con título, portada y descripción</label></li>
  <li><label><input type="checkbox"> Subí el ZIP con el <code>index.html</code> en la raíz y configuré el embed</label></li>
  <li><label><input type="checkbox"> Cambié la visibilidad a <strong>Public</strong> y compartí el enlace</label></li>
</ul>

---

🙋‍♀️ No olvides preguntarle a los mentores de Campfire si necesitas ayuda.
