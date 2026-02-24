using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;

public class MovimientoJugador : MonoBehaviour
{
    CharacterController controlador;
    Animator animador;

    public float velocidad = 5f;
    public float alturaSalto = 0.5f;
    public float gravedad = -9.8f;
    public float velocidadRotacion = 10f;

    float velocidadVertical;

    void Start()
    {
        controlador = GetComponent<CharacterController>();
        animador = GetComponent<Animator>();
    }

    void Update()
    {
        // Ehntradas dirección según la flecha que se oprima
        float entradaHorizontal = Input.GetAxis("Horizontal");
        float entradaVertical = Input.GetAxis("Vertical");

        Vector3 direccion = new Vector3(entradaHorizontal, 0, entradaVertical);

        // Si se está moviendo
        if (direccion.magnitude > 0.1f)
        {
            // Rotar personaje hacia la dirección de movimiento
            Quaternion rotacionObjetivo = Quaternion.LookRotation(direccion);
            transform.rotation = Quaternion.Lerp(
                transform.rotation,
                rotacionObjetivo,
                velocidadRotacion * Time.deltaTime
            );

            // Animación correr
            animador.SetBool("run", true);
        }
        else
        {
            animador.SetBool("run", false);
        }

        // Si está en el suelo
        if (controlador.isGrounded)
        {
            if (velocidadVertical < 0)
                velocidadVertical = -2f;

            // Saltar
            if (Input.GetKeyDown(KeyCode.Space))
            {
                //Formula de rapidez para el salto V = raiz cuadrada de -2*gravedad*altura del salto
                velocidadVertical = Mathf.Sqrt(alturaSalto * -2f * gravedad);
                animador.SetTrigger("jump");
            }
        }

        // Aplicar gravedad
        velocidadVertical += gravedad * Time.deltaTime;

        // Movimiento final
        Vector3 movimiento = direccion * velocidad;
        movimiento.y = velocidadVertical;

        controlador.Move(movimiento * Time.deltaTime);
    }
}