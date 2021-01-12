# dsdeliver-sds2

O projeto DsDelivery consiste em uma aplicação de gerenciamento de pedidos, 
sendo que o app web faz o registro dos pedidos e o app mobile faz o controle dos pedidos.

# Web
Link: https://deliverysds2.netlify.app/
<blockquote>
<p>Home</p>
</blockquote>
<img src="https://raw.githubusercontent.com/pcoliveira90/dsdeliver-sds2/main/img/screencapture-deliverysds2-netlify-app-2021-01-11-20_49_12.png" alt="Tela inicial" style="max-width:100%;">

<blockquote>
<p>Pedidos</p>
</blockquote>
<img src="https://raw.githubusercontent.com/pcoliveira90/dsdeliver-sds2/main/img/screencapture-deliverysds2-netlify-app-orders-2021-01-11-20_48_36.png" alt="Iniciar Pedido" style="max-width:100%;">

<p/>
<img src="https://raw.githubusercontent.com/pcoliveira90/dsdeliver-sds2/main/img/screencapture-deliverysds2-netlify-app-orders-2021-01-11-20_49_56.png" alt="Pedido em andamento" style="max-width:100%;">


# Mobile
 
 <img src="https://raw.githubusercontent.com/pcoliveira90/dsdeliver-sds2/main/img/dsdelivery_mobile.gif" alt="Pedido em andamento" style="max-width:100%;">
 
 
 # API
 
 Link: https://oliveira-sds2.herokuapp.com

<br/>
<br/>
<code>
GET /orders
<pre>
[
    {
        "id": 6,
        "address": "Avenida Paulista, 1500",
        "latitude": -23.56168,
        "longitude": -46.656139,
        "moment": "2021-01-01T14:00:00Z",
        "status": "PENDING",
        "total": 109.85,
        "products": [
            {
                "id": 1,
                "name": "Pizza Bacon",
                "price": 49.9,
                "description": "Pizza de bacon com mussarela, orégano, molho especial e tempero da casa.",
                "imageUri": "https://raw.githubusercontent.com/devsuperior/sds2/master/assets/pizza_bacon.jpg"
            },
            {
                "id": 5,
                "name": "Risoto Funghi",
                "price": 59.95,
                "description": "Risoto Funghi feito com ingredientes finos e o toque especial do chef.",
                "imageUri": "https://raw.githubusercontent.com/devsuperior/sds2/master/assets/risoto_funghi.jpg"
            }
        ]
    }
]
</pre>
</code>


<br/>
<br/>
<code>
PUT /orders/2/delivered
<pre>
{
    "id": 2,
    "address": "Avenida Paulista, 1500",
    "latitude": -22.946779,
    "longitude": -43.217753,
    "moment": "2021-01-01T15:00:00Z",
    "status": "DELIVERED",
    "total": 157.75,
    "products": [
        {
            "id": 2,
            "name": "Pizza Moda da Casa",
            "price": 59.9,
            "description": "Pizza à moda da casa, com molho especial e todos ingredientes básicos, e queijo à sua escolha.",
            "imageUri": "https://raw.githubusercontent.com/devsuperior/sds2/master/assets/pizza_moda.jpg"
        },
        {
            "id": 5,
            "name": "Risoto Funghi",
            "price": 59.95,
            "description": "Risoto Funghi feito com ingredientes finos e o toque especial do chef.",
            "imageUri": "https://raw.githubusercontent.com/devsuperior/sds2/master/assets/risoto_funghi.jpg"
        },
        {
            "id": 8,
            "name": "Macarrão Penne",
            "price": 37.9,
            "description": "Macarrão penne fresco ao dente com tempero especial.",
            "imageUri": "https://raw.githubusercontent.com/devsuperior/sds2/master/assets/macarrao_penne.jpg"
        }
    ]
}
</pre>
</code>

