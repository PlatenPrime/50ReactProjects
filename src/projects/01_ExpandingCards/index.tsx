import React from 'react'
import { CardsData } from "./data.ts"

interface Props {
    className?: string;
}


interface CardProps {
    id: number;
    activeCard: number;
    name: string;
    link: string;
    onClick: () => void
}


export const Cards: React.FC<Props> = ({ className }) => {

    const [activeCard, setActiveCard] = React.useState<number>(0)




    return (
        <div
            className="flex items-center justify-center bg-slate-900">
            <div
                className="flex items-center justify-center gap-4 w-4/5 min-h-screen"
            >
                {CardsData.map((card, index) => (
                    <Card
                        id={index}
                        activeCard={activeCard}
                        key={index}
                        name={card.name}
                        link={card.link}
                        onClick={() => setActiveCard(index)}
                    />
                ))}
            </div>
        </div>
    );
}


function Card({
    id,
    activeCard,
    onClick,
    name,
    link

}: CardProps) {


const width: string =  id === activeCard ? "w-[600px]" : "w-[200px]"
const opacity = id === activeCard ? "opacity-100" : "opacity-0"






    return (
        <div
            className={`relative rounded-xl overflow-hidden h-[500px] ${width} transition-all duration-1000 ease-in-out cursor-pointer`}
            onClick={onClick}
        >
            <span
                className={`absolute top-3 left-3 z-10 text-white text-2xl ${opacity} transition-all duration-1000 ease-in-out`}
            >
                {name}
            </span>

            <img
                src={link}
                alt={name}
                className=" w-full h-full object-cover "
            />
        </div>

    )
}