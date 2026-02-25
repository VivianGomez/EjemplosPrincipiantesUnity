# 5. Problemas comunes (y cómo resolverlos)

!!! tip "Consejo general"
    Antes de preguntar, revisa la **Console** de Unity.  
    Los errores **rojos** son los más importantes. Léelos: suelen decir dónde está el problema.

!!! tip "🙋‍♀️ Ayuda"
    🙋‍♀️ No olvides preguntarle a los mentores de Campfire si necesitas ayuda.

📸 **Foto aquí (Console con errores rojos marcados):**  
![Console](img/REEMPLAZAR.png)

---

## El jugador no se mueve

??? danger "Ver solución"
    Revisa en orden:

    1. ¿Estás en **Play** (botón ▶ presionado)?
    2. ¿La ventana **Game** tiene el foco? (haz clic en ella antes de usar el teclado)
    3. ¿El script del Jugador está **activado** en Inspector?
    4. ¿El objeto `Jugador` está **activo** en Hierarchy? (no tiene ojo apagado)

---

## No cuenta puntos

??? danger "Ver solución"
    Revisa los **Colliders**:

    - ¿El premio/obstáculo tiene `Collider`?
    - ¿El `Collider` tiene **Is Trigger** activado cuando debe tenerlo?

    Revisa los **Tags** (si tu script usa `CompareTag`):

    - ¿El objeto `Premio` tiene el tag correcto?
    - ¿El objeto `Obstaculo` tiene el tag correcto?

---

## No aparece el mensaje de victoria en el Laberinto

??? danger "Ver solución"
    1. La **Meta** debe tener `BoxCollider` con **Is Trigger** activado ✓
    2. En el script de la Meta, verifica que estén asignados:
        - `ObjetoActivador` → `Jugador`
        - `ObjetoAMostrar` → `UI` (Canvas de victoria)
    3. El Canvas `UI` debe existir en la Hierarchy de esa escena.

---

## "Se rompió todo" / errores raros en Console

??? danger "Solución rápida"
    1. Deshaz los últimos cambios (**Ctrl+Z** en Unity o en el script).
    2. Si no funciona, **vuelve a importar** el `.unitypackage`:
        - Assets → Import Package → Custom Package…
        - Selecciona el mismo `.unitypackage` del taller.
    3. Reabre la escena que tenías abierta.

---

## ✅ Checklist de troubleshooting

<ul class="cf-checklist">
  <li><label><input type="checkbox"> Revisé la Console antes de preguntar</label></li>
  <li><label><input type="checkbox"> Verifiqué que estoy en Play cuando pruebo el juego</label></li>
  <li><label><input type="checkbox"> Revisé los tags y colliders si hay problemas con puntos</label></li>
</ul>
