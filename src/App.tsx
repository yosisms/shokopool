import React from 'react';
import Nav from "./components/Nav";
import {Button} from "reactstrap";

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

    return (
        <div className={'d-flex flex-column h-100'}>
            <Nav />
            <main className={'bg-secondary main'} style={{ flex: 1}}>
                <div className={'wrapper'}>
                    {showNumber ? (
                        <div className={'number d-button'}>{number}</div>
                    ): list?.length > 0 ? (
                        <Button className={'d-button'} size={'xl'} onClick={generateNumber}>Generate</Button>
                    ) : (
                        <Button className={'d-button'} size={'xl'} onClick={generateNumber} disabled={true}>No more</Button>
                    )}
                </div>
                <div className={'buttons'}>
                    <Button color={'success'} onClick={onNext} disabled={list?.length === 0 && !showNumber}>Next</Button>
                    <Button color={'danger'} onClick={onReset} disabled={list?.length === 15}>Reset</Button>
                </div>
            </main>
        </div>
    )
};

export default App;