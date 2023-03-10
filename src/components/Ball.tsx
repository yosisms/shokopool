import React from 'react';

export interface IBallProps {
    color: string;
    number: number;
    isStriped?: boolean;
    onClick?: () => void;
    state?: 'active' | 'hidden' | 'out';
}

const Ball: React.FC<IBallProps> = ({state, number, color, isStriped = false, onClick}) => {
    // if (isHidden) {
    //     return (
    //         <div className={`ball ball-white`} onClick={onClick}>
    //             <span className="ball-number">{''}</span>
    //         </div>
    //     )
    // }
    // return (
    //     <div className={`ball ball-${color}${isStriped ? '-striped' : ''}`} onClick={onClick}>
    //         <span className="ball-number">{number}</span>
    //     </div>
    // )
    switch (state) {
        case 'active':
            return (
                <div className={`ball ball-${color}${isStriped ? '-striped' : ''}`}>
                    <span className="ball-number">{number}</span>
                </div>
            )
        case 'hidden':
            return (
                <div className={`ball ball-white`} onClick={onClick}>
                    <span className="ball-number">{'?'}</span>
                </div>
            )
        default:
        case 'out':
            return (
                <div className={`ball ball-white`} style={{ opacity: '.6'}}>
                    <span className="ball-number">{''}</span>
                </div>
            )
    }
};

export default Ball;