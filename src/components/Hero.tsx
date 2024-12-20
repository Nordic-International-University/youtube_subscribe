import { Youtube } from 'lucide-react'
import { motion } from 'framer-motion'
import youtube_image from '../assets/img.png'
import {Button} from "antd";

export default function Hero() {
    return (
        <main className="flex-grow flex items-center justify-center px-4 py-12 bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <motion.div
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    className="text-white md:w-1/2 mb-8 md:mb-0"
                >
                    <h1 className="text-4xl font-bold max-sm:text-xl mb-4">Botdan foydalanish uchun bizning kanallarga obuna
                        bo'ling!</h1>
                    <p className="text-xl mb-8 text-gray-300 max-sm:text-lg">
                        Rasmiy kanalimiz va Tasimo kanaliga obuna bo‘lish orqali barcha imkoniyatlardan foydalanishingiz
                        mumkin.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4">
                        <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
                            <Button target="_blank" href="https://www.youtube.com/@nordic_university" size="large" className="bg-red-600 max-sm:w-full py-7 font-semibold text-white hover:bg-red-700 transition-colors">
                                <Youtube className="mr-2 h-5 w-5"/>
                                Rasmiy kanalimizga obuna bo'lish
                            </Button>
                        </motion.div>
                        <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
                            <Button target="_blank" href="https://www.youtube.com/@tasimo_2024" size="large" className="bg-blue-600 py-7 font-semibold text-white max-sm:w-full hover:bg-blue-700 transition-colors">
                                <Youtube className="mr-2 h-5 w-5"/>
                                Tasimo kanalimizga obuna bo'lish
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, x: 70}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.5, delay: 0.2}}
                    className="md:w-1/3 relative"
                >
                    {/* Orqa fon elementi */}
                    <div
                        className="absolute inset-0  rounded-lg"
                        style={{
                            zIndex: -1, // Orqa fonni rasm orqasiga qo'yish uchun
                            transform: "scale(1.2)", // Biroz kattalashtirish
                        }}
                    ></div>

                    {/* Rasmni o'rtada joylash */}
                    <div className="relative flex items-center justify-center">
                        <div
                            className="p-2 bg-white/80 rounded-lg "
                            style={{
                                transform: "translateZ(50px)", // Z o'qi bo'yicha yuqoriga ko'tarish
                                zIndex: 10, // Rasmlar yuqorida turadi
                            }}
                        >
                            <img
                                src={youtube_image}
                                alt="Sizning YouTube kanalingiz"
                                width={700}
                                height={400}
                                className="rounded shadow-lg"
                                style={{
                                    transform: "translateZ(10px)", // Rasmni biroz yuqoriga ko'tarish
                                }}
                            />
                        </div>
                    </div>
                </motion.div>

            </div>
        </main>
    )
}