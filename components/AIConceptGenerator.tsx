
import React, { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { GoogleGenAI, Type } from '@google/genai';
import { SparklesIcon, SpinnerIcon, LocationMarkerIcon } from '../assets/icons';
import { useLanguage } from '../contexts/LanguageContext';

interface Color {
  name: string;
  hex: string;
}

interface AIConceptResponse {
  title: string;
  concept: string;
  locations: string[];
  colors: Color[];
  source?: 'AI' | 'LOCAL';
}

// --- BASE DE DATOS DE RESPALDO (OFFLINE/RESTRICTED REGIONS) ---
// Los textos aquí son técnicos o de emergencia, pero idealmente también podrían traducirse.
// Para este ejemplo, mantendremos la estructura local pero usamos el hook para los labels de UI.
const FALLBACK_CONCEPTS: Record<string, AIConceptResponse> = {
  quinces: {
    title: "Quinces: Glamour Habanero",
    concept: "Una fusión entre la arquitectura colonial decadente y la moda contemporánea de alta costura. Buscamos contrastar la textura de las paredes antiguas con telas brillantes y vaporosas, utilizando la luz dorada del atardecer para crear un ambiente de realeza moderna.",
    locations: ["Escalera de los Guardianes (Centro Habana)", "Jardines de la Tropical", "Interiores del Palacio de los Capitanes Generales"],
    colors: [
      { name: "Dorado Vintage", hex: "#D4AF37" },
      { name: "Rojo Carmesí", hex: "#DC143C" },
      { name: "Beige Piedra", hex: "#F5F5DC" },
      { name: "Negro Profundo", hex: "#000000" }
    ],
    source: 'LOCAL'
  },
  boda: {
    title: "Romance en el Malecón",
    concept: "Capturamos la intimidad de la pareja frente a la inmensidad del mar. Un estilo cinematográfico, con desenfoques artísticos y una paleta suave que evoca nostalgia y amor eterno, aprovechando la hora azul para siluetas dramáticas.",
    locations: ["El Malecón al atardecer", "Callejón de los Peluqueros", "La Guarida (Azotea)"],
    colors: [
      { name: "Blanco Perla", hex: "#EAE0C8" },
      { name: "Azul Acero", hex: "#4682B4" },
      { name: "Rosa Polvo", hex: "#D8BFD8" },
      { name: "Gris Pizarra", hex: "#708090" }
    ],
    source: 'LOCAL'
  },
  urbano: {
    title: "Street Style Havana",
    concept: "Energía cruda y vibrante. Utilizamos los grafitis, los autos clásicos y el movimiento de la ciudad como telón de fondo. Poses dinámicas, ángulos contrapicados y una edición con alto contraste para resaltar la personalidad rebelde y moderna.",
    locations: ["Calles de San Isidro", "Barrio Chino", "Parque de la Maestranza (Entorno industrial)"],
    colors: [
      { name: "Neón Cian", hex: "#00FFFF" },
      { name: "Magenta Urbano", hex: "#FF00FF" },
      { name: "Asfalto", hex: "#2F4F4F" },
      { name: "Amarillo Taxi", hex: "#FFD700" }
    ],
    source: 'LOCAL'
  },
  playa: {
    title: "Sirena del Caribe",
    concept: "Etéreo, suave y natural. Sesión al amanecer para capturar tonos pasteles y la calma del mar. Uso de telas mojadas, reflejos en el agua y luz natural difusa para una estética de ensueño y libertad.",
    locations: ["Playas del Este (Dunas)", "Santa María del Mar", "Costa rocosa de Cojímar"],
    colors: [
      { name: "Turquesa Mar", hex: "#40E0D0" },
      { name: "Coral Suave", hex: "#F08080" },
      { name: "Arena Blanca", hex: "#F5F5F5" },
      { name: "Azul Cielo", hex: "#87CEEB" }
    ],
    source: 'LOCAL'
  },
  default: {
    title: "Esencia MiniMax",
    concept: "El sello distintivo de nuestro estudio: iluminación dramática tipo Rembrandt en estudio o exteriores nocturnos. Centrado en la expresión facial y la conexión con la cámara, creando retratos atemporales y poderosos.",
    locations: ["Estudio MiniMax (Interiores)", "El Cristo de La Habana (Vistas nocturnas)", "Paseo del Prado"],
    colors: [
      { name: "Negro Mate", hex: "#1C1C1C" },
      { name: "Plata", hex: "#C0C0C0" },
      { name: "Azul Medianoche", hex: "#191970" },
      { name: "Blanco Puro", hex: "#FFFFFF" }
    ],
    source: 'LOCAL'
  }
};

const getOfflineConcept = (prompt: string): AIConceptResponse => {
    const lowerPrompt = prompt.toLowerCase();
    
    if (lowerPrompt.includes('quince') || lowerPrompt.includes('15') || lowerPrompt.includes('vestido') || lowerPrompt.includes('princesa')) {
        return FALLBACK_CONCEPTS.quinces;
    }
    if (lowerPrompt.includes('boda') || lowerPrompt.includes('novios') || lowerPrompt.includes('amor') || lowerPrompt.includes('pareja')) {
        return FALLBACK_CONCEPTS.boda;
    }
    if (lowerPrompt.includes('urbano') || lowerPrompt.includes('calle') || lowerPrompt.includes('moderno') || lowerPrompt.includes('rebelde')) {
        return FALLBACK_CONCEPTS.urbano;
    }
    if (lowerPrompt.includes('playa') || lowerPrompt.includes('mar') || lowerPrompt.includes('agua') || lowerPrompt.includes('verano')) {
        return FALLBACK_CONCEPTS.playa;
    }
    
    return FALLBACK_CONCEPTS.default;
};

const AIConceptGenerator: React.FC = () => {
    const { t, language } = useLanguage();
    const [prompt, setPrompt] = useState('');
    const [result, setResult] = useState<AIConceptResponse | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!prompt.trim()) {
            setError(t.ai.error);
            return;
        }

        setIsLoading(true);
        setError('');
        setResult(null);

        const apiKey = process.env.API_KEY;

        // INTENTO 1: Conexión API
        try {
            if (!apiKey) throw new Error("No API Key");

            const ai = new GoogleGenAI({ apiKey: apiKey });
            const model = 'gemini-2.5-flash';
            
            const schema = {
                type: Type.OBJECT,
                properties: {
                    title: { type: Type.STRING },
                    concept: { type: Type.STRING },
                    locations: { type: Type.ARRAY, items: { type: Type.STRING } },
                    colors: {
                        type: Type.ARRAY,
                        items: {
                            type: Type.OBJECT,
                            properties: {
                                name: { type: Type.STRING },
                                hex: { type: Type.STRING }
                            },
                            required: ["name", "hex"]
                        }
                    }
                },
                required: ["title", "concept", "locations", "colors"]
            };

            // Se puede ajustar el prompt según el idioma, pero la IA suele entender.
            // Forzamos la respuesta en el idioma actual del usuario.
            const fullPrompt = `Genera un concepto de sesión de fotos en La Habana para: "${prompt}". Response in ${language === 'es' ? 'Spanish' : 'English'}.`;

            const response = await ai.models.generateContent({
                model: model,
                contents: fullPrompt,
                config: {
                    responseMimeType: "application/json",
                    responseSchema: schema,
                    temperature: 0.7, 
                },
            });
            
            if (response.text) {
                let jsonString = response.text.trim();
                if (jsonString.startsWith('```json')) {
                    jsonString = jsonString.replace(/^```json\n?/, '').replace(/\n?```$/, '');
                } else if (jsonString.startsWith('```')) {
                    jsonString = jsonString.replace(/^```\n?/, '').replace(/\n?```$/, '');
                }
                
                const data = JSON.parse(jsonString) as AIConceptResponse;
                data.source = 'AI';
                setResult(data);
            } else {
                throw new Error("Empty response");
            }

        } catch (err: any) {
            console.warn("API Fallback Triggered:", err.message);
            // FALLBACK AUTOMÁTICO: Si falla la API (VPN, bloqueo, cuota), usamos el generador local
            // Simulamos un pequeño delay para que parezca que "pensó"
            setTimeout(() => {
                const offlineResult = getOfflineConcept(prompt);
                setResult(offlineResult);
                setIsLoading(false);
            }, 1500);
            return; 
        } 
        
        setIsLoading(false);
    };

    // Determinar si mostramos el área de resultados (solo si hay un resultado, no mientras carga)
    const showResult = result !== null;

    return (
        <section id="ia-generator" className="py-16 sm:py-20 md:py-32 relative overflow-hidden">
             {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-b from-cyan-900/10 to-transparent -z-10 blur-3xl"></div>

            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex justify-center items-center gap-3 mb-2">
                       <SparklesIcon className="w-8 h-8 md:w-10 md:h-10 text-cyan-400 animate-pulse" />
                       <h2 className="text-3xl md:text-5xl font-heading tracking-widest text-white">{t.ai.title}</h2>
                    </div>
                    <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto font-light">
                        {t.ai.subtitle}
                    </p>
                </motion.div>
                
                <LayoutGroup>
                    <div className={`grid gap-12 items-start max-w-6xl mx-auto ${showResult ? 'lg:grid-cols-2' : 'grid-cols-1'}`}>
                        {/* Input Area */}
                        <motion.div
                            layout
                            transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                            className={`bg-gray-900/60 p-6 md:p-8 rounded-2xl border border-gray-800 backdrop-blur-sm w-full ${!showResult ? 'max-w-2xl mx-auto' : ''}`}
                        >
                            <form onSubmit={handleSubmit}>
                                <label className="block text-cyan-400 text-sm font-bold uppercase tracking-wider mb-3">
                                    {t.ai.inputLabel}
                                </label>
                                <textarea
                                    value={prompt}
                                    onChange={(e) => setPrompt(e.target.value)}
                                    placeholder={t.ai.placeholder}
                                    rows={4}
                                    className="w-full bg-black/40 border border-gray-700 rounded-xl py-4 px-5 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all resize-none"
                                    disabled={isLoading}
                                />
                                <div className="mt-6">
                                    <button
                                        type="submit"
                                        className="w-full group relative overflow-hidden bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-4 px-8 rounded-xl uppercase text-sm tracking-[0.15em] transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
                                        disabled={isLoading}
                                    >
                                        <span className="relative z-10 flex items-center justify-center">
                                            {isLoading ? (
                                                <>
                                                    <SpinnerIcon className="animate-spin w-5 h-5 mr-3" />
                                                    {t.ai.buttonLoading}
                                                </>
                                            ) : (
                                                <>
                                                    <SparklesIcon className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                                                    {t.ai.button}
                                                </>
                                            )}
                                        </span>
                                        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </button>
                                </div>
                            </form>
                            
                            {error && (
                                <motion.p 
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                    className="mt-4 text-center text-red-400 text-sm bg-red-900/20 py-2 rounded border border-red-900/50"
                                >
                                    {error}
                                </motion.p>
                            )}
                        </motion.div>
                        
                        {/* Result Area */}
                        <AnimatePresence mode="popLayout">
                            {showResult && result && (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 20, scale: 0.9, transition: { duration: 0.2 } }}
                                    transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                                    className="w-full"
                                >
                                    <motion.div 
                                        className="bg-gradient-to-br from-gray-900 to-gray-800 p-1 rounded-2xl shadow-2xl"
                                    >
                                        <div className="bg-[#05060d] rounded-xl p-6 md:p-8 h-full relative overflow-hidden">
                                            {/* Decorative sheen */}
                                            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>

                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="text-2xl md:text-3xl font-heading text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white">
                                                    {result.title}
                                                </h3>
                                                {/* Badge de Origen */}
                                                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border ${result.source === 'AI' ? 'border-cyan-500/50 text-cyan-400' : 'border-purple-500/50 text-purple-400'}`}>
                                                    {result.source === 'AI' ? t.ai.badgeAI : t.ai.badgeLocal}
                                                </span>
                                            </div>
                                            
                                            <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base italic border-l-2 border-cyan-500/30 pl-4">
                                                "{result.concept}"
                                            </p>

                                            <div className="space-y-6">
                                                <div>
                                                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 flex items-center">
                                                        <LocationMarkerIcon className="w-4 h-4 mr-2" /> {t.ai.locationsLabel}
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {result.locations.map((loc, idx) => (
                                                            <li key={idx} className="text-gray-300 text-sm flex items-start">
                                                                <span className="text-cyan-500 mr-2">•</span> {loc}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                                                        {t.ai.colorsLabel}
                                                    </h4>
                                                    <div className="flex flex-wrap gap-3">
                                                        {result.colors.map((color, idx) => (
                                                            <div key={idx} className="flex items-center bg-gray-800/50 rounded-full pr-3 pl-1 py-1 border border-gray-700">
                                                                <div 
                                                                    className="w-6 h-6 rounded-full shadow-sm border border-white/10 mr-2" 
                                                                    style={{ backgroundColor: color.hex }}
                                                                ></div>
                                                                <span className="text-xs text-gray-300 font-medium">{color.name}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </LayoutGroup>
            </div>
        </section>
    );
};

export default AIConceptGenerator;
