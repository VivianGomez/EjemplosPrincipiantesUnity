# 3. Laberinto (meta y evento)

!!! info "Objetivo de esta sección"
    Explorar el laberinto: el jugador recorre el escenario y al llegar a la **Meta** se activa un evento de victoria.

📸 **Foto aquí (vista de la escena Laberinto):**  
![Laberinto escena](img/REEMPLAZAR.png)

---

## 3.1 Objetivo del juego

!!! success "Meta"
    - Encontrar la **Meta** en el laberinto.
    - Al entrar en la Meta:
        - Aparece un mensaje/Canvas de victoria.
        - (Opcional) El jugador se detiene o aparece "¡Ganaste!"

---

## 3.2 Jugador del laberinto

!!! example "Actividad"
    1. En **Hierarchy**, selecciona el objeto `Jugador`.
    2. En **Inspector** busca:
        - `CharacterController`
        - Script de movimiento
        - `Animator` (si hay animaciones)

📸 **Foto aquí (Jugador Laberinto seleccionado):**  
![Jugador laberinto](img/REEMPLAZAR.png)

!!! tip "Mini reto"
    Cambia la velocidad del jugador (poquito) y prueba cómo se siente.

---

## 3.3 La Meta (Trigger)

!!! note "¿Cómo funciona un Trigger?"
    Un **Trigger** es un Collider que detecta entrada/salida de objetos  
    **sin empujar físicamente**. Perfecto para zonas de activación.

!!! example "Actividad"
    1. En **Hierarchy**, selecciona el objeto `Meta`.
    2. En **Inspector**, confirma que su `BoxCollider` tiene **Is Trigger** activado ✓
    3. Mira el Script adjunto:
        - ¿Qué objeto es el **activador**? (debería ser `Jugador`)
        - ¿Qué objeto se **muestra**? (debería ser el Canvas de victoria)

📸 **Foto aquí (Meta + IsTrigger + Script):**  
![Meta](img/REEMPLAZAR.png)

---

## 3.4 UI de victoria

!!! example "Actividad"
    1. En **Hierarchy**, encuentra el objeto `UI` (Canvas).
    2. Confirma que **empieza desactivado** (checkbox apagado arriba a la izquierda en Inspector).
    3. Presiona **Play**, llega a la Meta: el Canvas debe activarse.

📸 **Foto aquí (UI desactivada en Inspector):**  
![UI](img/REEMPLAZAR.png)

!!! tip "Mini reto"
    Cambia el **texto del mensaje de victoria** en el componente `Text`/`TextMeshPro`.

---

## ✅ Checklist del Laberinto

- [ ] Encontré el Jugador y vi sus componentes (CharacterController, Script)
- [ ] Encontré la Meta y confirmé que tiene **Is Trigger** activado
- [ ] Entiendo qué hace el script de la Meta
- [ ] Llegué a la Meta en Play y vi el mensaje de victoria
