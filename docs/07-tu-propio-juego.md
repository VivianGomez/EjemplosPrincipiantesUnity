# 7. Empieza a crear tu propio juego

!!! info "Objetivo de esta sección"
    Llegaste al reto final: **crear tu propio juego** dentro del mismo proyecto de Unity.
    Vas a partir de cero en una escena nueva y a darle tu toque personal. ¡Esta es tu oportunidad de mostrar lo que aprendiste! 🎮

---

## ¿Por qué crear tu propio juego?

Ya exploraste el Runner y el Laberinto, modificaste scripts, cambiaste colores y viste cómo funcionan los eventos.
Ahora el reto de la **Hackathon Campfire** es que uses todos esos conocimientos para construir algo tuyo.

No tiene que ser perfecto — tiene que ser **tuyo**. Un juego hecho por ti, con tu idea, tu estilo y tu creatividad.

---

## Paso 1 – Crea una escena nueva

En Unity, cada nivel o pantalla es una **escena**. Vamos a crear una desde cero:

!!! example "Actividad – Nueva escena"
    1. En el panel **Project** (parte inferior de Unity), busca la carpeta **Scenes**.
    2. Haz clic derecho dentro de esa carpeta.
    3. En el menú que aparece, selecciona **Create → Scene**.
    4. Dale un nombre a tu escena (por ejemplo: `MiJuego`).
    5. Haz doble clic en la nueva escena para abrirla.

📸 **Foto aquí (menú Create → Scene en la carpeta Scenes):**

!!! warning "No olvides guardar"
    Guarda tu escena seguido con **Ctrl + S** (Windows) o **Cmd + S** (Mac).

---

## Paso 2 – Arma el mínimo recomendado

Para tener un juego funcional, te recomendamos incluir al menos estos cuatro elementos:

| Elemento   | ¿Para qué sirve? |
|------------|-----------------|
| **Piso**   | El espacio donde se mueve el jugador (un Plane o un Cube aplanado). |
| **Jugador** | El personaje que controla quien juega (puedes reutilizar un prefab del proyecto). |
| **Premios** | Objetos que el jugador puede recoger para sumar puntos. |
| **Puntaje** | Un texto en pantalla (TextMeshPro) que muestre los puntos acumulados. |

!!! tip "¿De dónde saco los objetos?"
    - **3D Object → Plane** para el piso (clic derecho en Hierarchy → 3D Object → Plane).
    - Los prefabs del Runner o del Laberinto están en **Assets/Prefabs** — ¡puedes reutilizarlos!
    - Copia el script `PremioScript` o `PlayerController` como punto de partida para tus scripts nuevos.

---

## Paso 3 – Dale tu toque personal

Aquí es donde tu creatividad entra en juego. Algunas ideas para inspirarte:

- 🌵 **Tema desierto**: obstáculos de cactus, un personaje que salta.
- 🚀 **Tema espacio**: recoger estrellas, evitar asteroides.
- 🏙️ **Tema ciudad**: correr por edificios, recoger monedas.
- 🐾 **Tema animales**: un perrito que atrapa huesos.

No hay límite — el único requisito es que tenga el mínimo recomendado y que sea **divertido de jugar**.

!!! example "Mini reto creativo"
    Elige un tema y cambia al menos **tres cosas** de los prefabs o colores para que tu escena se vea diferente a los ejemplos del taller.

---

## Paso 4 – Prueba y ajusta

!!! example "Actividad – Play test"
    1. Presiona el botón **▶ Play** en la parte superior de Unity.
    2. Prueba tu juego: ¿funciona el movimiento? ¿se suman los puntos?
    3. Sal del modo Play (**▶** de nuevo) y ajusta lo que no funcione.
    4. Repite hasta que estés satisfecho/a con el resultado.

---

## ✅ Checklist de tu propio juego

Marca cada ítem cuando lo hayas completado:

<ul class="cf-checklist">
  <li><label><input type="checkbox"> Creé una escena nueva en la carpeta <strong>Scenes</strong></label></li>
  <li><label><input type="checkbox"> Agregué un <strong>piso</strong> a la escena</label></li>
  <li><label><input type="checkbox"> Agregué un <strong>jugador</strong> que se pueda controlar</label></li>
  <li><label><input type="checkbox"> Agregué al menos un <strong>premio</strong> que se pueda recoger</label></li>
  <li><label><input type="checkbox"> El <strong>puntaje</strong> se muestra en pantalla y se actualiza</label></li>
  <li><label><input type="checkbox"> Probé el juego en Play Mode y funciona sin errores rojos</label></li>
  <li><label><input type="checkbox"> Le di un toque personal (tema, colores, nombre propio)</label></li>
</ul>

---

!!! success "¡Felicitaciones!"
    Si tienes todos los ítems marcados, tienes un juego listo para mostrar en la Hackathon Campfire. 🏆
    Recuerda: lo más importante no es que sea perfecto, sino que sea **tuyo** y que lo puedas explicar.

---

🙋‍♀️ No olvides preguntarle a los mentores de Campfire si necesitas ayuda.
