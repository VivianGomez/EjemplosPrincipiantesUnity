# Glosario (corto)

!!! info "Referencia rápida"
    Aquí están los términos que más vas a escuchar durante el taller.

---

| Término | Significado |
|---------|-------------|
| **Scene (Escena)** | Un "nivel" o pantalla del juego. |
| **GameObject** | Objeto dentro de la escena. Todo en Unity es un GameObject. |
| **Component** | Pieza que se agrega a un GameObject para darle funciones. |
| **Transform** | Componente presente en **todos** los GameObjects. Guarda posición (`position`), rotación (`rotation`) y escala (`localScale`) en el espacio 3D. Puedes moverlo desde el Inspector o desde código con `transform.position = ...`. |
| **Rigidbody** | Componente de física. Activa gravedad, masa y permite aplicar fuerzas (`AddForce`) o asignar velocidad directa (`rb.velocity`). Sin él, los objetos no caen ni responden a fuerzas físicas. |
| **CharacterController** | Componente alternativo al Rigidbody para mover personajes. En lugar de física automática, tú controlas el movimiento con `Move(vector)`. Incluye detección de suelo (`isGrounded`). |
| **Collider** | Define la forma de colisión de un objeto (caja, esfera, cápsula, malla). Necesario para detectar choques físicos. |
| **Trigger** | Un Collider con la opción *Is Trigger* activada. Detecta entrada/salida de objetos sin empujar físicamente. Llama a `OnTriggerEnter`, `OnTriggerExit`. |
| **Prefab** | Un objeto guardado como "plantilla" para reutilizar varias veces. Se crea desde la Hierarchy hacia la carpeta Project. Se instancia con `Instantiate(prefab, position, rotation)`. |
| **Script** | Código (C#) que controla comportamientos del GameObject. Hereda de `MonoBehaviour`. |
| **MonoBehaviour** | Clase base de los scripts de Unity. Provee métodos de ciclo de vida: `Start()`, `Update()`, `FixedUpdate()`, `OnTriggerEnter()`, etc. |
| **Start()** | Método de MonoBehaviour que se ejecuta **una vez** cuando el objeto aparece en la escena. Usado para inicializar variables. |
| **Update()** | Método de MonoBehaviour que se ejecuta **cada fotograma**. Ideal para leer input y animaciones. |
| **FixedUpdate()** | Método de MonoBehaviour que se ejecuta a intervalos de tiempo fijos (por defecto 50 veces/segundo). Ideal para física (`rb.velocity`, `AddForce`). |
| **InvokeRepeating** | Llama a un método repetidamente con un intervalo fijo. Ej.: `InvokeRepeating("GenerarPremios", 0f, 3f)` lo llama cada 3 segundos. |
| **Instantiate** | Crea una copia de un Prefab (o cualquier objeto) en la escena en tiempo de ejecución. |
| **Destroy** | Elimina un GameObject de la escena. Se puede pasar un delay: `Destroy(obj, 2f)`. |
| **Vector3** | Estructura con tres valores (x, y, z) usada para representar posiciones, direcciones y velocidades en 3D. |
| **Quaternion** | Representación de rotaciones en Unity. En general se usa `Quaternion.identity` (sin rotación) o `Quaternion.LookRotation(dir)`. |
| **Time.deltaTime** | Tiempo en segundos transcurrido desde el último fotograma. Multiplicar por deltaTime hace que el movimiento sea independiente del framerate. |
| **Input.GetAxis** | Lee un eje de entrada (−1 a 1). `"Horizontal"` para A/D o flechas izq/der; `"Vertical"` para W/S o flechas arriba/abajo. |
| **Inspector** | Panel de Unity donde editas los componentes del objeto seleccionado. |
| **Hierarchy** | Lista de todos los objetos en la escena actual. |
| **Play Mode** | Estado de Unity al presionar ▶: el juego corre pero los cambios se pierden al detener. |
| **Tag** | Etiqueta de texto asignada a un GameObject para identificarlo en scripts. |
| **Canvas** | GameObject especial que contiene elementos de UI (texto, botones, imágenes). |
| **AudioSource** | Componente que reproduce sonidos. |
| **Animator** | Componente que controla animaciones del objeto. |
