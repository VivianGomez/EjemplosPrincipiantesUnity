# 20. Arte: modelos 3D y animaciones

!!! info "Objetivo de esta sección"
    Aprender a conseguir modelos 3D, animaciones y otros recursos visuales gratuitos, e importarlos correctamente a tu proyecto de Unity para darle identidad propia a tu juego.

!!! tip "🙋‍♀️ Ayuda"
    🙋‍♀️ No olvides preguntarle a los mentores de Campfire si necesitas ayuda.

---

## ¿Qué recursos visuales necesita tu juego?

Antes de buscar assets, piensa qué necesitas:

| Tipo de recurso | Ejemplos |
|-----------------|---------|
| **Modelos 3D** | Personaje, enemigos, objetos coleccionables, decoración |
| **Animaciones** | Las que te permitan dar vida a tu personaje. Por ejemplo: Correr, saltar, atacar, idle (quieto), saludar...  |
| **Texturas / Materiales** | Colores, superficies (madera, piedra, metal) |
| **Skybox** | El "cielo" o fondo del mundo 3D |
| **Sprites 2D** | Iconos, botones, fondo del menú, elementos de UI |

Ahora que ya sabes que cosas puedes necesitar para darle vida a tu juego, vamos a analizar qué opciones tienes para conseguir esos recursos.

---

## Opción A – Sketchfab (modelos 3D listos)

[Sketchfab](https://sketchfab.com) es una plataforma con miles de modelos 3D gratuitos listos para descargar.
Esta te puede servir para los modelos del entorno, mesas, sillas, ambientación, etc.

!!! example "Actividad – Descargar un modelo de Sketchfab"
    1. Ve a **[sketchfab.com](https://sketchfab.com)**.
    2. Usa el buscador para encontrar el modelo que necesitas (ej: `fantasy room fbx`). La palabra fbx es para establecer el formato deseado.
    3. Filtra por **Downloadable** (descargable) en el menú lateral.
    4. Abre el modelo que te guste y asegurate de que tenga Licencia abierta (es importante atribuir a los artistas)
    5. Haz clic en **Download**.
    5. Elige el formato **FBX** (el que comprende Unity).
    6. Guarda el archivo en tu computador.

📸 **Visualiza los pasos aquí**  
![Sketchfab download](img/pasosSketchfab.jpg)

!!! warning "Licencias"
    Algunos modelos requieren que pongas crédito al autor. Revisa la licencia antes de usarlos en tu juego.
    Si no entiendes cuáles licencias son "abiertas", llama a los mentores una vez selecciones el modelo que quieres para tu juego.

!!! example "Reto - Importar el objeto 3D a Unity"
    Arrastra el objeto desde la carpeta descargas a la carpeta _Assets > 3D_ y úsalo en tu escena. 

---

## Opción B – Recursos del Asset Store de Unity
Unity Asset Store es la tienda oficial de recursos de Unity, en ella encontrarás: objetos 3d/2d, animaciones, interfaz de usuario / menús, imágenes que simulan cielos (skyboxes), personajes y mucho más!
Su ventaja es que está integrada directamente con el Editor de Unity, así que descargar los recursos es mucho más fácil.

!!! example "Actividad – Descargar _props_ usando Unity Asset Store"
    1. Ve a **[Unity Asset Stote](https://assetstore.unity.com/)** desde el navegador
    2. Inicia sesión con la misma cuenta que usaste en UnityHub
    3. Haz una búsqueda en la barra (ej: Fantasy) y establece el filtro Price > Free ✅
    4. Busca el asset que más te sirva para tu juego... Puedes aplicar más filtos usando la barra del lado izquierdo de la pantalla (ej: 3D > Props)
    5. Selecciona el asset dando click en su imagen
    6. Luego dale click al botón "Add to my Assets" y luego a "Open in Unity".
    7. Desde Unity da click en "Download" y luego, cuando se termine la descarga, se habilitará el botón "Import".
    8. ¡Y listo! Te aparecerá una nueva carpeta con los recursos descargados.

📸 **Visualiza los pasos aquí**  
![Asset store](img/pasosAssetStore.jpg)
<br>

Y en Unity:<br>
![Asset store](img/assetStoreUnity.png)

!!! tip "Aclaración"
    ¡Puedes buscar en el Asset Store muchos recursos! explóra que otras cosas puedes usar en esta herramienta para tu videojuego.

!!! example "Reto - Usar recursos en Unity"
    Usa el objeto descargado en tu escena. Nota que en algunas ocasiones, los materiales, que te permiten dar color o textura a un objeto 3d deben configurarse manualmente.
    Pero tranquil@, basta con arrastar el objeto a la escena y luego, ponerle el material. Abajo te dejamos una imagen de referencia, pero recuerda que puedes llamar a los mentores si necesitas apoyo.

 ![Reto Asset store](img/retoAssetStore.png)

---

## Opción C – Hyper3D + Mixamo (modelo + animación automática)

Esta opción te va a permitir explorar más tu creatividad, prototipando los objetos 3D con tus dibujos y el uso de IA.
Para el ejemplo, explicaremos como puedes generar personajes. Sin embargo, puedes aplicar los pasos C.1 y C.2 a cualquier objeto 3d que quieras generar.

### Paso C.1 – Diseña tu personaje
!!! example "Actividad – Genera una imagen digital vectorizada a partir de tus bocetos"
    1. Ve a **[gemini.google.com/](https://gemini.google.com/)**.
    2. Sube una imagen de tu personaje, puedes dibujar tus bocetos a mano tomarles foto o, simplemente generar la imagen describiéndo tu personaje en texto.
    3. Si decides usar tus bocetos, puedes usar este prompt "Crea una imagen digital vectorizada de mi personaje en pose T, pero agregale colores, usa azul para la cabeza, verde aguamarina degradado con el azul en el cuerpo y morado para las gafas y las hojas de la cabeza." e iterar hasta que logres el resultado que más te guste.
    4. Descarga la imagen de tu personaje en pose T.

![Gemini](img/pasosGemini.jpg)


### Paso C.2 – Generar el modelo con Hyper3D (Rodin)

!!! example "Actividad – Crear modelo 3D desde una imagen"
    1. Ve a **[hyper3d.ai](https://hyper3d.ai)** (o busca **Rodin 3D**).
    2. Sube la imagen del personaje que quieras generar (ej: la del paso C.1).
    3. Espera a que se genere el modelo 3D (puede tomar unos minutos).
    4. Descarga el modelo en formato **FBX** o **GLB**.
    5. Aún no lo muevas a Unity, primero vamos a volverlo "animable" en el paso C.3

📸 **Visualiza los pasos aquí:**  
![Hyper3D 1](img/hyper3D1.jpg)
<br>

Descarga el modelo en formato FBX:<br>
![Hyper3D 2](img/descargarFBXHyper.png)

### Paso C.3 – Animar el modelo con Mixamo

[Mixamo](https://www.mixamo.com) es una herramienta gratuita de Adobe que permite crear "esqueletos" de animación para personajes tradicionales (con piernas y brazos) de manera automática. Además, es también una biblioteca de personajes y animaciones. Así que puedes usar algunos gratuitos o subir tu propio personaje. En este taller vamos a enseñarte como usar las animaciones de Mixamo en un personaje propio.

!!! example "Actividad – Animar con Mixamo"
    1. Ve a **[mixamo.com](https://www.mixamo.com)** y crea una cuenta gratuita.
    2. Haz clic en **Upload Character** y sube el modelo FBX que descargaste.
    3. Mixamo intentará auto-detectar la posición del esqueleto. Ajusta si es necesario.
    4. En la pestaña **Animations**, busca y elige las animaciones que necesitas (ej: `Run`, `Jump`, `Idle`).
    5. Para cada animación, haz clic en **Download**:
        - **Format**: FBX for Unity
        - **Skin**: With Skin (para la primera descarga) / Without Skin (para animaciones adicionales)
    6. Guarda todos los archivos descargados en una carpeta especial para tu personaje: 3D > Carpeta para tu personaje.

📸 **Visualiza los pasos de Mixamo aquí:**  
![Mixamo](img/pasosMixamo.jpg)
<br>
Y descarga así:<br>
![Mixamo2](img/descargasMixamo.png)


!!! tip "Tip – Varias animaciones"
    Si vas a usar varias animaciones del mismo personaje, descarga la primera con **With Skin** y las demás con **Without Skin**. Así el archivo es más liviano.

---

## Importar modelos a Unity

### Estructura de carpetas recomendada

Mantener el proyecto organizado evita errores y hace más fácil encontrar los archivos:

```
Assets/
├── Models/
│   ├── Personaje/
│   │   ├── Personaje.fbx
│   │   ├── Personaje_Run.fbx
│   │   └── Personaje_Jump.fbx
│   └── Ambiente/
│       └── Arbol.fbx
├── Textures/
│   └── Personaje_Diffuse.png
├── Materials/
│   └── Personaje_Mat.mat
└── Animations/
    └── Personaje_Run.anim
```

!!! example "Actividad – Importar un modelo FBX"
    1. En Unity, abre el panel **Project**.
    2. Crea las carpetas `Models`, `Textures` y `Materials` si no existen (clic derecho → **Create → Folder**).
    3. Arrastra el archivo `.fbx` desde el explorador de archivos de tu computador a la carpeta **Models** en el panel Project de Unity.
    4. Unity importará automáticamente el modelo. Verás el objeto en el panel Project.
    5. Arrastra el modelo desde el panel Project hasta la ventana **Scene** o la **Hierarchy** para colocarlo en la escena.

📸 **Ventana de proyecto con nuevo fbx**  
![Importar FBX](img/arrastrar.png)

### Configurar el modelo importado

!!! example "Actividad – Revisar la configuración de importación"
    1. Selecciona el archivo `.fbx` en el panel **Project**.
    2. En el **Inspector** verás varias pestañas: **Model**, **Rig**, **Animation**, **Materials**.
    3. En la pestaña **Rig**:
        - Si el modelo tiene esqueleto (para animaciones), cambia **Animation Type** a **Humanoid** o **Generic**.
        - Haz clic en **Apply**.
    4. En la pestaña **Animation**, verifica que las animaciones estén listadas.

📸 **Observa aquí el Inspector con pestañas de importación FBX (para un objeto vs un personaje):**  
![FBX Inspector](img/revisarFbXUnity.jpg)

---

## Skybox y fondo del mundo

El **Skybox** es la textura que rodea toda la escena y simula el cielo o el ambiente.

!!! example "Actividad – Cambiar el Skybox"
    1. En Unity, ve al menú **Window → Rendering → Lighting**.
    2. En la ventana **Lighting**, busca la sección **Environment**.
    3. Haz clic en el círculo junto a **Skybox Material** y elige un material de skybox (en la plantilla hay unos descargados, pero ¡puedes obtener más en AssetStore!).

📸 **Foto aquí (ventana Lighting con Skybox resaltado):**  
![Skybox](img/skyboxLighting.png)

!!! tip "Skyboxes gratuitos"
    En la **Asset Store** de Unity (Window → Asset Store) puedes buscar **skybox free** y encontrar varios paquetes gratuitos.

---

## Texturas y Materiales

Un **Material** define cómo se ve la superficie de un objeto (color, brillo, transparencia).  
Una **Textura** es la imagen que se "pega" sobre el material.

!!! example "Actividad – Crear un Material con textura"
    1. En el panel **Project**, haz clic derecho en la carpeta **Materials**.
    2. Selecciona **Create → Material**.
    3. Dale un nombre descriptivo (ej: `Suelo_Mat`).
    4. Con el material seleccionado, en el **Inspector** verás el campo **Albedo**.
    5. Haz clic en el círculo junto a **Albedo** y elige una textura importada, o haz clic en el color para cambiar el color directamente.
    6. Arrastra el material desde el panel Project al objeto en la **Scene** o la **Hierarchy**.

!!! tip "Consigue texturas para el suelo y más"
    Hay muchos sitios web con texturas, uno de ellos es [Textures Free](https://www.textures.com/free).<br> 
    Explora las texturas gratuitas descarga una, estas son imágenes normales que puedes asociar al material de un objeto 3d. ¡Inténtalo por tu cuenta! (si necesitas ayuda, llama a los mentores).

---

📸 **Foto aquí (Inspector del Material con Albedo resaltado):**  
![Material](img/albedo.png)

---

## Elementos de UI (Interfaz de Usuario)

Los elementos de UI (botones, textos, barras de vida, puntaje) viven dentro de un **Canvas** en Unity.

!!! example "Actividad – Agregar imagen de UI"
    1. En la **Hierarchy**, haz clic derecho y selecciona **UI → Image**.
    2. Se crea automáticamente un `Canvas` con un objeto `Image` dentro.
    3. Con la `Image` seleccionada, en el **Inspector** busca **Source Image**.
    4. Haz clic en el círculo y selecciona el sprite que quieres mostrar.
    5. Ajusta la posición y tamaño con las herramientas de **Rect Transform**.

📸 **Canvas con Image en Hierarchy e Inspector:**  
![UI Image](img/canvasImage.png)

!!! tip "Sprites 2D para UI"
    Importa imágenes PNG a Unity (arrástralas al panel Project).  
    Selecciona la imagen importada y en el **Inspector** cambia **Texture Type** a **Sprite (2D and UI)**.  
    Haz clic en **Apply**.
    <br>
    Para encontrar imágenes para tus menús e interfaces de usuario, busca en Unity Asset Store y filtra por recursos 2D.

---

![Recursos UI](img/recursosUI.png)

## Retos de arte

¡Pon en práctica lo que aprendiste! Elige uno o más retos, los que necesites para aplicar lo aprendido a tu propio videojuego:

!!! example "Reto 1 – Personaje propio"
    Descarga o genera un modelo 3D y reemplaza el personaje por defecto de tu escena.

!!! example "Reto 2 – Mundo con estilo"
    Cambia el Skybox y crea al menos 2 materiales con colores o texturas distintos para que tu escena tenga un estilo visual único.

!!! example "Reto 3 – Personaje animado"
    Usa Mixamo para agregar al menos 2 animaciones (idle y correr/saltar) a tu personaje e intégralas en el **Animator Controller** de Unity.

---

## ✅ Checklist de arte

Marca cada ítem cuando lo hayas completado:

<ul class="cf-checklist">
  <li><label><input type="checkbox"> Descargué o generé al menos un modelo 3D (Sketchfab o Hyper3D)</label></li>
  <li><label><input type="checkbox"> Importé el modelo FBX en Unity con la estructura de carpetas correcta</label></li>
  <li><label><input type="checkbox"> El modelo aparece en la escena sin errores</label></li>
  <li><label><input type="checkbox"> Configuré el tipo de <strong>Rig</strong> del modelo en el Inspector</label></li>
  <li><label><input type="checkbox"> Cambié o personalicé el <strong>Skybox</strong> de mi escena</label></li>
  <li><label><input type="checkbox"> Creé al menos un <strong>Material</strong> con color o textura propia</label></li>
  <li><label><input type="checkbox"> Agregué al menos un elemento de <strong>UI</strong> (imagen o texto) a la escena</label></li>
</ul>

---

🙋‍♀️ No olvides preguntarle a los mentores de Campfire si necesitas ayuda.
