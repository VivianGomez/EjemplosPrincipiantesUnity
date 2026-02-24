using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DeteccionEvento : MonoBehaviour
{
    [Header("Objeto que puede activar el evento (ej: Player)")]
    public GameObject objetoActivador;

    [Header("Objeto que se mostrará al detectar (ej: Canvas)")]
    public GameObject objetoAMostrar;

    void Start()
    {
        if (objetoAMostrar != null)
            objetoAMostrar.SetActive(false);
    }

    void OnTriggerEnter(Collider otro)
    {
        if (otro.name.Equals(objetoActivador.name))
        {
            //Acá decidimos activar algo al detectar el evento, pero ustedes pueden cambiarlo por
            // algo diferente... como por ejemplo: subir un puntaje (cuando se "recogen" premios)
            objetoAMostrar.SetActive(true);
        }
    }
}
