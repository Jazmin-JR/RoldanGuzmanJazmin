import React from "react";
import '../css/SeccionTres.css';  // Aquí puedes mantener o unificar estilos si es necesario

const SeccionTres = () => {
  return (
    <div className="container-page mt-5">
      <h1 className="titulo-principal">Principios de Seguridad de la Información</h1>
      <p>
      La <strong>seguridad de la información</strong> es un conjunto de prácticas diseñadas para proteger la confidencialidad, integridad 
      y disponibilidad de la información, garantizando que los datos sean utilizados de manera segura y sólo por quienes 
      están autorizados. A continuación, se describen los principios clave que sustentan un enfoque robusto de seguridad de la información:
      </p>
      
      <h2>Accesibilidad</h2>
      <p>
      La <strong>accesibilidad</strong> en seguridad de la información se refiere a garantizar que los datos y los sistemas sean utilizables por los usuarios 
      legítimos cuando lo necesiten. Esto es crítico para asegurar la continuidad de las operaciones, especialmente en entornos donde el tiempo 
      es un factor clave. Las organizaciones implementan medidas como redes redundantes, sistemas de respaldo y recuperación ante desastres para 
      mantener la accesibilidad de la información incluso en circunstancias adversas, como fallos de sistemas o ataques cibernéticos.
      <br/>
      Ejemplos comunes incluyen servidores replicados y backups automáticos que aseguran que los datos estén disponibles en caso de pérdida o daño de información.
      </p>

      <h2>Confidencialidad</h2>
      <p>
      La <strong>confidencialidad</strong> es la propiedad que garantiza que la información solo sea accesible a las personas, procesos o sistemas autorizados. 
      Es uno de los principios más importantes para prevenir la fuga de información sensible o el acceso no autorizado a datos privados, como 
      información financiera, médica o personal. Las técnicas más utilizadas para preservar la confidencialidad incluyen el <strong>cifrado</strong> de datos, 
      <strong>autenticación multifactor</strong> y la implementación de <strong>controles de acceso estrictos</strong>.
      <br/>   
      Por ejemplo, los sistemas de banca en línea utilizan cifrado avanzado para proteger las transacciones y evitar que personas no autorizadas intercepten datos financieros.
      </p>

      <h2>Disponibilidad</h2>
      <p>
      La <strong>disponibilidad</strong> asegura que los sistemas, aplicaciones y datos estén accesibles para su uso continuo sin interrupciones. Mantener la disponibilidad implica adoptar medidas 
      preventivas contra ataques como <strong>Denegación de Servicio (DDoS),</strong> caídas de servidores o fallos de hardware. Las organizaciones implementan planes de contingencia, sistemas 
      redundantes y políticas de actualización para minimizar el tiempo de inactividad y garantizar el acceso a los datos de manera continua.
      <br/>
      Un ejemplo práctico sería la implementación de servidores en la nube, que proporcionan alta disponibilidad y capacidad de recuperación ante fallos.
      </p>

      <h2>Autenticación</h2>
      <p>
      La <strong>autenticación</strong> es el proceso mediante el cual se verifica la identidad de un usuario o entidad antes de permitirle el acceso a un sistema o información. 
      Este proceso puede realizarse mediante contraseñas, tokens, datos biométricos o autenticación multifactor (MFA). Un sistema de autenticación efectivo previene 
      el acceso no autorizado y asegura que sólo las personas o procesos verificados interactúen con información sensible.
      <br/>
      Por ejemplo, las plataformas de correo electrónico a menudo requieren autenticación de dos factores, donde se solicita tanto una contraseña como un código enviado al dispositivo del usuario.
      </p>

      <h2>Integridad</h2>
      <p>
      La <strong>integridad</strong> garantiza que la información se mantenga precisa y completa, y no pueda ser alterada sin autorización. Esto significa que los datos no deben ser modificados, 
      destruidos o corrompidos durante su almacenamiento o transmisión. Las técnicas como <strong>firmas digitales, sumas de verificación (hashes) y algoritmos de cifrado</strong> son clave para 
      garantizar la integridad de los datos.
      <br/>
      Por ejemplo, en las transacciones de comercio electrónico, las firmas digitales verifican que los datos de la transacción no hayan sido alterados entre el comprador y el vendedor.
      </p>

      <h2>Control de Acceso</h2>
      <p>
      El <strong>control de acceso</strong> regula quién puede acceder a ciertos recursos y en qué condiciones. Se implementan políticas para asignar permisos específicos según los roles de los 
      usuarios, asegurando que sólo los empleados o sistemas con los privilegios adecuados puedan interactuar con la información. Los modelos más comunes incluyen <strong>Control de Acceso 
      Basado en Roles (RBAC) y Listas de Control de Acceso (ACL).</strong>
      <br/>
      Por ejemplo, en una empresa, un administrador de sistemas tendrá acceso a todas las funciones críticas de TI, mientras que un empleado de recursos humanos solo podrá acceder a los datos relacionados con el personal.
      </p>

      <footer>
        <p>&copy; 2024 Seguridad de la Información </p>
        <p>&copy; 2024 Roldán Guzmán Jazmín </p>
      </footer>
    </div>
  );
};

export default SeccionTres;
