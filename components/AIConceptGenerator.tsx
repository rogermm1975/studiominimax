
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GoogleGenAI, Type } from '@google/genai';
import { SparklesIcon, SpinnerIcon, LocationMarkerIcon } from '../assets/icons';

interface Color {
  name: string;
  hex: string;
}

interface AIConceptResponse {
  title: string;
  concept: string;
  locations: string[];
  colors: Color[];
}

const AIConceptGenerator: React.FC = () => {
    const [prompt, setPrompt] = useState('');
    const [result, setResult] = useState<AIConceptResponse | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!prompt.trim()) {
            setError('Por favor, describe tu idea para la sesión.');
            return;
        }

        const apiKey = process.env.API_KEY;
        if (!apiKey) {
             setError('Falta la API Key. Asegúrate de configurar el archivo .env correctamente.');
             return;
        }

        setIsLoading(true);
        setError('');
        setResult(null);

        try {
            const ai = new GoogleGenAI({ apiKey: apiKey });
            const model = 'gemini-2.5-flash';
            
            const schema = {
                type: Type.OBJECT,
                properties: {
                    title: { 
                        type: Type.STRING,
                        description: "Un título creativo, corto y atractivo para la sesión de fotos." 
                    },
                    concept: { 
                        type: Type.STRING,
                        description: "Una descripción inspiradora de 2-3 frases que capture la esencia, iluminación y emoción." 
                    },
                    locations: {
                        type: Type.ARRAY,
                        items: { type: Type.STRING },
                        description: "Lista de 2-3 lugares específicos y reales en La Habana que encajen con el concepto."
                    },
                    colors: {
                        type: Type.ARRAY,
                        items: {
                            type: Type.OBJECT,
                            properties: {
                                name: { type: Type.STRING, description: "Nombre artístico del color" },
                                hex: { type: Type.STRING, description: "Código HEX válido del color (ej. #FF5733)" }
                            },
                            required: ["name", "hex"]
                        },
                        description: "Paleta de 4 colores armónicos para la sesión."
                    }
                },
                required: ["title", "concept", "locations", "colors"]
            };

            const fullPrompt = `
                Eres un director creativo de clase mundial y fotógrafo experto en La Habana, Cuba.
                Genera un concepto de sesión de fotos único basado en: "${prompt}".
            `;

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
                // Clean potential markdown formatting if the model adds it
                if (jsonString.startsWith('```json')) {
                    jsonString = jsonString.replace(/^```json\n?/, '').replace(/\n?```$/, '');
                } else if (jsonString.startsWith('```')) {
                    jsonString = jsonString.replace(/^```\n?/, '').replace(/\n?```$/, '');
                }
                
                const data = JSON.parse(jsonString) as AIConceptResponse;
                setResult(data);
            } else {
                throw new Error("No se pudo generar el concepto.");
            }

        } catch (err) {
            console.error(err);
            setError('Hubo un error al conectar con la IA. Verifica tu conexión o intenta de nuevo.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="ia-generator" className="py-16 sm:py-20 md:py-32 relative">
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
                       <h2 className="text-3xl md:text-5xl font-heading tracking-widest text-white">IA Concept Lab</h2>
                    </div>
                    <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto font-light">
                        Describe tu visión y nuestra Inteligencia Artificial diseñará el moodboard perfecto para tu sesión en La Habana.
                    </p>
                </motion.div>
                
                <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    {/* Input Area */}
                    <motion.div
                        className="bg-gray-900/60 p-6 md:p-8 rounded-2xl border border-gray-800 backdrop-blur-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <form onSubmit={handleSubmit}>
                            <label className="block text-cyan-400 text-sm font-bold uppercase tracking-wider mb-3">
                                Tu Inspiración
                            </label>
                            <textarea
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                placeholder="Ej: Quiero una sesión de 15 años estilo 'Reina del Trópico' con mucha vegetación, luz dorada y un toque moderno..."
                                rows={4}
                                className="w-full bg-black/40 border border-gray-700 rounded-xl py-4 px-5 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all resize-none"
                                disabled={isLoading}
                            />
                            <div className="mt-6">
                                <button
                                    type="submit"
                                    className="w-full group relative overflow-hidden bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-4 px-8 rounded-xl uppercase text-sm tracking-[0.15em] transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
                                    disabled={isLoading}
                                >
                                    <span className="relative z-10 flex items-center justify-center">
                                        {isLoading ? (
                                            <>
                                                <SpinnerIcon className="animate-spin w-5 h-5 mr-3" />
                                                Diseñando...
                                            </>
                                        ) : (
                                            <>
                                                <SparklesIcon className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                                                Generar Concepto
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
                    <motion.div
                         className="relative min-h-[300px]"
                         initial={{ opacity: 0, x: 20 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        {!result && !isLoading && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-600 border-2 border-dashed border-gray-800 rounded-2xl">
                                <SparklesIcon className="w-12 h-12 mb-3 opacity-20" />
                                <p className="text-sm uppercase tracking-widest opacity-50">El resultado aparecerá aquí</p>
                            </div>
                        )}

                        {result && !isLoading && (
                            <motion.div 
                                className="bg-gradient-to-br from-gray-900 to-gray-800 p-1 rounded-2xl shadow-2xl"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="bg-[#05060d] rounded-xl p-6 md:p-8 h-full relative overflow-hidden">
                                    {/* Decorative sheen */}
                                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>

                                    <h3 className="text-2xl md:text-3xl font-heading text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white mb-4">
                                        {result.title}
                                    </h3>
                                    
                                    <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base italic border-l-2 border-cyan-500/30 pl-4">
                                        "{result.concept}"
                                    </p>

                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 flex items-center">
                                                <LocationMarkerIcon className="w-4 h-4 mr-2" /> Locaciones Sugeridas
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
                                                Paleta de Color
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
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AIConceptGenerator;
