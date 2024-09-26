import React from 'react'


interface CircleProps {
    active: boolean
}



export const ProgressSteps: React.FC = () => {

    const [active, setActive] = React.useState<number>(0)



    const circleArr: number[] = [0, 1, 2, 3, 4]






    return (
        <div
            className="flex flex-col items-center justify-center gap-4
             bg-slate-900 h-screen relative z-[-2]"
        >
            <div className="flex items-center justify-between  w-[500px] relative" >
                {circleArr.map((circle) => <Circle active={circle === 0} key={circle} />)}
                <Track />
            </div>

            <Buttons />


        </div>
    );
}






function Circle({ active }: CircleProps) {
    return (
        <div className={`h-[30px] w-[30px] rounded-full ${active ? "bg-sky-500" : "bg-slate-500"}`} />
    )
}

function Track() {
    return (
        <div
            className="absolute w-full top-1/2 z-[-1] h-1  bg-slate-700 "
        >

        </div>
    )
}


function Buttons() {


    return (
        <div
            className="text-white flex gap-4"
        >
            <button
                className="cursor-pointer"
            >
                Prev
            </button>
            <button
                className="cursor-pointer"
            >
                Next
            </button>
        </div>
    )
}