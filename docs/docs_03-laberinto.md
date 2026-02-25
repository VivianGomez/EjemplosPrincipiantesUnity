# 3. Laberinto (meta y evento)

Aquí el jugador sí se mueve por el mundo y al llegar a la **Meta** se activa un evento.

📸 **Foto aquí (vista de la escena Laberinto):**  
![Laberinto escena](img/REEMPLAZAR-laberinto-escena.png)

---

## 3.1 Objetivo del juego
- Encontrar la **Meta**
- Cuando entras en la Meta:
  - aparece un mensaje/Canvas
  - (opcional) se detiene el jugador o se muestra “¡Ganaste!”

---

## 3.2 Jugador del laberinto
1. En Hierarchy, selecciona `Jugador`.
2. En Inspector busca:
   - `CharacterController`
   - Script de movimiento
   - `Animator` (si hay animaciones)

📸 **Foto aquí (Jugador Laberinto seleccionado):**  
![Jugador laberinto](img/REEMPLAZAR-laberinto-jugador.png)

Mini reto:
- Cambia la velocidad (poquito) y prueba.

---

## 3.3 La Meta (Trigger)
1. En Hierarchy selecciona `Meta`.
2. Asegúrate de que su `BoxCollider` tenga **Is Trigger** activado.
3. Mira el Script:
   - ¿qué objeto es el activador? (Jugador)
   - ¿qué objeto se muestra? (UI)

📸 **Foto aquí (Meta + IsTrigger + Script):**  
![Meta](img/REEMPLAZAR-meta.png)

---

## 3.4 UI de victoria
Busca un objeto `UI` (Canvas) que esté desactivado al inicio.

Actividad:
1. Encuentra `UI`.
2. Confirma que empieza desactivado (checkbox arriba a la izquierda).
3. Juega y llega a la Meta: debe activarse.

📸 **Foto aquí (UI desactivada):**  
![UI](img/REEMPLAZAR-ui.png)

Mini reto:
- Cambia el texto del mensaje de victoria.