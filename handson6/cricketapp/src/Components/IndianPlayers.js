import React,{Component} from 'react';

export function OddPlayers([first,,third,,fifth]){
    return (
        <div>
            <li> First: {first} </li>
            <li> Third: {third} </li>
            <li> Fifth: {fifth} </li>
        </div>

    );
}

export function EvenPlayers([,second,,fourth,,sixth]){
    return (
        <div>
            <li> Second: {second} </li>
            <li> Fourth: {fourth} </li>
            <li> Sixth: {sixth} </li>
        </div>

    );
}

const T20Players=['First Player', 'Second Player', 'Third Player']
const RanjiPlayers = ['Fourth Player', 'Fifth Player', 'Sizth Player']

export const MergedPlayers = [...T20Players, ...RanjiPlayers]

