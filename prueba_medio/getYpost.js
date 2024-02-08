/*

HTTP: Diferencias entre GET y POST

Cuando vamos a acceder a un sistema web, es bastante común pasar por una pantalla de inicio de sesión, en la que ponemos nuestras credenciales para acceder al sistema.

Estas informaciones deben ser confidenciales, sin embargo, cuando intenté iniciar sesión en una aplicación web que estaba desarrollando, obtuve el siguiente resultado:


Vea que nuestros parámetros (correo electrónico y contraseña) fueron pasados por la URI, que no es muy seguro, ¿verdad? Por lo general, cuando iniciamos sesión en algunos sitios, no sucede, al menos en la mayoría de ellos.

Estas informaciones en la URL están expuestas, no solo si alguien está cerca y ve lo que escribió. Pero también cuando estas informaciones viajan por Internet. Qué es una vulnerabilidad de seguridad.

Lo que define el lugar donde se pasan los parámetros es el Protocolo de comunicación de la web, HTTP.

Conociendo al HTTP
El HTTP es el protocolo responsable de la comunicación de sitios en la web. Cuando accedemos a un sitio web, utilizamos este protocolo. Este protocolo tiene algunos métodos o, como también se les llama, verbos.

Los verbos HTTP definen qué acción se debe realizar y, según el verbo, el servidor puede dar una respuesta diferente.

Conociendo los verbos
Uno de los verbos más comunes de HTTP es el GET. Cuando usamos el GET, los parámetros se pasan en el encabezado de la solicitud. Por lo tanto, se pueden ver por la URI, como en el caso de nuestro formulario de inicio de sesión.

Este verbo es el estándar para enviar datos cuando enviamos un formulario HTTP. Entonces, en el ejemplo anterior, se usó GET. Sin embargo, podemos cambiar este comportamiento al decirle al formulario cuál del método (method) usará.

En el caso de formularios web, es muy común que este método sea el POST:

<form action="/logar" method="post">
El POST, a diferencia del GET, envía los parámetros en el cuerpo de la solicitud HTTP. Escondiéndolos de la URI:


Eso significa que si usamos el POST ¿protegemos los datos enviados por el formulario, ya que no aparecen en la URI?

No exactamente. Lo único que POST hace es enviar los parámetros en el cuerpo de la solicitud. Si inspeccionamos la requisición, tenemos acceso a ellos.

Si realmente queremos proteger nuestra aplicación, debemos utilizar la "versión segura" de HTTP, HTTPS. Con ella, podemos cifrar los datos enviados.

Ambos verbos se usan ampliamente en formularios en la web y tienen otras diferencias más entre sí.

Como el GET envía los datos en el encabezado de la solicitud, tiende a ser, no una regla, un poco más performático que el POST.

Sin embargo, al enviar los datos en el encabezado de la solicitud, el GET tiene un tamaño máximo de datos que se puede enviar, que en general es 255 caracteres. Con POST, podemos enviar informaciones un poco más grandes, como imágenes. Es decir, si intentamos pasar una gran cantidad de información a través de GET, algunas partes se pueden perder en el camino.

Con esto, puedes estar pensando que usar el POST es la mejor manera, ya que encapsula los datos en el cuerpo de la solicitud y consigue transportar más datos que el GET, por lo tanto, usaremos el POST en todo lugar.

Sin embargo, si hay dos verbos diferentes, es porque están destinados a usarse en diferentes lugares. Solicitudes de tipo GET se recomiendan para obtener datos de un recurso determinado. Como en un formulario de búsqueda o en un listado de todos los productos registrados.

Las requisiciones POST se utilizan principalmente para enviar información a procesar, como al crear algún recurso, como un producto o un cliente.

Conociendo otros verbos
Además del GET y del POST, hay otros verbos HTTP que se pueden utilizar. Por ejemplo, si queremos eliminar algún recurso, podemos usar el verbo DELETE.

Si queremos actualizar los datos, podemos utilizar el PUT, que reemplaza todas las informaciones de un recurso en particular, por ejemplo, un producto. O usar el verbo PATCH que actualiza parcialmente los datos de un producto.

Todos estos verbos se utilizan ampliamente en el mundo web. Especialmente cuando usamos el modelo REST.

*/
