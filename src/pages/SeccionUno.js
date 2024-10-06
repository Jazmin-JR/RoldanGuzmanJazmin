import React from 'react';
import '../css/SeccionUno.css';

function SeccionUno() {
  return (
    <div className="container-page mt-5">
      <h1>Ciberseguridad: Amenazas Clave y Ataques Cibernéticos Históricos</h1>
      <p>La ciberseguridad es uno de los pilares más importantes para la protección de datos y la integridad de las redes. Con el incremento de la 
         digitalización y el uso de sistemas interconectados, han surgido amenazas y 
         ataques cibernéticos devastadores a nivel global. Este artículo aborda varios conceptos y eventos clave relacionados con la ciberseguridad.</p>
      
      <h2>1. DDoS (Ataques de Denegación de Servicio Distribuido)</h2>
      <p>Los ataques DDoS consisten en sobrecargar un sistema o servidor con múltiples solicitudes simultáneas desde diversas ubicaciones, con el objetivo de interrumpir el 
         funcionamiento del servicio o red. Los atacantes utilizan un gran número de dispositivos infectados (zombies) para generar tráfico masivo, 
         dificultando el acceso legítimo a los usuarios. Entre los ataques más grandes están aquellos contra gigantes como 
         Amazon o GitHub, que han sufrido caídas temporales por estas ofensivas.</p>
      
      <h2>2. Ordenador Zombie</h2>
      <p>Un ordenador zombie es un dispositivo infectado con malware que permite a un atacante 
         controlarlo de manera remota sin que el usuario sea consciente de ello. Estos ordenadores 
         forman parte de una botnet y son usados en ataques masivos como el DDoS, para distribuir 
         spam o malware, y para robo de datos sin el conocimiento del propietario del equipo.</p>
      
      <h2>3. Ciberdelincuente</h2>
      <p>Un ciberdelincuente es una persona o grupo que utiliza la tecnología informática para 
         llevar a cabo actividades delictivas. Estos pueden robar información, extorsionar a 
         empresas o individuos, realizar fraudes financieros o sabotear sistemas. A medida que 
         avanza la tecnología, los ciberdelincuentes emplean tácticas más sofisticadas para explotar vulnerabilidades.</p>
      
      <h2>4. Botmaster</h2>
      <p>El botmaster es el controlador de una botnet, una red de dispositivos comprometidos (ordenadores zombies). 
         El botmaster puede enviar comandos a los dispositivos infectados para realizar actividades ilícitas, como 
         ataques DDoS, envío de correos maliciosos, robo de datos o minería de criptomonedas.</p>
      
      <h2>5. Botnet</h2>
      <p>Una botnet es una red de ordenadores zombies controlada por un botmaster. Una de las botnets más famosas fue 
         la botnet Mirai, responsable de uno de los mayores ataques DDoS de la historia. Las botnets también se utilizan 
         para robar credenciales bancarias o realizar fraudes en línea.</p>
      
      <h2>6. Ransomware</h2>
      <p>El ransomware es un tipo de malware que encripta los archivos de una víctima y exige un rescate a cambio de la 
         clave de desencriptación. Ejemplos famosos incluyen WannaCry y Petya, los cuales afectaron a miles de empresas 
         y gobiernos en todo el mundo, bloqueando archivos vitales y paralizando operaciones hasta que las víctimas pagaban 
         el rescate en criptomonedas.</p>
      
      <h2>7. Disclaimer</h2>
      <p>Un disclaimer es una declaración legal que limita la responsabilidad de una empresa o individuo. En el contexto de 
         la ciberseguridad, los disclaimers se utilizan en sitios web, contratos de software o documentos de privacidad para 
         advertir a los usuarios sobre posibles riesgos y protegerse de responsabilidades legales.</p>
      
      <h2>8. The Morris Worm</h2>
      <p>El Morris Worm fue uno de los primeros gusanos informáticos distribuidos en la historia de Internet. Creado en 1988 
         por Robert Tappan Morris, su propósito original era investigar la red, pero debido a un error en el código, el gusano 
         se replicó de manera descontrolada, causando daños a miles de ordenadores y ralentizando el acceso a Internet de la época. 
         Este evento demostró la importancia de la ciberseguridad.</p>
      
      <h2>9. Ciberwarfare (Guerra Cibernética)</h2>
      <p>La ciberwarfare o guerra cibernética es el uso de ataques cibernéticos por parte de naciones o grupos organizados para destruir, 
         espiar o sabotear las infraestructuras críticas de un país enemigo. Ejemplos de estos ataques incluyen los realizados contra 
         infraestructuras de energía, sistemas de defensa y finanzas. Un caso notable fue el ataque de Stuxnet, diseñado para sabotear el 
         programa nuclear de Irán.</p>
      
      <h2>10. Stuxnet</h2>
      <p>El Stuxnet es un virus altamente sofisticado diseñado para sabotear las centrífugas nucleares iraníes. Descubierto en 2010, este 
         malware es considerado una de las primeras armas de la ciberwarfare y se cree que fue creado por Estados Unidos e Israel. El virus 
         manipuló sistemas industriales de control sin ser detectado, retrasando el programa nuclear de Irán.</p>
      
      <h2>11. Moonlight Maze</h2>
      <p>Moonlight Maze fue una operación de ciberespionaje a gran escala, detectada en 1996. Este ataque estaba dirigido contra redes militares 
         y gubernamentales de Estados Unidos, con el objetivo de robar información sensible. El ataque, atribuido a actores estatales, representó 
         una de las primeras campañas prolongadas de espionaje cibernético a nivel global.</p>
      
      <h2>12. Operation Aurora</h2>
      <p>Operation Aurora fue una serie de ataques cibernéticos coordinados contra grandes empresas tecnológicas, incluyendo Google y Adobe, en 2009. 
         Los ataques fueron atribuidos a grupos respaldados por el gobierno chino, y buscaban robar propiedad intelectual y espiar las comunicaciones 
         de activistas de derechos humanos.</p>
      
      <h2>13. Freeze it into Submission</h2>
      <p>Este término describe una técnica defensiva para mitigar ataques DDoS. Se refiere a sobrecargar deliberadamente al atacante mediante un sistema 
         que congela o ralentiza las solicitudes entrantes, agotando los recursos del atacante en lugar de los del servidor atacado.</p>
      
      <h2>14. WannaCry</h2>
      <p>El ataque de WannaCry en mayo de 2017 fue un ataque de ransomware global que afectó a más de 230,000 sistemas en 150 países. Aprovechando una 
         vulnerabilidad en Windows, el ransomware encriptó los archivos de las víctimas y pidió un rescate en bitcoins. Este ataque fue particularmente 
         dañino para hospitales en el Reino Unido, que tuvieron que suspender servicios.</p>
      
      <h2>15. Petya</h2>
      <p>Petya es otro tipo de ransomware que se hizo famoso en 2016 y 2017. A diferencia de otros ransomwares, Petya no solo encripta archivos, sino que 
         también modifica el registro de arranque maestro, bloqueando completamente el acceso a los sistemas. En 2017, una variante llamada NotPetya afectó 
         principalmente a empresas en Ucrania y causó daños millonarios.</p>
      
      <h2>16. Equifax (Ataque)</h2>
      <p>El ataque a Equifax en 2017 comprometió los datos personales de 147 millones de personas, incluidas sus fechas de nacimiento, números de seguridad 
         social, direcciones y más. Los ciberdelincuentes explotaron una vulnerabilidad en una aplicación web para acceder a los datos. Este ataque es uno 
         de los más grandes en términos de impacto sobre la privacidad de los consumidores.</p>
      
      <h2>17. Cam4 (Ataque)</h2>
      <p>En 2020, el sitio web Cam4, una plataforma de entretenimiento para adultos, sufrió una filtración masiva de datos. Se expusieron más de 10.88 mil 
         millones de registros, incluyendo direcciones IP, información financiera y detalles de los usuarios. Aunque no se trató de un ataque de ransomware, 
         la exposición de este volumen de datos fue una de las más grandes en su tipo.</p>

      <h2>Conclusión</h2>
      <p>Estos conceptos y ataques resaltan la importancia de la ciberseguridad en la era digital. Con amenazas en constante evolución, es fundamental que 
         tanto las organizaciones como los individuos tomen medidas proactivas para proteger sus datos y sistemas.
      </p>

      <footer>
        <p>&copy; 2024 Seguridad de la Información </p>
        <p>&copy; 2024 Roldán Guzmán Jazmín </p>
      </footer>
    </div>
  );
}

export default SeccionUno;
