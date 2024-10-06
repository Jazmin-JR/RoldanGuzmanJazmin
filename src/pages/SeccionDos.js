import React from 'react';
import '../css/SeccionDos.css';


const SeccionDos = () => {
  return (
    <div className="container-page mt-5">
      <h1>Confidencialidad y Protección de la Información</h1>
      <p>
        En el mundo digital actual, la protección de datos y la confidencialidad son esenciales para garantizar la 
        seguridad de la información. Las leyes y técnicas de criptografía juegan un papel crucial en mantener estos 
        datos seguros.
      </p>

      <h2>Leyes de Protección de Datos</h2>
      
      <h3>Ley General de Protección de Datos Personales de México</h3>
      <p>
      La <strong>Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados</strong> de México, 
      promulgada en 2017, establece los lineamientos para el tratamiento adecuado y seguro de los datos 
      personales que poseen entidades públicas, asegurando el respeto a la privacidad de los individuos. 
      Esta ley tiene como finalidad garantizar los derechos de acceso, rectificación, cancelación y oposición 
      (ARCO) sobre los datos personales, y es aplicable a cualquier institución gubernamental. Su implementación 
      obliga a las entidades a adoptar medidas de seguridad para evitar fugas de información, promoviendo la 
      transparencia y el uso legítimo de los datos.
      </p>

      <h3>Ley Federal de Protección de Datos Personales en Posesión de Particulares</h3>
      <p>
        Promulgada en 2010, esta ley protege los datos personales en manos de empresas privadas, garantizando que 
        las organizaciones respeten los derechos de los individuos sobre sus datos.
      </p>

      <h2>Leyes de Propiedad Intelectual</h2>
      
      <h3>Ley de Propiedad Industrial</h3>
      <p>
      La <strong>Ley de Propiedad Industrial</strong> de México regula la protección de las creaciones intelectuales como patentes, 
      marcas, diseños industriales y secretos industriales. Esta ley busca fomentar la innovación, otorgando derechos 
      exclusivos a los creadores y empresas sobre sus inventos o signos distintivos por un tiempo determinado. Al 
      registrar una patente o una marca, los titulares tienen derecho a explotar comercialmente su creación y, en caso 
      de violación, la ley prevé sanciones y mecanismos para proteger los derechos de propiedad industrial.
      </p>

      <h3>Ley Federal de Derechos de Autor</h3>
      <p>
      La <strong>Ley Federal de Derechos de Autor</strong> protege las obras literarias, artísticas, musicales, audiovisuales, científicas 
      y programas de cómputo. Establece los derechos morales y patrimoniales de los autores, reconociendo su propiedad sobre 
      las creaciones. Esta ley otorga a los autores el control sobre la reproducción, distribución y modificación de sus obras, 
      e incluye un apartado para regular el uso de licencias, derechos conexos y la protección ante plagios. México es signatario 
      de tratados internacionales como el Convenio de Berna, lo que extiende la protección de las obras a nivel global.
      </p>

      <h3>Ley Federal de Protección de Datos Personales en Posesión de Particulares</h3>
      <p>
      La < strong>Ley Federal de Protección de Datos Personales en Posesión de Particulares</strong> (LFPDPPP), promulgada en 2010, establece un 
      marco regulador para el tratamiento de datos personales por parte de empresas y organizaciones privadas. Su objetivo es 
      asegurar que las entidades respeten la privacidad de las personas y protejan sus datos, permitiendo a los usuarios ejercer 
      sus derechos ARCO. La ley impone obligaciones a las empresas para garantizar que los datos personales sean utilizados de 
      manera lícita, informada y consentida.
      </p>

      <h3>Código Penal Federal</h3>
      <p>
      El <strong>Código Penal Federal</strong> de México regula los delitos y sus sanciones en el país. Incluye disposiciones sobre delitos como el 
      robo, fraude, corrupción, homicidio, y también abarca temas relacionados con el cibercrimen, como el acceso indebido a sistemas 
      informáticos y la falsificación digital. En el contexto de la ciberseguridad y el manejo de datos, el código prevé sanciones por 
      el uso no autorizado de información privada, vulnerando sistemas de seguridad o cometiendo actos de espionaje.
      </p>

      <h3>Ley General de Transparencia y Acceso a la Información Pública</h3>
      <p>
      La <strong>Ley General de Transparencia y Acceso a la Información Pública</strong> establece el derecho de los ciudadanos a acceder a la información 
      generada o gestionada por las entidades públicas de México. Esta ley fomenta la rendición de cuentas y promueve la participación 
      ciudadana en los asuntos públicos, obligando a las autoridades a publicar datos relevantes de manera proactiva. También regula el acceso
      a la información sensible, protegiendo datos personales y evitando su mal uso.
      </p>

      <h2>Criptografía y Seguridad de la Información</h2>
      
      <h3>Criptografía Simétrica</h3>
      <p>
      La <strong>criptografía simétrica</strong> es un método de cifrado donde el mismo algoritmo y clave se utilizan para cifrar y descifrar la información. 
      Es eficiente para manejar grandes volúmenes de datos, pero requiere que las partes que intercambian información tengan acceso a la misma 
      clave, lo que representa un desafío de distribución segura. Los algoritmos más comunes incluyen <strong>AES (Advanced Encryption Standard) y DES (Data Encryption Standard).</strong>
      </p>

      <h3>Criptografía Asimétrica</h3>
      <p>
      La <strong>criptografía asimétrica</strong>, en contraste, utiliza un par de claves: una pública y otra privada. La clave pública cifra los datos, mientras 
      que la clave privada los descifra. Este método es más seguro en términos de distribución de claves, ya que la clave pública puede compartirse 
      libremente sin comprometer la seguridad. Los algoritmos más utilizados son <strong>RSA (Rivest-Shamir-Adleman) y ECC (Elliptic Curve Cryptography).</strong>
      </p>

      <h3>Cifrado por Bloques y por Flujo</h3>
      <p>
      El <strong>cifrado por bloques</strong> divide los datos en bloques de tamaño fijo (por ejemplo, 128 bits) y cada bloque se cifra de manera independiente, 
      lo que es común en algoritmos como <strong>AES</strong> y <strong>DES</strong>. Por otro lado, el <strong>cifrado por flujo</strong> cifra los datos bit a bit o byte a byte en una secuencia 
      continua, lo que lo hace ideal para transmisiones en tiempo real, como en el caso del algoritmo <strong>RC4</strong>. Ambos métodos tienen ventajas dependiendo 
      del contexto en el que se utilicen.      
      </p>
 
      <h3>Criptoanálisis</h3>
      <p>
      El <strong>criptoanálisis</strong> es el estudio y la práctica de desentrañar la seguridad de los sistemas criptográficos, con el fin de identificar vulnerabilidades 
      y debilidades en los algoritmos de cifrado. Los criptoanalistas intentan descubrir claves o manipular los sistemas sin acceso legítimo a ellas, 
      utilizando diversas técnicas como el ataque de fuerza bruta, el análisis de frecuencias o ataques más sofisticados como los de canal lateral.
      </p>

      <h3>Estrategias Combinadas</h3>
      <p>
      Tanto la criptografía simétrica como la asimétrica, junto con el cifrado por bloques y por flujo, son componentes esenciales en los sistemas de 
      seguridad actuales, y el criptoanálisis juega un papel clave en mejorar y evaluar la robustez de estos sistemas. Implementar múltiples capas de 
      seguridad mediante la combinación de estos métodos garantiza que la información esté protegida de ataques externos.
      </p>

      <h2>Cumplimiento Normativo</h2>
      <p>
        Las leyes como la Ley de Protección de Datos Personales en México y la Ley de Propiedad Industrial buscan proteger tanto la privacidad como los 
        derechos de autor en el entorno digital.
      </p>

      <h2>Conclusión</h2>
      <p>
        La protección de datos es esencial en la era digital. A través de leyes, criptografía y buenas prácticas de seguridad, podemos garantizar la 
        confidencialidad y la integridad de la información.
      </p>
      <footer>
        <p>&copy; 2024 Seguridad de la Información </p>
        <p>&copy; 2024 Roldán Guzmán Jazmín </p>
      </footer>
    </div>
  );
};

export default SeccionDos;
