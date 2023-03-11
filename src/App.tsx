import React, { useMemo } from 'react';
import Nav from "./components/Nav";
import {Button} from "reactstrap";
import Ball from "./components/Ball";
import balls from "./hard-coded/balls";

export interface IAppProps {
}

const App: React.FC<IAppProps> = () => {
    const [showNumber, setShowNumber] = React.useState(false);
    const [number, setNumber] = React.useState(0);
    const [list, setList] = React.useState<number[]>(new Array(15).fill(0).map((_, i) => i + 1));
    const [blackList, setBlackList] = React.useState<number[]>([]);

    // random number generator
    const getRandomNumber = () => {
        const random = Math.floor(Math.random() * list.length);
        return list[random];
    }

    const generateNumber = () => {
        const newNumber = getRandomNumber();
        setNumber(newNumber);
        setList(list.filter((item) => item !== newNumber));
        setBlackList([...blackList, newNumber]);
        setShowNumber(true);
    }

    const onNext = () => {
        setShowNumber(false);
    }

    const onReset = () => {
        setList(new Array(15).fill(0).map((_, i) => i + 1));
        setBlackList([]);
        setShowNumber(false);
    }

    const gameState = useMemo(() => {
        if(list?.length === 0 && !showNumber) {
            return 'out';
        } else if(!showNumber) {
            return 'hidden';
        } else {
            return 'active';
        }
    }, [list, showNumber]);

    const chosenBall = useMemo(() => {
        return balls?.[number - 1];
    }, [number]);

    console.log({ list, blackList, showNumber, number, gameState })

    return (
        <div className={'site bg-secondary'}>
            <Nav/>
            <main className={'main'} style={{flex: 1}}>
                {/*<div className={'wrapper'}>*/}
                {/*    {showNumber ? (*/}
                {/*        <div className={'number d-button'}>{number}</div>*/}
                {/*    ): list?.length > 0 ? (*/}
                {/*        <Button className={'d-button'} size={'xl'} onClick={generateNumber}>Generate</Button>*/}
                {/*    ) : (*/}
                {/*        <Button className={'d-button'} size={'xl'} onClick={generateNumber} disabled={true}>No more</Button>*/}
                {/*    )}*/}
                {/*</div>*/}

                {/*<Ball*/}
                {/*    color={balls?.[number]?.color || 'red'}*/}
                {/*    number={balls?.[number]?.number || 0}*/}
                {/*    isStriped={balls?.[number]?.isStriped || false}*/}
                {/*    isHidden={!showNumber}*/}
                {/*/>*/}

                <div className={'wrapper'}>
                        <Ball
                            color={chosenBall?.color || 'red'}
                            number={chosenBall?.number || 0}
                            isStriped={chosenBall?.isStriped || false}
                            onClick={generateNumber}
                            state={gameState}
                        />
                </div>
                <div className={`buttons ${gameState === 'hidden' ? 'hidden' : ''}`}>
                    <Button size={'lg'} color={'success'} onClick={onNext}
                            disabled={list?.length === 0 && !showNumber}>Next</Button>
                </div>
            </main>
        </div>
    )
};

// const footer = <footer className={'footer'}>
               // <div className={`buttons ${blackList?.length === 0 ? 'hidden' : ''}`}>
                //    <Button color={'danger'} onClick={onReset} disabled={list?.length === 15}>Reset</Button>
              //  </div>
            // </footer>

export default App;
