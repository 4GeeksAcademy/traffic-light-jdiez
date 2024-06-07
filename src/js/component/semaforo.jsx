import React from "react";
import { useState } from "react";

export const Semaforo = () => {

    const [colorRed, setColorRed] = useState('');
    const [colorYellow, setColorYellow] = useState('');
    const [colorGreen, setColorGreen] = useState('');
    const [colorCeleste, setColorCeleste] = useState('');


    const handleClicRed = () => {
        setColorRed(<div className="luz-red"></div>)
        setColorYellow('')
        setColorGreen('')
        setColorCeleste('')
    }

    const handleClicYellow = () => {
        setColorYellow(<div className="luz-yellow"></div>)
        setColorRed('')
        setColorGreen('')
        setColorCeleste('')
    }

    const handleClicGreen = () => {
        setColorGreen(<div className="luz-green"></div>)
        setColorRed('')
        setColorYellow('')
        setColorCeleste('')
    }

    const handleClicCeleste = () => {
        setColorCeleste(
        <> <div className="bloque-semaforo-celeste d-flex flex-column align-items-center mx-auto bg-dark p-2 justify-content-center">
            <div className="luz-celeste"></div>
            <div className="bg-info rounded-circle w-100 h-75" ></div>
            </div>
            </>
            )
        setColorRed('')
        setColorYellow('')
        setColorGreen('')
    }

    return (
        <>
            <div className="semaforo d-flex flex-column gap-3 align-items-center mx-auto bg-dark p-2 mt-5 justify-content-center">
                {colorRed}<div className="bg-danger rounded-circle w-100 h-25 p-4 position-relative z-3" onClick={handleClicRed}></div>
                {colorYellow}<div className="bg-warning rounded-circle w-100 h-25 p-4" onClick={handleClicYellow}></div>
                {colorGreen}<div className="bg-success rounded-circle w-100 h-25 p-4" onClick={handleClicGreen}></div>
            </div>
            {colorCeleste}
            <div className="d-flex justify-content-center alig-items-center">
                <button onClick={handleClicCeleste} className="btn btn-primary mt-5 fs-3 ">Agregar luz celeste</button>
            </div>
        </>
    );
}