
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GoogleGenAI } from '@google/genai';
import { SparklesIcon, SpinnerIcon } from '../assets/icons';

const AIConceptGenerator: React.FC = () => {
    const [prompt, setPrompt] = useState('');
    const [result, setResult] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!prompt.trim()) {
            setError('Por favor, describe tu idea para la sesión.');
            return;
        }
        setIsLoading(true);
        setError('');
        setResult('');

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            const model = 'gemini-2.5-flash';
            
            const fullPrompt = `
                Eres un director creativo y fotógrafo experto en La Habana, Cuba.
                Tu tarea es generar un concepto de sesión de fotos inspirador y detallado basado en la idea del usuario.
                La respuesta debe ser concisa, profesional y estar formateada de la siguiente manera, usando Markdown simple:

                - **Título Creativo:** [Un título atractivo para la sesión]
                - **Concepto:** [Una descripción de 2-3 frases que capture la esencia y emoción.]
                - **Locaciones Sugeridas:** [Lista de 2-3 lugares específicos y emblemáticos en La Habana que encajen con el concepto.]
                - **Paleta de Colores:** [3-4 colores que armonicen con la idea. Ej: Terracota, Azul Cobalto, Verde Oliva, Blanco Hueso.]

                Idea del usuario: "${prompt}"
            `;

            const response = await ai.models.generateContent({
                model: model,
                contents: fullPrompt,
            });
            
            setResult(response.text);

        } catch (err) {
            console.error(err);
            setError('Hubo un error al generar la idea. Por favor, inténtalo de nuevo.');
        } finally {
            setIsLoading(false);
        }
    };
    
    const renderResult = () => {
        if (!result) return null;
        return result.split('\n').map((line, index) => {
            if (line.startsWith('- **')) {
                const parts = line.replace('- **', '').split(':**');
                return (
                    <p key={index} className="mb-2">
                        <span className="font-bold text-cyan-400">{parts[0]}:</span>
                        <span className="text-gray-300"> {parts[1]}</span>
                    </p>
                );
            }
            if (line.trim().startsWith('- ')) {
                return <p key={index} className="text-gray-300 ml-4">{line}</p>;
            }
            return null; // Ignorar líneas vacías o sin formato
        }).filter(Boolean);
    };

    return (
        <section id="ia-generator" className="py-16 sm:py-20 md:py-32">
            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex justify-center items-center gap-4">
                       <SparklesIcon className="w-12 h-12 text-cyan-400" />
                       <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading tracking-widest text-white">Generador de Ideas con IA</h2>
                    </div>
                    <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">¿Sin inspiración? Describe tu sesión soñada y nuestra IA creará un concepto único para ti.</p>
                </motion.div>
                
                <motion.div
                    className="max-w-2xl mx-auto bg-gray-900/50 p-8 rounded-lg border border-gray-700/50"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <form onSubmit={handleSubmit}>
                        <textarea
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="Ej: Una sesión de quinces con un coche clásico americano y un estilo vintage al atardecer en el Malecón..."
                            rows={3}
                            className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                            aria-label="Describe tu idea de sesión de fotos"
                            disabled={isLoading}
                        />
                        <button
                            type="submit"
                            className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-8 rounded-full uppercase text-sm tracking-widest transition-all duration-300 transform hover:scale-105 btn-neon-gradient-cyan flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <SpinnerIcon className="animate-spin w-5 h-5 mr-3" />
                                    Generando...
                                </>
                            ) : (
                                "Crear Concepto Mágico"
                            )}
                        </button>
                    </form>
                    
                    {error && <p className="mt-4 text-center text-red-400">{error}</p>}
                    
                    {result && (
                        <motion.div 
                            className="mt-8 pt-6 border-t border-gray-700"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="bg-black/20 p-6 rounded-lg">
                               {renderResult()}
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default AIConceptGenerator;