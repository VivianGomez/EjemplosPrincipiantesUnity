using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MovimientoObjeto : MonoBehaviour
{
    public Rigidbody rb;
    public float rapidez = 8f;

    void Start()
    {

    }

    void FixedUpdate()
    {
        Vector3 velocidad = new Vector3(0, 0, -rapidez);
        rb.velocity = velocidad;
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.name == "Destructor")
        {
            Destroy(gameObject);
        }
    }
}
