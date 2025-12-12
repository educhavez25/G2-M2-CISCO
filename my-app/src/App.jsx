import React, { useState, useEffect } from 'react';
import { Terminal, Shield, FileText, Target, Lock, ChevronDown, ChevronUp, User, Users, Globe, Activity, CheckCircle, AlertTriangle, Server, Database, Wifi } from 'lucide-react';


const Section = ({ title, children, icon: Icon, isOpen, toggle }) => (
  <div className={`mb-8 border rounded-xl overflow-hidden backdrop-blur-md transition-all duration-500 ${isOpen ? 'bg-black/90 border-green-500 shadow-[0_0_30px_rgba(34,197,94,0.15)] ring-1 ring-green-500/50' : 'bg-black/60 border-green-900/30 hover:border-green-500/50'}`}>
    <button
      onClick={toggle}
      className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer hover:bg-green-500/5 transition-colors group"
    >
      <div className="flex items-center space-x-6">
        <div className={`p-4 rounded-xl transition-all duration-300 ${isOpen ? 'bg-green-500 text-black rotate-3' : 'bg-gray-800 text-green-500 group-hover:bg-gray-700'}`}>
          <Icon size={32} />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide font-mono uppercase group-hover:text-green-400 transition-colors">{title}</h2>
          {isOpen && <div className="h-1 w-20 bg-green-500 mt-2 rounded-full animate-pulse"></div>}
        </div>
      </div>
      {isOpen ? <ChevronUp className="text-green-400" size={32} /> : <ChevronDown className="text-gray-600 group-hover:text-green-500" size={32} />}
    </button>

    <div className={`transition-all duration-700 ease-in-out ${isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
      <div className="p-8 md:p-12 text-gray-300 font-sans leading-relaxed border-t border-green-900/50 bg-gradient-to-b from-black/50 to-green-900/5">
        {children}
      </div>
    </div>
  </div>
);

const InfoCard = ({ title, children, type = "default" }) => {
  const borderClass = type === "warning" ? "border-yellow-500/50" : "border-green-500/30";
  const bgClass = type === "warning" ? "bg-yellow-900/10" : "bg-gray-900/60";
  const textTitleClass = type === "warning" ? "text-yellow-400" : "text-green-300";

  return (
    <div className={`${bgClass} p-5 rounded-lg border-l-4 ${borderClass} mb-4 hover:bg-gray-800/80 transition-colors shadow-sm`}>
      <h3 className={`${textTitleClass} font-bold mb-2 font-mono text-lg flex items-center`}>
        {type === "warning" && <AlertTriangle size={18} className="mr-2" />}
        {title}
      </h3>
      <div className="text-sm md:text-base text-gray-300 space-y-2">{children}</div>
    </div>
  );
};

const TechBadge = ({ text }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-800 text-green-400 border border-green-900 hover:border-green-500 hover:text-green-300 transition-colors cursor-default select-none mr-2 mb-2">
    {text}
  </span>
);

const HackerText = ({ text }) => (
  <span className="font-mono text-green-500">
    <span className="mr-2 opacity-50">$</span>
    {text}
    <span className="animate-pulse ml-1">_</span>
  </span>
);

export default function Modulo2Presentation() {
  const [openSection, setOpenSection] = useState(0); // Abrir la primera sección por defecto para la presentación
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSection = (index) => setOpenSection(openSection === index ? null : index);

  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 selection:bg-green-500 selection:text-black font-sans overflow-x-hidden">

      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(20,60,20,0.3)_0%,_rgba(0,0,0,1)_80%)]"></div>
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%2300FF00\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

      {/* Navigation Bar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${scrolled ? 'bg-black/95 border-green-900 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.8)]' : 'bg-transparent border-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="p-2 bg-green-900/20 rounded-lg group-hover:bg-green-500/20 transition-colors">
              <img src="/logo.png" alt="Logo" className="w-8 h-8" />
            </div>
            <span className="text-xl font-bold font-mono tracking-tighter text-white">UN<span className="text-green-500">JFSC</span></span>
          </div>
          <div className="hidden lg:flex space-x-8 text-xs font-mono text-green-500/60">
            <span className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>INGENIERÍA DE SISTEMA</span>
            <span>CICLO: IX</span>
            <span>SEGURIDAD INFOMÁTICA</span>
          </div>
        </div>
      </nav>

      {/* Hero Section / Carátula */}
      <header className="relative z-10 pt-40 pb-24 px-6 container mx-auto text-center">
        <div className="inline-block px-6 py-2 mb-8 border border-green-500/30 rounded-full bg-green-900/10 text-green-400 font-mono text-sm tracking-widest uppercase shadow-[0_0_15px_rgba(34,197,94,0.2)]">
          Informe Técnico Confidencial
        </div>

        <h1 className="text-4xl md:text-7xl font-bold mb-8 text-white tracking-tight leading-tight">
          PLANIFICACIÓN Y ALCANCE<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-700 filter drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">
            PRUEBAS DE PENETRACIÓN
          </span>
        </h1>

        <p className="text-xl text-gray-400 mb-16 max-w-4xl mx-auto font-light leading-relaxed">
          Análisis estratégico y marco operativo para la evaluación de seguridad en infraestructuras críticas.
        </p>

        {/* Group Info Card - Refined */}
        <div className="max-w-5xl mx-auto bg-gray-900/40 border-t border-b border-green-500/20 p-8 md:p-12 backdrop-blur-sm relative group hover:bg-gray-900/60 transition-all duration-500">
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div>
              <h2 className="text-green-400 font-mono text-sm tracking-widest mb-6 flex items-center uppercase">
                <Users className="mr-3" size={16} /> Equipo de Análisis (Grupo 2)
              </h2>
              <ul className="space-y-4 font-mono text-sm md:text-base text-gray-300">
                {['CHAVEZ CRUZ CELIO EDU', 'CHIRITO GOMEZ LORENZO SEBASTIAN', 'ESPEJO BLAS LUIS JESUS FERNANDO', 'POVIS OCAÑA SAMUEL JOSIAS'].map((name, i) => (
                  <li key={i} className="flex items-center group/item pl-2 hover:pl-4 transition-all duration-300 border-l-2 border-transparent hover:border-green-500">
                    <span className="text-green-600 mr-4 opacity-50 group-hover/item:opacity-100">0{i + 1}</span>
                    {name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-green-400 font-mono text-sm tracking-widest mb-6 flex items-center uppercase">
                  <User className="mr-3" size={16} /> Supervisión Docente
                </h2>
                <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 flex items-center">
                  <Activity className="mr-4 text-green-500" size={24} />
                  <div>
                    <p className="text-white font-bold">BAZALAR GANOZA ELVI RENEE</p>
                    <p className="text-xs text-green-500/70 mt-1">Directora de Proyecto</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-right">
                <HackerText text="Cargando módulos de análisis..." />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="container mx-auto px-6 pb-32 relative z-10 max-w-6xl">

        {/* 2.0 Introducción */}
        <Section
          title="2.0 Introducción"
          icon={Terminal}
          isOpen={openSection === 0}
          toggle={() => toggleSection(0)}
        >
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1 space-y-6">
              <div className="mb-6">
                <h3 className="text-2xl text-white font-bold mb-4 border-l-4 border-green-500 pl-4">Fundamentos de la Planificación</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  La fase de planificación establece los cimientos para una evaluación de seguridad exitosa. Antes de iniciar cualquier actividad técnica, es crucial definir el alcance y el plan de compromiso.
                  El objetivo primordial es estructurar legal y técnicamente el proyecto para garantizar su éxito y evitar malentendidos.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <InfoCard title="Riesgos Iniciales">
                  Sin una planificación adecuada, nos enfrentamos a problemas legales graves, malentendidos con el cliente y fallos técnicos en la ejecución.
                </InfoCard>
                <InfoCard title="Objetivos del Módulo">
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Conocer leyes locales y conceptos legales.</li>
                    <li>Crear documentos preliminares (SOW).</li>
                    <li>Desarrollar una mentalidad ética.</li>
                  </ul>
                </InfoCard>
              </div>
            </div>

            <div className="lg:w-1/3 flex flex-col justify-center space-y-4">
              <div className="p-6 bg-gray-900 rounded-lg border border-green-900/50 relative overflow-hidden group hover:border-green-500/50 transition-colors">
                <div className="absolute top-0 right-0 p-2 opacity-20"><Globe size={64} /></div>
                <h4 className="font-mono text-green-400 text-sm mb-2">ESTADO ACTUAL</h4>
                <p className="text-3xl font-bold text-white mb-1">FASE 1</p>
                <p className="text-xs text-gray-400">PLANIFICACIÓN ESTRATÉGICA</p>
                <div className="w-full bg-gray-800 h-1 mt-4 rounded-full overflow-hidden">
                  <div className="w-1/4 h-full bg-green-500"></div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* 2.1 Comparación y Contraste: Gestión, Riesgo y Cumplimiento */}
        <Section
          title="2.1 Gestión, Riesgo y Cumplimiento"
          icon={FileText}
          isOpen={openSection === 1}
          toggle={() => toggleSection(1)}
        >
          <div className="space-y-10">
            {/* Normativas */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center border-b border-gray-800 pb-3">
                <CheckCircle className="mr-3 text-green-500" /> Marco Normativo Crítico
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                <InfoCard title="PCI DSS">
                  <p className="mb-2">Estándar de Seguridad de Datos para la Industria de Tarjetas de Pago.</p>
                  <TechBadge text="Tarjetas de Crédito" /><TechBadge text="Transacciones" />
                </InfoCard>
                <InfoCard title="HIPAA">
                  <p className="mb-2">Ley de Portabilidad y Responsabilidad del Seguro Médico.</p>
                  <TechBadge text="Salud" /><TechBadge text="Datos Pacientes (ePHI)" />
                </InfoCard>
                <InfoCard title="GDPR">
                  <p className="mb-2">Reglamento General de Protección de Datos (Unión Europea).</p>
                  <TechBadge text="Privacidad" /><TechBadge text="Datos Personales" />
                </InfoCard>
                <InfoCard title="FedRAMP">
                  <p className="mb-2">Programa Federal de Gestión de Riesgos y Autorizaciones.</p>
                  <TechBadge text="Gobierno EE.UU." /><TechBadge text="Nube" />
                </InfoCard>
                <InfoCard title="GLBA">
                  <p className="mb-2">Ley Gramm-Leach-Bliley. Protección de datos financieros.</p>
                  <TechBadge text="Banca" /><TechBadge text="Finanzas" />
                </InfoCard>
                <InfoCard title="Wassenaar Arrangement">
                  <p className="mb-2">Acuerdo sobre control de exportaciones de armas convencionales y bienes de doble uso.</p>
                  <TechBadge text="Cifrado" /><TechBadge text="Exportación" />
                </InfoCard>
              </div>
            </div>

            {/* Documentos Legales */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center border-b border-gray-800 pb-3">
                <Lock className="mr-3 text-green-500" /> Instrumentos Legales
              </h3>
              <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-green-400 font-mono font-bold text-lg mb-1">MSA (Acuerdo Maestro de Servicio)</h4>
                      <p className="text-sm text-gray-400">Contrato marco que agiliza futuras contrataciones sin renegociar términos generales.</p>
                    </div>
                    <div>
                      <h4 className="text-green-400 font-mono font-bold text-lg mb-1">SOW (Declaración de Trabajo)</h4>
                      <p className="text-sm text-gray-400">Documento vital que define el alcance específico, entregables y plazos del proyecto actual.</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-green-400 font-mono font-bold text-lg mb-1">NDA (Acuerdo de No Divulgación)</h4>
                      <p className="text-sm text-gray-400 mb-2">Protege la confidencialidad. Puede ser:</p>
                      <div className="flex gap-2">
                        <TechBadge text="Unilateral" />
                        <TechBadge text="Bilateral" />
                        <TechBadge text="Multilateral" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-green-400 font-mono font-bold text-lg mb-1">SLA (Acuerdo de Nivel de Servicio)</h4>
                      <p className="text-sm text-gray-400">Garantías técnicas de disponibilidad y tiempos de respuesta ante incidentes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* 2.2 Planificación y Alcance */}
        <Section
          title="2.2 Importancia del Alcance (Scope)"
          icon={Target}
          isOpen={openSection === 2}
          toggle={() => toggleSection(2)}
        >
          <div className="space-y-12">

            {/* ROE */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Reglas de Compromiso (ROE)</h3>
              <p className="mb-6 text-gray-400">El "contrato de batalla". Define los límites exactos de la operación.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Línea de Tiempo', 'Ubicación Física/Lógica', 'Ventanas de Tiempo', 'Contactos de Emergencia'].map((item, i) => (
                  <div key={i} className="bg-gray-800/50 p-4 rounded-lg text-center border border-gray-700 hover:border-green-500 transition-colors">
                    <span className="text-green-400 font-mono text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Scope Definition */}
            <div className="bg-gray-900/80 p-6 rounded-xl border border-green-900/30">
              <h3 className="text-xl font-bold text-green-400 mb-4 font-mono">Definición de Objetivos Técnicos</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-white font-bold mb-3 flex items-center"><Server className="mr-2 text-blue-400" size={18} /> Infraestructura</h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-400 marker:text-blue-500">
                    <li>Rangos de Direcciones IP</li>
                    <li>Dominios y Subdominios</li>
                    <li>Entornos: Producción vs Desarrollo</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-3 flex items-center"><Database className="mr-2 text-purple-400" size={18} /> Aplicaciones & APIs</h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-400 marker:text-purple-500">
                    <li><strong>SOAP:</strong> Basado en XML (WSDL)</li>
                    <li><strong>REST:</strong> Arquitectura estándar (Swagger/OpenAPI)</li>
                    <li><strong>GraphQL:</strong> Lenguaje de consulta de datos</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-800">
                <h4 className="text-white font-bold mb-3 flex items-center"><Wifi className="mr-2 text-orange-400" size={18} /> Redes Inalámbricas</h4>
                <p className="text-sm text-gray-400">Identificación clara de SSIDs permitidos. ¡Cuidado con probar la red del vecino!</p>
              </div>
            </div>

            {/* Scope Creep Warning */}
            <InfoCard title="¡ALERTA: Scope Creep (Aumento del Alcance)!" type="warning">
              El crecimiento descontrolado del alcance del proyecto. Ocurre por mala comunicación o falta de gestión de cambios.
              <strong> Solución:</strong> Solicitar un nuevo SOW si el cliente pide trabajo adicional no pactado.
            </InfoCard>

            {/* Tipos de Prueba */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black p-6 rounded-xl border border-gray-700 hover:border-white transition-all group">
                <h4 className="font-bold text-white text-xl mb-2 group-hover:text-gray-300">Caja Negra (Unknown)</h4>
                <p className="text-sm text-gray-400 mb-4">Simulación realista de un atacante externo. El pentester tiene información mínima o nula.</p>
                <TechBadge text="Reconocimiento Activo" />
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-green-900 hover:border-green-500 transition-all group">
                <h4 className="font-bold text-green-400 text-xl mb-2 group-hover:text-green-300">Caja Blanca (Known)</h4>
                <p className="text-sm text-gray-400 mb-4">Auditoría exhaustiva. Acceso total a documentación, código fuente, diagramas y credenciales.</p>
                <TechBadge text="Análisis de Código" /><TechBadge text="Eficiencia" />
              </div>
            </div>
          </div>
        </Section>

        {/* 2.3 Ética y Profesionalismo */}
        <Section
          title="2.3 Ética, Integridad y Riesgo"
          icon={User}
          isOpen={openSection === 3}
          toggle={() => toggleSection(3)}
        >
          <div className="flex flex-col items-center text-center mb-10">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 text-green-500">
              <Shield size={32} />
            </div>
            <blockquote className="text-xl md:text-2xl font-light text-white italic max-w-3xl">
              "El hacking ético es el uso de herramientas y técnicas de ataque con fines defensivos y legales. El permiso lo es todo."
            </blockquote>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-green-400 font-mono font-bold text-lg uppercase border-b border-green-500/30 pb-2">Pilares del Profesionalismo</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">➜</span>
                  <span className="text-gray-300 text-sm"><strong>Verificación de Antecedentes:</strong> Crucial para generar confianza con el cliente.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">➜</span>
                  <span className="text-gray-300 text-sm"><strong>Integridad:</strong> Reportar inmediatamente cualquier rastro de compromiso previo o actividad criminal real.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">➜</span>
                  <span className="text-gray-300 text-sm"><strong>Límites:</strong> Respetar la "Lista Permitida" y evitar la "Lista Denegada" a toda costa.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-green-400 font-mono font-bold text-lg uppercase border-b border-green-500/30 pb-2">Gestión de Riesgos</h3>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h4 className="text-white font-bold mb-1">Apetito vs Tolerancia al Riesgo</h4>
                <p className="text-xs text-gray-400">Entender cuánto riesgo está dispuesta a aceptar la organización para lograr sus objetivos.</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h4 className="text-white font-bold mb-1">Confidencialidad de Datos</h4>
                <p className="text-xs text-gray-400">Manejo seguro de hallazgos. Uso de PGP/GPG para comunicaciones y borrado seguro de datos post-proyecto.</p>
              </div>
            </div>
          </div>
        </Section>

        {/* 2.4 Resumen */}
        <Section 
          title="2.4 Conclusión" 
          icon={Activity} 
          isOpen={openSection === 4} 
          toggle={() => toggleSection(4)}
        >
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-green-900 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Activity size={100} className="text-green-500" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-6">Síntesis Final</h3>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                La <span className="text-green-400 font-bold">Fase de Planificación</span> no es un simple trámite administrativo; es el cimiento que diferencia un ataque criminal de una evaluación de seguridad profesional.
              </p>
              <p>
                Hemos cubierto cómo el cumplimiento de normativas globales (<strong className="text-white">GDPR, PCI DSS</strong>), la solidez contractual (<strong className="text-white">SOW, NDA</strong>) y una definición técnica precisa del alcance protegen tanto al consultor como a la organización.
              </p>
              <p>
                Como profesionales en <strong className="text-green-400">Ciberseguridad</strong>, nuestra misión es mitigar riesgos desde el primer día, garantizando que cada escaneo y cada exploit estén autorizados, justificados y controlados.
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-gray-800 flex justify-between items-end">
              <div>
                <p className="text-xs font-mono text-gray-500">MÓDULO 2 COMPLETADO</p>
                <p className="text-xs font-mono text-gray-500">GRUPO 2 - ANÁLISIS FINALIZADO</p>
              </div>
              <div className="text-green-500 animate-pulse">
                <Shield size={32} />
              </div>
            </div>
          </div>
        </Section>

      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-green-900/50 py-12 relative z-10 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-2 tracking-widest">UN<span className="text-green-500">JFSC</span></h2>
          <p className="text-gray-500 font-mono text-xs mb-8">
            SEGURIDAD INFORMÁTICA
          </p>
          <p className="text-gray-600 font-mono text-[10px] uppercase tracking-widest">
            &copy; 2025 GRUPO 2. MATERIAL CONFIDENCIAL PARA USO ACADÉMICO.
          </p>
        </div>
      </footer>
    </div>
  );
}