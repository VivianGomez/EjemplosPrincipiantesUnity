# 2. Endless Runner (carriles)

!!! info "Objetivo de esta sección"
    Entender cómo funciona el Runner: el jugador se mueve en X y **el mundo viene hacia él**.

En este ejemplo el jugador **no avanza hacia adelante**.  
El truco es: **premios y obstáculos se mueven hacia el jugador**.

📸 **Foto aquí (vista de la escena Runner):**  
![Runner escena](img/REEMPLAZAR.png)

---

## 2.1 Objetivo del juego

!!! success "Meta"
    - Muévete **izquierda/derecha** para evitar obstáculos y recoger premios.
    - Observa el contador de **puntos** en la UI.

---

## 2.2 Encuentra el Jugador

!!! example "Actividad"
    1. En **Hierarchy**, busca el objeto `Jugador`.
    2. Selecciónalo.
    3. En **Inspector**, observa sus componentes.

📸 **Foto aquí (Jugador seleccionado en Inspector):**  
![Jugador](img/REEMPLAZAR.png)

!!! note "¿Qué deberías ver?"
    - Un componente de física (`Rigidbody`)
    - Un **Script** de control del jugador
    - Un `Collider` o `Trigger` para detectar colisiones

---

## 2.3 Movimiento izquierda/derecha (carriles)

La idea: el jugador solo se mueve en el eje **X**.

!!! example "Actividad guiada"
    1. Presiona **Play**.
    2. Usa **A/D** o **←/→** (según tu configuración).
    3. Observa: ¿cambia de carril? ¿se siente rápido o lento?

!!! tip "Mini reto (seguro)"
    Busca la variable de **velocidad lateral** en el script del Jugador y cámbiala un poco.  
    Prueba el juego y compara.

📸 **Foto aquí (dónde se ajusta velocidad del jugador):**  
![Velocidad jugador](img/REEMPLAZAR.png)

---

## 2.4 UI de puntos

!!! example "Actividad"
    1. En **Hierarchy**, busca un objeto `Canvas` o algo como `txtPuntos`.
    2. Selecciónalo y mira el componente `Text` o `TextMeshPro`.
    3. **Pregunta:** ¿qué muestra antes de jugar? ¿y cuando recoges un premio?

📸 **Foto aquí (txtPuntos en Inspector):**  
![txtPuntos](img/REEMPLAZAR.png)

---

## 2.5 Premios: aparecen solos cada cierto tiempo

!!! example "Actividad"
    1. En **Hierarchy**, busca `GeneradorPremios`.
    2. Selecciónalo y mira su Script en **Inspector**.
    3. Identifica:
        - El **prefab** que instancia (Premio)
        - Cada **cuánto tiempo** aparece

!!! tip "Mini reto"
    Haz que los premios aparezcan más seguido (sin exagerar 😅).

📸 **Foto aquí (GeneradorPremios seleccionado):**  
![GeneradorPremios](img/REEMPLAZAR.png)

---

## 2.6 Obstáculos: aparecen al cruzar límites (triggers)

!!! example "Actividad"
    1. Busca `ZonasGeneracionObstaculos` en **Hierarchy**.
    2. Selecciona uno de los objetos `LimiteIzq`, `LimiteCentro` o `LimiteDer`.
    3. En **Inspector** revisa:
        - `BoxCollider` con **Is Trigger** activado ✓
        - Script que genera cubos/obstáculos

!!! tip "Mini reto"
    Cambia las posiciones de spawn (solo un poquito) y observa las diferencias.

📸 **Foto aquí (LimiteCentro y su BoxCollider IsTrigger):**  
![Límites](img/REEMPLAZAR.png)

---

## 2.7 El truco del Runner: el mundo se mueve hacia ti

!!! note "Concepto clave"
    Los premios y obstáculos tienen un script tipo **MovimientoObjeto** que:

    - mueve el objeto **hacia el jugador** (en Z)
    - lo **destruye** cuando ya pasó de largo

!!! example "Actividad"
    1. Encuentra un prefab u objeto `Premio` u `Obstaculo`.
    2. Revisa su script de movimiento.
    3. Identifica la variable de **rapidez**.

!!! tip "Mini reto"
    - Sube la rapidez y juega 30 segundos. ¿Se siente diferente?
    - Bájala y compara.

📸 **Foto aquí (Inspector del prefab Premio/Obstaculo con rapidez):**  
![MovimientoObjeto](img/REEMPLAZAR.png)

---

## ✅ Checklist del Runner

- [ ] Sé mover al Jugador izquierda/derecha en Play
- [ ] Encontré el script del Jugador y vi sus variables
- [ ] Encontré `GeneradorPremios` y sé cómo cambiar la frecuencia
- [ ] Encontré el script de movimiento de premios/obstáculos
