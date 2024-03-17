import React, { useState } from 'react';
import Dorucak from './Dorucak';
import SvezeSalate from './SvezeSalate';
import GlavnoJelo from './GlavnoJelo';
import Desert from './Desert';
import Steak from './Steak';
import Predjela from './Predjela';
import Corbe from './Corbe';
import ObrokSalate from './ObrokSalate';
import Paste from './Paste';
import Pice from './Pice';
import Ribe from './Ribe';
import Prilog from './Prilog';
import Sos from './Sos';
function Meni() {
    const [dorucakOpen, setDorucakOpen] = useState(false);
    const [svezeSalateOpen, setSvezeSalateOpen] = useState(false);
    const [glavnoJeloOpen, setGlavnoJeloOpen] = useState(false);
    const [desertOpen, setDesertOpen] = useState(false);
    const [steakOpen, setSteakOpen] = useState(false);
    const [predjelaOpen, setPredjelaOpen] = useState(false);
    const [corbeOpen, setCorbeOpen] = useState(false);
    const [obrokSalateOpen, setObrokSalateOpen] = useState(false);
    const [pasteOpen, setPasteOpen] = useState(false);
    const [piceOpen, setPiceOpen] = useState(false);
    const [ribeOpen, setRibeOpen] = useState(false);
    const [prilogOpen, setPrilogOpen] = useState(false);
    const [sosOpen, setSosOpen] = useState(false);



    const handleDorucakClick = () => {
        setDorucakOpen(!dorucakOpen);
        setSvezeSalateOpen(false);
        setGlavnoJeloOpen(false);
        setDesertOpen(false);
        setSteakOpen(false);
        setPredjelaOpen(false);
        setCorbeOpen(false);
        setObrokSalateOpen(false);
        setPasteOpen(false);
        setPiceOpen(false);
        setRibeOpen(false);
        setPrilogOpen(false);
        setSosOpen(false);

    };

    const handleSvezeSalateClick = () => {
        setDorucakOpen(false);
        setSvezeSalateOpen(!svezeSalateOpen);
        setGlavnoJeloOpen(false);
        setDesertOpen(false);
        setSteakOpen(false);
        setPredjelaOpen(false);
        setCorbeOpen(false);
        setObrokSalateOpen(false);
        setPasteOpen(false);
        setPiceOpen(false);
        setRibeOpen(false);
        setPrilogOpen(false);
        setSosOpen(false);
    };

    const handleGlavnoJeloClick = () => {
        setDorucakOpen(false);
        setSvezeSalateOpen(false);
        setGlavnoJeloOpen(!glavnoJeloOpen);
        setDesertOpen(false);
        setSteakOpen(false);
        setPredjelaOpen(false);
        setCorbeOpen(false);
        setObrokSalateOpen(false);
        setPasteOpen(false);
        setPiceOpen(false);
        setRibeOpen(false);
        setPrilogOpen(false);
        setSosOpen(false);
    };

    const handleDesertClick = () => {
        setDesertOpen(true);
        setDorucakOpen(false);
        setSvezeSalateOpen(false);
        setGlavnoJeloOpen(false);
        setSteakOpen(false);
        setPredjelaOpen(false);
        setCorbeOpen(false);
        setObrokSalateOpen(false);
        setPasteOpen(false);
        setPiceOpen(false);
        setRibeOpen(false);
        setPrilogOpen(false);
        setSosOpen(false);

    };
    const handleSteakClick = () => {
        setSteakOpen(!steakOpen);
        setDorucakOpen(false);
        setSvezeSalateOpen(false);
        setGlavnoJeloOpen(false);
        setDesertOpen(false);
        setPredjelaOpen(false);
        setCorbeOpen(false);
        setObrokSalateOpen(false);
        setPasteOpen(false);
        setPiceOpen(false);
        setRibeOpen(false);
        setPrilogOpen(false);
        setSosOpen(false);
    };
    const handlePredjelaClick = () => {
        setPredjelaOpen(!predjelaOpen);
        setDorucakOpen(false);
        setSvezeSalateOpen(false);
        setGlavnoJeloOpen(false);
        setDesertOpen(false);
        setSteakOpen(false);
        setCorbeOpen(false);
        setObrokSalateOpen(false);
        setPasteOpen(false);
        setPiceOpen(false);
        setRibeOpen(false);
        setPrilogOpen(false);
        setSosOpen(false);
    };
    const handleCorbeClick = () => {
        setCorbeOpen(!corbeOpen);
        setDorucakOpen(false);
        setSvezeSalateOpen(false);
        setGlavnoJeloOpen(false);
        setDesertOpen(false);
        setSteakOpen(false);
        setPredjelaOpen(false);
        setObrokSalateOpen(false);
        setPasteOpen(false);
        setPiceOpen(false);
        setRibeOpen(false);
        setPrilogOpen(false);
        setSosOpen(false);
    }
    const handleObrokSalateClick = () => {
        setObrokSalateOpen(!obrokSalateOpen);
        setCorbeOpen(false);
        setDorucakOpen(false);
        setSvezeSalateOpen(false);
        setGlavnoJeloOpen(false);
        setDesertOpen(false);
        setSteakOpen(false);
        setPredjelaOpen(false);
        setPasteOpen(false);
        setPiceOpen(false);
        setRibeOpen(false);
        setPrilogOpen(false);
        setSosOpen(false);
    }
    const handlePasteClick = () => {
        setPasteOpen(!pasteOpen);
        setCorbeOpen(false);
        setDorucakOpen(false);
        setSvezeSalateOpen(false);
        setGlavnoJeloOpen(false);
        setDesertOpen(false);
        setSteakOpen(false);
        setPredjelaOpen(false);
        setObrokSalateOpen(false);
        setPiceOpen(false);
        setRibeOpen(false);
        setPrilogOpen(false);
        setSosOpen(false);
    }
    const handlePiceClick = () => {
        setPiceOpen(!piceOpen);
        setCorbeOpen(false);
        setDorucakOpen(false);
        setSvezeSalateOpen(false);
        setGlavnoJeloOpen(false);
        setDesertOpen(false);
        setSteakOpen(false);
        setPredjelaOpen(false);
        setObrokSalateOpen(false);
        setPasteOpen(false);
        setRibeOpen(false);
        setPrilogOpen(false);
        setSosOpen(false);
    }
    const handleRibeClick = () => {
        setRibeOpen(!ribeOpen);
        setCorbeOpen(false);
        setDorucakOpen(false);
        setSvezeSalateOpen(false);
        setGlavnoJeloOpen(false);
        setDesertOpen(false);
        setSteakOpen(false);
        setPredjelaOpen(false);
        setObrokSalateOpen(false);
        setPasteOpen(false);
        setPiceOpen(false);
        setPrilogOpen(false);
        setSosOpen(false);
    }
    const handlePrilogClick = () => {
        setPrilogOpen(!prilogOpen);
        setCorbeOpen(false);
        setDorucakOpen(false);
        setSvezeSalateOpen(false);
        setGlavnoJeloOpen(false);
        setDesertOpen(false);
        setSteakOpen(false);
        setPredjelaOpen(false);
        setObrokSalateOpen(false);
        setPasteOpen(false);
        setPiceOpen(false);
        setRibeOpen(false);
        setSosOpen(false);
    }
    const handleSosClick = () => {
        setSosOpen(!sosOpen);
        setCorbeOpen(false);
        setDorucakOpen(false);
        setSvezeSalateOpen(false);
        setGlavnoJeloOpen(false);
        setDesertOpen(false);
        setSteakOpen(false);
        setPredjelaOpen(false);
        setObrokSalateOpen(false);
        setPasteOpen(false);
        setPiceOpen(false);
        setRibeOpen(false);
        setPrilogOpen(false);
    }

    return (
        <div className='flex items-center flex-col'>
            <hr className='border w-[80%] text-white m-5' />
            <div className='text-white text-2xl flex flex-wrap items-center justify-center gap-5'>
                <button onClick={handleDorucakClick}>Dorucak</button>
                <button onClick={handleSvezeSalateClick}>Sveze Salate</button>
                <button onClick={handleGlavnoJeloClick}>Glavna jela</button>
                <button onClick={handleDesertClick}>Desert</button>
                <button onClick={handleSteakClick}>Steak</button>
                <button onClick={handlePredjelaClick}>Predjela</button>
                <button onClick={handleCorbeClick}>Čorbe</button>
                <button onClick={handleObrokSalateClick}>Obrok Salate</button>
                <button onClick={handlePasteClick}>Paste i Rize</button>
                <button onClick={handlePiceClick}>Pice</button>
                <button onClick={handleRibeClick}>Ribe</button>
                <button onClick={handlePrilogClick}>Prilog</button>
                <button onClick={handleSosClick}>Sosevi</button>
            </div>

            {dorucakOpen && <Dorucak />}
            {svezeSalateOpen && <SvezeSalate />}
            {glavnoJeloOpen && <GlavnoJelo />}
            {desertOpen && <Desert />}
            {steakOpen && <Steak />}
            {predjelaOpen && <Predjela />}
            {corbeOpen && <Corbe />}
            {obrokSalateOpen && <ObrokSalate />}
            {pasteOpen && <Paste />}
            {piceOpen && <Pice />}
            {ribeOpen && <Ribe />}
            {prilogOpen && <Prilog />}
            {sosOpen && <Sos />}
        </div>
    );
}

export default Meni;
