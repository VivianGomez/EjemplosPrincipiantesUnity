# 1. Tour rápido por Unity (5–10 min)

!!! info "Objetivo de esta sección"
    Conocer las ventanas principales de Unity para poder orientarte durante el taller.

---

## Las ventanas importantes

| Ventana | ¿Para qué sirve? |
|---------|-----------------|
| **Hierarchy** | Lista de objetos en la escena actual |
| **Scene** | Vista 3D donde editas la escena |
| **Game** | Vista de lo que "juega" la cámara |
| **Inspector** | Donde cambias componentes y valores de un objeto |
| **Project** | Archivos del proyecto (scripts, prefabs, escenas) |
| **Console** | Mensajes, advertencias y errores |

📸 **Foto aquí (Unity con etiquetas de ventanas):**  
![Unity UI](img/REEMPLAZAR.png)

---

## Concepto clave: GameObject y Component

!!! note "Idea central"
    Un **GameObject** es como un "contenedor vacío".  
    Los **Componentes** son lo que le dan poderes:

    - `Transform` → posición, rotación y escala
    - `Collider` → define colisiones
    - `Rigidbody` → aplica física (gravedad, fuerzas)
    - `Script` → comportamiento personalizado (C#)

    Cada objeto en Unity es un GameObject + sus Components.

---

## Play Mode

!!! warning "¡Importante! Cambios en Play se pierden"
    - Cuando presionas **▶ Play**, puedes probar el juego.
    - Cuando presionas **■ Stop**, Unity vuelve al estado **anterior al Play**.
    - Si cambias valores en Play, **casi siempre se pierden** al detener.

    Guarda tus cambios importantes **antes** de entrar en Play.

!!! example "Mini reto – experimenta"
    1. Presiona **Play**.
    2. En el **Inspector**, cambia un valor (por ejemplo el color de un objeto).
    3. Presiona **Stop** y observa: ¿sigue el cambio?

---

## ✅ Checklist

- [ ] Identifico las 6 ventanas principales en Unity
- [ ] Entiendo la diferencia entre GameObject y Component
- [ ] Sé que los cambios en Play se pierden al detener
