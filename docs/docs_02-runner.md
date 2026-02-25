# 2. Endless Runner (carriles)

En este ejemplo el jugador **no avanza hacia adelante**.  
El truco es: **premios y obstáculos se mueven hacia el jugador**.

📸 **Foto aquí (vista de la escena Runner):**  
![Runner escena](img/REEMPLAZAR-runner-escena.png)

---

## 2.1 Objetivo del juego
- Muévete **izquierda/derecha** para:
  - evitar obstáculos
  - recoger premios
- Ver puntos en la UI

---

## 2.2 Encuentra el Jugador
1. En **Hierarchy**, busca `Jugador`.
2. Selecciónalo.
3. En **Inspector**, mira sus componentes.

📸 **Foto aquí (Jugador seleccionado en Inspector):**  
![Jugador](img/REEMPLAZAR-runner-jugador.png)

### ¿Qué deberías ver?
- Un componente de física (por ejemplo `Rigidbody`)
- Un **Script** (control del jugador)
- Un Collider/Trigger para detectar cosas

---

## 2.3 Movimiento izquierda/derecha (carriles)
La idea: el jugador se mueve solo en X.

Actividad guiada:
1. En Play, presiona A/D o ←/→ (según tu configuración).
2. Observa: ¿cambia de carril? ¿se siente rápido?

Mini reto (seguro):
- Cambia el valor de **velocidad lateral** (si existe) y prueba.

📸 **Foto aquí (dónde se ajusta velocidad del jugador):**  
![Velocidad jugador](img/REEMPLAZAR-runner-velocidad.png)

---

## 2.4 UI de puntos
Busca en Hierarchy un Canvas o UI (ej: `UI`, `txtPuntos`).

Actividad:
1. Encuentra `txtPuntos` en Hierarchy.
2. Selecciónalo y mira el componente `Text`/`TextMeshPro`.

📸 **Foto aquí (txtPuntos en Inspector):**  
![txtPuntos](img/REEMPLAZAR-txtpuntos.png)

Pregunta:
- ¿Qué muestra antes de jugar? ¿y cuando recoges un premio?

---

## 2.5 Premios: aparecen solos cada cierto tiempo
En Hierarchy busca `GeneradorPremios`.

Actividad:
1. Selecciónalo.
2. Mira su Script en Inspector.
3. Identifica:
   - el prefab que instancia (Premio)
   - cada cuánto aparece

Mini reto:
- Haz que aparezcan más seguido (sin exagerar).

📸 **Foto aquí (GeneradorPremios seleccionado):**  
![GeneradorPremios](img/REEMPLAZAR-generadorpremios.png)

---

## 2.6 Obstáculos: aparecen al cruzar límites (triggers)
Busca algo como `ZonasGeneracionObstaculos` y objetos `LimiteIzq/Centro/Der`.

Actividad:
1. Selecciona un `Limite...`
2. En Inspector revisa:
   - BoxCollider con **Is Trigger** activado
   - Script que genera cubos/obstáculos

Mini reto:
- Cambia posiciones de spawn (solo un poquito) y observa diferencias.

📸 **Foto aquí (LimiteCentro y su BoxCollider IsTrigger):**  
![Límites](img/REEMPLAZAR-limites.png)

---

## 2.7 El truco del Runner: el mundo se mueve hacia ti
Premios y obstáculos tienen un script tipo **MovimientoObjeto** que:
- mueve el objeto hacia el jugador
- lo destruye cuando ya pasó

Actividad:
1. Encuentra un prefab/objeto `Premio` u `Obstaculo`.
2. Revisa su script de movimiento.
3. Identifica la variable de **rapidez**.

Mini reto:
- Sube un poco la rapidez y juega 30 segundos.
- Luego baja la rapidez y compara.

📸 **Foto aquí (Inspector del prefab Premio/Obstaculo con rapidez):**  
![MovimientoObjeto](img/REEMPLAZAR-movimientoobjeto.png)