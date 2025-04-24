import Link from "next/link";

export const metadata = {
  title: "Mencions legals | Cal Gallisa",
  description: "Informació legal i política de privacitat de Cal Gallisà. Protecció de dades, cookies, drets i més.",
};

export default function LegalMentions() {
  return (
    <div className="container py-16 md:py-24 max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Mencions legals</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Información básica sobre protección de datos</h2>
        <table className="w-full text-sm mb-6 border border-muted rounded-lg overflow-hidden">
          <tbody>
            <tr className="border-b"><td className="font-semibold p-2 w-1/3">Responsable</td><td className="p-2">CAL GALLISÀ</td></tr>
            <tr className="border-b"><td className="font-semibold p-2">Finalidad</td><td className="p-2">Prestarle el servicio solicitado</td></tr>
            <tr className="border-b"><td className="font-semibold p-2">Ligimitación</td><td className="p-2">Consentimiento del interesado</td></tr>
            <tr className="border-b"><td className="font-semibold p-2">Destinatarios</td><td className="p-2">No se cederán datos a terceros, salvo obligación legal.</td></tr>
            <tr className="border-b"><td className="font-semibold p-2">Derechos</td><td className="p-2">Puede ejercer todos sus derechos enviando un email a <a href="mailto:gallisareus@gmail.com" className="underline hover:text-primary">GALLISAREUS@GMAIL.COM</a></td></tr>
            <tr><td className="font-semibold p-2">Más información</td><td className="p-2">En nuestra Política de Privacidad, en esta misma página.</td></tr>
          </tbody>
        </table>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Aviso Legal – Política de privacidad</h2>
        <ol className="list-decimal list-inside space-y-4 text-justify">
          <li>
            <strong>Datos Identificativos</strong><br />
            SERGI LLAMBRICH OSSÓ en adelante CAL GALLISÀ, titular del dominio web www.calgallisa.com con domicilio a estos efectos en Plaça del Mercadal 12, 43201, Reus, Tarragona número de C.I.F.: 39893692P y correo electrónico de contacto: gallisareus@gmail.com
          </li>
          <li>
            <strong>Protección de Datos</strong><br />
            CAL GALLISÀ, en cumplimiento de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, y el RGPD, vela por garantizar un correcto uso y tratamiento de los datos personales de quien navegue en esta web.
            <br />
            Para ello, junto a cada formulario de recabo de datos de carácter personal, en los servicios que cada usuario/a pueda solicitar a CAL GALLISÀ, hará saber a dicha persona de la existencia y aceptación de las condiciones particulares del tratamiento de sus datos en cada caso, informándole de la responsabilidad del fichero creado, la dirección del responsable, la posibilidad de ejercer sus derechos, la finalidad del tratamiento y las comunicaciones de datos a terceros en su caso.
          </li>
          <li>
            <strong>Cookies</strong><br />
            Asimismo, CAL GALLISÀ informa que da cumplimiento a la Ley 34/2002 de 11 de julio, de Servicios de la Sociedad de la Información y el Comercio Electrónico y le solicitará su consentimiento expreso al tratamiento de su correo electrónico con fines comerciales en cada momento, uso de Cookies y del fichero de actividad.
            <br />
            El prestador por su propia cuenta o la de un tercero contratado para la prestación de servicios de medición, pueden utilizar cookies cuando un usuario navega por el sitio web. Las cookies son ficheros enviados al navegador por medio de un servidor web con la finalidad de registrar las actividades del usuario durante su tiempo de navegación.
            <br />
            Las cookies utilizadas por el sitio web se asocian únicamente con un usuario anónimo y su ordenador, y no proporcionan por sí mismas los datos personales del usuario.
            <br />
            Mediante el uso de las cookies resulta posible que el servidor donde se encuentra la web, reconozca el navegador web utilizado por el usuario con la finalidad de que la navegación sea más sencilla, permitiendo, por ejemplo, el acceso a los usuarios que se hayan registrado previamente, acceder a las áreas, servicios, promociones o concursos reservados exclusivamente a ellos sin tener que registrarse en cada visita.
            <br />
            Se utilizan también para medir la audiencia y parámetros del tráfico, controlar el progreso y número de entradas. El usuario tiene la posibilidad de configurar su navegador para ser avisado de la recepción de cookies y para impedir su instalación en su equipo. Por favor, consulte las instrucciones y manuales de su navegador para ampliar esta información.
            <br />
            Para utilizar el sitio web, no resulta necesario que el usuario permita la instalación de las cookies enviadas por el sitio web, o el tercero que actúe en su nombre, sin perjuicio de que sea necesario que el usuario inicie una sesión como tal en cada uno de los servicios cuya prestación requiera el previo registro o 'login'.
            <br />
            Las cookies utilizadas en este sitio web tienen, en todo caso, carácter temporal con la única finalidad de hacer más eficaz su transmisión ulterior. En ningún caso se utilizarán las cookies para recoger información de carácter personal.
          </li>
          <li>
            <strong>Direcciones IP</strong><br />
            Los servidores del sitio web podrán detectar de manera automática la dirección IP y el nombre de dominio utilizados por la persona usuaria. Una dirección IP es un número asignado automáticamente a un ordenador cuando ésta se conecta a Internet. Toda esta información es registrada en un fichero de actividad del servidor debidamente inscrito que permite el posterior procesamiento de los datos con el fin de obtener mediciones únicamente estadísticas que permitan conocer el número de impresiones de páginas, el número de visitas realizadas a los servicios web, el orden de visitas, el punto de acceso, etc.
          </li>
          <li>
            <strong>Seguridad</strong><br />
            El sitio web utiliza técnicas de seguridad de la información generalmente aceptadas en la industria, tales como firewalls, procedimientos de control de acceso y mecanismos criptográficos, todo ello con el objeto de evitar un acceso no autorizado a los datos.
            <br />
            Para lograr estos fines, la persona usuaria / cliente acepta expresamente que el prestador obtenga datos para efectos de la correspondiente autenticación de los controles de acceso. Todo proceso de contratación o que conlleve la introducción de datos personales de categoría especial como datos de salud, ideología, etc. serán siempre transmitidos mediante protocolo de comunicación segura (Https://,...), de tal forma que ninguna tercera persona tenga acceso a la información transmitida vía electrónica.
          </li>
          <li>
            <strong>Menores de edad</strong><br />
            Una persona MENOR de 14 años no deberá ceder sus datos personales a CAL GALLISÀ, sin el previo consentimiento de su padre, madre o tutor/a legal.
            <br />
            Con la publicación del RGPD, se prevé la determinación de la edad para consentir la cesión de datos personales entre los 16 y 13 años, en España desde la entrada en vigor de la LOPD-GDD se fija en 14 años.
            <br />
            En caso de que CAL GALLISÀ detecte usuarios/as en la web que pudieran ser menores de 14 años de edad, se reserva el derecho a solicitarle una copia de su DNI, o, en su caso, la autorización de su padre, madre o tutor/a legal, causando su baja en caso de no acreditar el cumplimiento de este requisito o falta de respuesta.
          </li>
          <li>
            <strong>Ejercicio de derechos</strong><br />
            En todo momento el usuario/a web podrá modificar sus preferencias de envíos comerciales, así como ejercer sus derechos previstos en la normativa, mediante una comunicación escrita dirigida a CAL GALLISÀ, a la dirección postal de Plaça del Mercadal 12, 43201, Reus, Tarragona, o vía email dirigido a gallisareus@gmail.com
            <br />
            En ambos casos, el usuario/a web deberá acompañar una copia de su DNI, pasaporte o similar.
            <br />
            <span className="block mt-2">
              <strong>ACCESO:</strong> Obtener confirmación de si se están tratando sus datos.<br />
              <strong>SUPRESIÓN:</strong> Obtener la supresión de sus datos.<br />
              <strong>RECTIFICACIÓN:</strong> Modificar los datos inexactos, erróneos o incompletos.<br />
              <strong>PORTABILIDAD:</strong> Recibir de CAL GALLISÀ los datos personales que le incumban y a transmitirlos a otro responsable del tratamiento.<br />
              <strong>OPOSICIÓN:</strong> Oponerse a que datos personales que le conciernan sean objeto de un tratamiento basado en el cumplimiento de finalidades de interés público, o de interés legítimo para el responsable de tratamiento.<br />
              <strong>LIMITACIÓN DEL TRATAMIENTO:</strong> Obtener del responsable del tratamiento la limitación del tratamiento de los datos.
            </span>
            <br />
            También, puede usar los modelos y formularios que para el ejercicio de estos derechos pone a su disposición el portal de la AEPD. Y, si no desea recibir comunicaciones por correo electrónico puede ejercer su derecho de cancelación y oposición solicitando su baja igualmente por correo ordinario o electrónico, además de a través del enlace que tendrá en cada correo electrónico que reciba de CAL GALLISÀ.
          </li>
          <li>
            <strong>Actividad de tratamiento y finalidad</strong><br />
            CAL GALLISÀ informa a los usuarios/as de la web de que sus datos personales no serán cedidos a terceras personas u organizaciones excepto cuando la cesión de datos este amparada en una obligación legal o cuando la prestación del servicio implique la necesidad de una relación contractual con proveedores de servicios encargados del tratamiento. En este último caso, solo se llevará a cabo la cesión de datos al tercero cuando CAL GALLISÀ disponga del consentimiento expreso del usuario y mantenga una relación contractual con el encargado del tratamiento que garantice su confidencialidad y cumplimiento.
            <br />
            CAL GALLISÀ prohíbe expresamente al usuario de la web compartir, facilitar o ceder datos de terceros, que pudiera obtener del contacto, interacción o realización de navegación o consulta a través de esta web, excepto si pudiera acreditar la expresa autorización del usuario/a cuyos datos pretende ceder.
            <br />
            Recordamos a cada persona que use esta web que DATOS PERSONALES también engloba a archivos de imagen de personas. La imagen personal es un dato protegido por la normativa (Artículo 5.1 del Reglamento de desarrollo de la LOPD). Por tanto, nadie podrá utilizarla sin el consentimiento expreso de la persona que aparece en ella.
          </li>
          <li>
            <strong>Legislación aplicable</strong><br />
            La política de privacidad de CAL GALLISÀ se rige por las siguientes normas:
            <ul className="list-disc list-inside mt-2 ml-4">
              <li>El Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos</li>
              <li>La Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE).</li>
              <li>La Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales.</li>
            </ul>
          </li>
        </ol>
      </section>
      <div className="mt-8">
        <Link href="/" className="text-primary underline hover:text-primary/80">Tornar a l'inici</Link>
      </div>
    </div>
  );
}
