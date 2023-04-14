import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react";

interface SlideProps {
    curr: number,
    setCurr: (x: number) => void,
    idx: number,
    children: JSX.Element
}

function Slide({ curr, setCurr, idx, children }: SlideProps) {
    const r = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (r.current) {
            r.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [curr])
    return (
        <>
            {
                curr >= idx && (
                    <div
                        ref={r}
                        className="w-full min-h-screen md:w-1/3 py-4 flex flex-col justify-center gap-4"
                    >
                        {children}
                        <AnimatePresence>
                            {curr == idx && (
                                <motion.div layout>
                                    <button
                                        className="bg-green-700 px-8 py-2 rounded-lg text-white font-semibold"
                                        onClick={async () => {
                                            setCurr(curr + 1)
                                        }}
                                    >
                                        Next
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )
            }
        </>
    )
}

export default function Section() {
    const [curr, setCurr] = useState(0);

    async function wait(ms: number) {
        return new Promise(resolve => {
            setTimeout(resolve, ms);
        });
    }

    return (
        <div className="min-h-screen px-4 w-full flex flex-col items-center bg-white bg-opacity-95 text-black">
            <motion.div className="w-full h-screen md:w-1/3 flex flex-col justify-center gap-4">
                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda fugit cupiditate quisquam vero nostrum iste praesentium quam laborum esse ipsa!</div>
                <AnimatePresence>
                    {curr == 0 && (
                        <motion.div layout>
                            <button
                                className="bg-green-700 px-8 py-2 rounded-lg text-white font-semibold"
                                onClick={async () => {
                                    setCurr(1)
                                }}
                            >
                                Next
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
            <Slide
                curr={curr}
                setCurr={setCurr}
                idx={1}
            >
                <>
                    <div>
                        Lorem ipsum dolor sit amet.
                    </div>
                    <div>
                        <div className="rounded-xl border-2 border-red-500 h-24 w-24 flex justify-center items-center">
                            <div className="rounded-full h-12 w-12 border-2 border-red-500"></div>
                        </div>
                    </div>
                </>
            </Slide>
            <Slide
                curr={curr}
                setCurr={setCurr}
                idx={2}
            >
                <>
                    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti rerum cum porro.</div>
                    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti rerum cum porro.</div>
                    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti rerum cum porro.</div>
                    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti rerum cum porro.</div>
                    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti rerum cum porro.</div>
                    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti rerum cum porro.</div>
                    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti rerum cum porro.</div>
                    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti rerum cum porro.</div>
                    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti rerum cum porro.</div>
                    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti rerum cum porro.</div>
                    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti rerum cum porro.</div>
                </>
            </Slide>
            <Slide
                curr={curr}
                setCurr={setCurr}
                idx={3}
            >
                <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti rerum cum porro.</div>
            </Slide>
        </div >
    )
}