using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    public Rigidbody rb;
    public TextMeshProUGUI txtPuntos;
    float score;

    float penalizacion = 5;
    float aumento = 4;

    bool enSuelo; 

    void Start()
    {
        txtPuntos.text = "0";
    }

    private void Update()
    {
        AumentarScoreSupervivencia();

        Correr();
        Saltar();
    }

    public void AumentarScoreSupervivencia()
    {
        score += Time.deltaTime;
        txtPuntos.text = Mathf.RoundToInt(score).ToString();
    }

    private void Correr()
    {
        float movimientoHorizontal = Input.GetAxis("Horizontal") * 5;
        rb.velocity = new Vector3(movimientoHorizontal, rb.velocity.y, rb.velocity.z);

        GetComponent<Animator>().SetBool("run", true);
    }

    private void Saltar()
    {
        if (Input.GetButtonDown("Jump") && enSuelo) 
        {
            rb.AddForce(Vector3.up * 6, ForceMode.Impulse);
            GetComponent<Animator>().SetTrigger("jump");
        }
    }

    private void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.name.Equals("Piso"))
        {
            enSuelo = true;
        }
    }

    private void OnCollisionExit(Collision collision)
    {
        if (collision.gameObject.name.Equals("Piso"))
        {
            enSuelo = false;
        }
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.name.Contains("Obstaculo"))
        {
            score -= penalizacion;
            Destroy(other.gameObject);
        }
        else if (other.name.Contains("Premio"))
        {
            score += aumento;
            Destroy(other.gameObject);
        }
    }
}