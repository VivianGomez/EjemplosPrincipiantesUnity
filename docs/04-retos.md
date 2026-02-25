# 4. Mini retos (para subir nivel)

!!! warning "Antes de empezar"
    Hazlos en orden. Si algo se rompe, vuelve atrás o reimporta el `.unitypackage`.

---

## Reto 1 – Runner: más difícil

!!! example "Reto"
    - Aumenta un poco la rapidez de premios/obstáculos, **o**
    - Reduce el tiempo entre apariciones de premios.

**Script a modificar:** `Assets/Scripts/ScriptsEjemplo/EjemploRunner/MovimientoObjeto.cs`

```csharp
// Línea a cambiar (busca la variable rapidez):
public float rapidez = 8f;  // ← sube este valor, p. ej. 12f
```

**Script alternativo:** `Assets/Scripts/ScriptsEjemplo/EjemploRunner/GeneradorPremios.cs`

```csharp
// Cambia el intervalo (tercer argumento de InvokeRepeating):
InvokeRepeating("GenerarPremios", 0f, 3f);  // ← reduce a 1.5f para más frecuencia
```

!!! success "Meta"
    El juego se siente **más rápido pero todavía jugable**.

## ✅ Checklist reto 1

- [ ] Reto 1: el Runner se siente más difícil

---

## Reto 2 – Runner: más puntos

!!! example "Reto"
    - Cambia cuántos puntos da recoger un premio.
    - Intenta que el contador se vea más grande o cambie de color.

**Script a modificar:** `Assets/Scripts/ScriptsEjemplo/EjemploRunner/PlayerController.cs`

```csharp
// Variables de penalización y aumento de puntos:
float penalizacion = 5;   // ← puntos que se restan al tocar un obstáculo
float aumento = 4;        // ← puntos que se suman al recoger un premio

// Son usadas en OnTriggerEnter:
if (other.name.Contains("Obstaculo"))
{
    score -= penalizacion;   // ← modifica penalizacion arriba
    Destroy(other.gameObject);
}
else if (other.name.Contains("Premio"))
{
    score += aumento;        // ← modifica aumento arriba
    Destroy(other.gameObject);
}
```

📸 **Foto aquí (antes/después de la UI de puntos):**  
![UI antes después](img/REEMPLAZAR.png)

!!! success "Meta"
    Un premio da más puntos y el jugador quiere recogerlos todos.

## ✅ Checklist reto 2

- [ ] Reto 2: cambié cuántos puntos da un premio

---

## Reto 3 – Laberinto: nueva meta

!!! example "Reto"
    1. Selecciona el objeto `Meta` en **Hierarchy**.
    2. Duplícalo con **Ctrl+D**.
    3. Mueve la copia a otra posición en el laberinto.
    4. Asegúrate de que su Trigger sigue activado.

**Script relacionado:** `Assets/Scripts/ScriptsEjemplo/EjemploLaberinto/DeteccionEvento.cs`  
*(No necesitas cambiar el script; duplicar el objeto `Meta` ya tiene el script adjunto.)*

!!! success "Meta"
    El jugador puede ganar llegando a **cualquiera de las dos metas**.

## ✅ Checklist reto 3

- [ ] Reto 3: creé una segunda Meta en el Laberinto

---

## Reto 4 – Laberinto: feedback extra

!!! example "Reto"
    Agrega una reacción extra cuando el jugador llega a la Meta:

    - Un **sonido** (AudioSource + clip de audio), **o**
    - Un **efecto de partículas** (Particle System)

**Script relacionado:** `Assets/Scripts/ScriptsEjemplo/EjemploLaberinto/DeteccionEvento.cs`

Para agregar un sonido desde código, primero agrega un componente `AudioSource` al objeto `Meta` y luego en el script llama:

```csharp
// Ejemplo de cómo reproducir un sonido al ganar:
AudioSource audio = GetComponent<AudioSource>();
audio.Play();
```

📸 **Foto aquí (efecto al ganar):**  
![Efecto ganar](img/REEMPLAZAR.png)

!!! success "Meta"
    El juego da una retroalimentación clara al ganar.

## ✅ Checklist reto 4

- [ ] Reto 4: agregué sonido o partículas al ganar
