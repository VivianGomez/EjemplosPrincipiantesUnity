# 5. Problemas comunes (y cómo resolverlos)

## No se mueve el jugador
- ¿Estás en **Play**?
- ¿La ventana **Game** tiene el foco?
- ¿El script está activado?
- ¿El objeto `Jugador` está activo?

📸 **Foto aquí (Console sin errores rojos):**  
![Console](img/REEMPLAZAR.png)

---

## No cuenta puntos
- Revisa Colliders:
  - ¿El premio/obstáculo tiene Collider?
  - ¿Es `Is Trigger` cuando debe serlo?
- Revisa Tags (si tu script usa tags):
  - ¿Premio tiene tag correcto?
  - ¿Obstáculo tiene tag correcto?

---

## No aparece el mensaje en Laberinto
- La `Meta` debe tener `Is Trigger`
- El script debe tener asignado:
  - `ObjetoActivador = Jugador`
  - `ObjetoAMostrar = UI`
- La UI debe existir en la escena

---

## “Se rompió todo”
Solución rápida:
1. Borra lo que cambiaste (si sabes qué fue)
2. O vuelve a importar el `.unitypackage`
3. Reabre la escena