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
import Kokteli from './Kokteli';
import Viski from './Viski';
import Konjak from './Konjak';
import LikeriVermut from './LikeriVermut';
import VodkaDzin from './VodkaDzin';
import Rum from './Rum';
import Tekila from './Tekila';
import CrvenaVinaSrb from './CrvenaVinaSrb';
import VinoCasa from './VinoCasa';
import RozeVinaSrb from './RozeVinaSrb';
import BelaVina from './BelaVina';
import TopliNapici from './TopliNapici';
import SpecijalKafe from './SpecijalKafe';
import Vode from './Vode';
import FlasiranaPiva from './FlasiranaPiva';
import TocenaPiva from './TocenaPiva';
import Somerbsy from './Somerbsy';
import SveziCedjeni from './SveziCedjeni';
import { sveziCedjeniSokovi } from '../Services/meni';
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
    const [kokteliOpen, setKokteliOpen] = useState(false);
    const [viskiOpen, setViskiOpen] = useState(false);
    const [konjakOpen, setKonjakOpen] = useState(false);
    const [likeriVermutOpen, setLikeriVermutOpen] = useState(false);
    const [vodkaDzinOpen, setVodkaDzinOpen] = useState(false);
    const [rumOpen, setRumOpen] = useState(false);
    const [tekilaOpen, setTekilaOpen] = useState(false);
    const [crvenaVinaSrbOpen, setCrvenaVinaSrbOpen] = useState(false);
    const [vinoCasaOpen, setVinoCasaOpen] = useState(false);
    const [rozeVinaSrbOpen, setRozeVinaSrbOpen] = useState(false);
    const [belaVinaOpen, setBelaVinaOpen] = useState(false);
    const [topliNapiciOpen, setTopliNapiciOpen] = useState(false);
    const [specijalKafeOpen, setSpecijalKafeOpen] = useState(false);
    const [vodeOpen, setVodeOpen] = useState(false);
    const [flasiranaPivaOpen, setFlasiranaPivaOpen] = useState(false);
    const [tocenaPivaOpen, setTocenaPivaOpen] = useState(false);
    const [somerbsyOpen, setSomerbsyOpen] = useState(false);
    const [sveziCedjeniOpen, setSveziCedjeniOpen] = useState(false);



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
        setKokteliOpen(false);
        setViskiOpen(false);
        setKonjakOpen(false);
        setLikeriVermutOpen(false);
        setVodkaDzinOpen(false);
        setRumOpen(false);
        setTekilaOpen(false);
        setCrvenaVinaSrbOpen(false);
        setVinoCasaOpen(false);
        setRozeVinaSrbOpen(false);
        setBelaVinaOpen(false);
        setTopliNapiciOpen(false);
        setSpecijalKafeOpen(false);
        setVodeOpen(false);
        setFlasiranaPivaOpen(false);
        setTocenaPivaOpen(false);
        setSomerbsyOpen(false);
        setSveziCedjeniOpen(false);

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
        setKokteliOpen(false);
        setViskiOpen(false);
        setKonjakOpen(false);
        setLikeriVermutOpen(false);
        setVodkaDzinOpen(false);
        setRumOpen(false);
        setTekilaOpen(false);
        setCrvenaVinaSrbOpen(false);
        setVinoCasaOpen(false);
        setRozeVinaSrbOpen(false);
        setBelaVinaOpen(false);
        setTopliNapiciOpen(false);
        setSpecijalKafeOpen(false);
        setVodeOpen(false);
        setFlasiranaPivaOpen(false);
        setTocenaPivaOpen(false);
        setSomerbsyOpen(false);
        setSveziCedjeniOpen(false);

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
        setKokteliOpen(false);
        setViskiOpen(false);
        setKonjakOpen(false);
        setLikeriVermutOpen(false);
        setVodkaDzinOpen(false);
        setRumOpen(false);
        setTekilaOpen(false);
        setCrvenaVinaSrbOpen(false);
        setVinoCasaOpen(false);
        setRozeVinaSrbOpen(false);
        setBelaVinaOpen(false);
        setTopliNapiciOpen(false);
        setSpecijalKafeOpen(false);
        setVodeOpen(false);
        setFlasiranaPivaOpen(false);
        setTocenaPivaOpen(false);
        setSomerbsyOpen(false);
        setSveziCedjeniOpen(false);
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
        setKokteliOpen(false);
        setViskiOpen(false);
        setKonjakOpen(false);
        setLikeriVermutOpen(false);
        setVodkaDzinOpen(false);
        setRumOpen(false);
        setTekilaOpen(false);
        setCrvenaVinaSrbOpen(false);
        setVinoCasaOpen(false);
        setRozeVinaSrbOpen(false);
        setBelaVinaOpen(false);
        setTopliNapiciOpen(false);
        setSpecijalKafeOpen(false);
        setVodeOpen(false);
        setFlasiranaPivaOpen(false);
        setTocenaPivaOpen(false);
        setSomerbsyOpen(false);
        setSveziCedjeniOpen(false);
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
        setKokteliOpen(false);
        setViskiOpen(false);
        setKonjakOpen(false);
        setLikeriVermutOpen(false);
        setVodkaDzinOpen(false);
        setRumOpen(false);
        setTekilaOpen(false);
        setCrvenaVinaSrbOpen(false);
        setVinoCasaOpen(false);
        setRozeVinaSrbOpen(false);
        setBelaVinaOpen(false);
        setTopliNapiciOpen(false);
        setSpecijalKafeOpen(false);
        setVodeOpen(false);
        setFlasiranaPivaOpen(false);
        setTocenaPivaOpen(false);
        setSomerbsyOpen(false);
        setSveziCedjeniOpen(false);
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
        setKokteliOpen(false);
        setViskiOpen(false);
        setKonjakOpen(false);
        setLikeriVermutOpen(false);
        setVodkaDzinOpen(false);
        setRumOpen(false);
        setTekilaOpen(false);
        setCrvenaVinaSrbOpen(false);
        setVinoCasaOpen(false);
        setRozeVinaSrbOpen(false);
        setBelaVinaOpen(false);
        setTopliNapiciOpen(false);
        setSpecijalKafeOpen(false);
        setVodeOpen(false);
        setFlasiranaPivaOpen(false);
        setTocenaPivaOpen(false);
        setSomerbsyOpen(false);
        setSveziCedjeniOpen(false);
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
        setKokteliOpen(false);
        setViskiOpen(false);
        setKonjakOpen(false);
        setLikeriVermutOpen(false);
        setVodkaDzinOpen(false);
        setRumOpen(false);
        setTekilaOpen(false);
        setCrvenaVinaSrbOpen(false);
        setVinoCasaOpen(false);
        setRozeVinaSrbOpen(false);
        setBelaVinaOpen(false);
        setTopliNapiciOpen(false);
        setSpecijalKafeOpen(false);
        setVodeOpen(false);
        setFlasiranaPivaOpen(false);
        setTocenaPivaOpen(false);
        setSomerbsyOpen(false);
        setSveziCedjeniOpen(false);

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
        setKokteliOpen(false);
        setViskiOpen(false);
        setKonjakOpen(false);
        setLikeriVermutOpen(false);
        setVodkaDzinOpen(false);
        setRumOpen(false);
        setTekilaOpen(false);
        setCrvenaVinaSrbOpen(false);
        setVinoCasaOpen(false);
        setRozeVinaSrbOpen(false);
        setBelaVinaOpen(false);
        setTopliNapiciOpen(false);
        setSpecijalKafeOpen(false);
        setVodeOpen(false);
        setFlasiranaPivaOpen(false);
        setTocenaPivaOpen(false);
        setSomerbsyOpen(false);
        setSveziCedjeniOpen(false);
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
        setKokteliOpen(false);
        setViskiOpen(false);
        setKonjakOpen(false);
        setLikeriVermutOpen(false);
        setVodkaDzinOpen(false);
        setRumOpen(false);
        setTekilaOpen(false);
        setCrvenaVinaSrbOpen(false);
        setVinoCasaOpen(false);
        setRozeVinaSrbOpen(false);
        setBelaVinaOpen(false);
        setTopliNapiciOpen(false);
        setSpecijalKafeOpen(false);
        setVodeOpen(false);
        setFlasiranaPivaOpen(false);
        setTocenaPivaOpen(false);
        setSomerbsyOpen(false);
        setSveziCedjeniOpen(false);
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
        setKokteliOpen(false);
        setViskiOpen(false);
        setKonjakOpen(false);
        setLikeriVermutOpen(false);
        setVodkaDzinOpen(false);
        setRumOpen(false);
        setTekilaOpen(false);
        setCrvenaVinaSrbOpen(false);
        setVinoCasaOpen(false);
        setRozeVinaSrbOpen(false);
        setBelaVinaOpen(false);
        setTopliNapiciOpen(false);
        setSpecijalKafeOpen(false);
        setVodeOpen(false);
        setFlasiranaPivaOpen(false);
        setTocenaPivaOpen(false);
        setSomerbsyOpen(false);
        setSveziCedjeniOpen(false);
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
        setKokteliOpen(false);
        setViskiOpen(false);
        setKonjakOpen(false);
        setLikeriVermutOpen(false);
        setVodkaDzinOpen(false);
        setRumOpen(false);
        setTekilaOpen(false);
        setCrvenaVinaSrbOpen(false);
        setVinoCasaOpen(false);
        setRozeVinaSrbOpen(false);
        setBelaVinaOpen(false);
        setTopliNapiciOpen(false);
        setSpecijalKafeOpen(false);
        setVodeOpen(false);
        setFlasiranaPivaOpen(false);
        setTocenaPivaOpen(false);
        setSomerbsyOpen(false);
        setSveziCedjeniOpen(false);
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
        setKokteliOpen(false);
        setViskiOpen(false);
        setKonjakOpen(false);
        setLikeriVermutOpen(false);
        setVodkaDzinOpen(false);
        setRumOpen(false);
        setTekilaOpen(false);
        setCrvenaVinaSrbOpen(false);
        setVinoCasaOpen(false);
        setRozeVinaSrbOpen(false);
        setBelaVinaOpen(false);
        setTopliNapiciOpen(false);
        setSpecijalKafeOpen(false);
        setVodeOpen(false);
        setFlasiranaPivaOpen(false);
        setTocenaPivaOpen(false);
        setSomerbsyOpen(false);
        setSveziCedjeniOpen(false);
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
        setKokteliOpen(false);
        setViskiOpen(false);
        setKonjakOpen(false);
        setLikeriVermutOpen(false);
        setVodkaDzinOpen(false);
        setRumOpen(false);
        setTekilaOpen(false);
        setCrvenaVinaSrbOpen(false);
        setVinoCasaOpen(false);
        setRozeVinaSrbOpen(false);
        setBelaVinaOpen(false);
        setTopliNapiciOpen(false);
        setSpecijalKafeOpen(false);
        setVodeOpen(false);
        setFlasiranaPivaOpen(false);
        setTocenaPivaOpen(false);
        setSomerbsyOpen(false);
        setSveziCedjeniOpen(false);
    }
    const handleKokteliClick = () => {
        setKokteliOpen(!kokteliOpen);
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
        setSosOpen(false);
        setViskiOpen(false);
        setKonjakOpen(false);
        setLikeriVermutOpen(false);
        setVodkaDzinOpen(false);
        setRumOpen(false);
        setTekilaOpen(false);
        setCrvenaVinaSrbOpen(false);
        setVinoCasaOpen(false);
        setRozeVinaSrbOpen(false);
        setBelaVinaOpen(false);
        setTopliNapiciOpen(false);
        setSpecijalKafeOpen(false);
        setVodeOpen(false);
        setFlasiranaPivaOpen(false);
        setTocenaPivaOpen(false);
        setSomerbsyOpen(false);
        setSveziCedjeniOpen(false);
    }
    const handleViskiClick = () => {
        setViskiOpen(!viskiOpen);
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
        setSosOpen(false);
        setKokteliOpen(false);
        setKonjakOpen(false);
        setLikeriVermutOpen(false);
        setVodkaDzinOpen(false);
        setRumOpen(false);
        setTekilaOpen(false);
        setCrvenaVinaSrbOpen(false);
        setVinoCasaOpen(false);
        setRozeVinaSrbOpen(false);
        setBelaVinaOpen(false);
        setTopliNapiciOpen(false);
        setSpecijalKafeOpen(false);
        setVodeOpen(false);
        setFlasiranaPivaOpen(false);
        setTocenaPivaOpen(false);
        setSomerbsyOpen(false);
        setSveziCedjeniOpen(false);
    }
    const handleKonjakClick = () => {
        setKonjakOpen(!konjakOpen);
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
        setSosOpen(false);
        setKokteliOpen(false);
        setViskiOpen(false);
        setLikeriVermutOpen(false);
        setVodkaDzinOpen(false);
        setRumOpen(false);
        setTekilaOpen(false);
        setCrvenaVinaSrbOpen(false);
        setVinoCasaOpen(false);
        setRozeVinaSrbOpen(false);
        setBelaVinaOpen(false);
        setTopliNapiciOpen(false);
        setSpecijalKafeOpen(false);
        setVodeOpen(false);
        setFlasiranaPivaOpen(false);
        setTocenaPivaOpen(false);
        setSomerbsyOpen(false);
        setSveziCedjeniOpen(false);
    }
    const handleLikeriVermutClick = () => {
        setLikeriVermutOpen(!likeriVermutOpen);
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
        setSosOpen(false);
        setKokteliOpen(false);
        setViskiOpen(false);
        setKonjakOpen(false);
        setVodkaDzinOpen(false);
        setRumOpen(false);
        setTekilaOpen(false);
        setCrvenaVinaSrbOpen(false);
        setVinoCasaOpen(false);
        setRozeVinaSrbOpen(false);
        setBelaVinaOpen(false);
        setTopliNapiciOpen(false);
        setSpecijalKafeOpen(false);
        setVodeOpen(false);
        setFlasiranaPivaOpen(false);
        setTocenaPivaOpen(false);
        setSomerbsyOpen(false);
        setSveziCedjeniOpen(false);
    }
    const handleVodkaDzinClick = () => {
        setVodkaDzinOpen(!vodkaDzinOpen);
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
        setSosOpen(false);
        setKokteliOpen(false);
        setViskiOpen(false);
        setKonjakOpen(false);
        setLikeriVermutOpen(false);
        setRumOpen(false);
        setTekilaOpen(false);
        setCrvenaVinaSrbOpen(false);
        setVinoCasaOpen(false);
        setRozeVinaSrbOpen(false);
        setBelaVinaOpen(false);
        setTopliNapiciOpen(false);
        setSpecijalKafeOpen(false);
        setVodeOpen(false);
        setFlasiranaPivaOpen(false);
        setTocenaPivaOpen(false);
        setSomerbsyOpen(false);
        setSveziCedjeniOpen(false);
    }

    const handleRumClick = () => {
        setRumOpen(!rumOpen);
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
        setSosOpen(false);
        setKokteliOpen(false);
        setViskiOpen(false);
        setKonjakOpen(false);
        setLikeriVermutOpen(false);
        setVodkaDzinOpen(false);
        setTekilaOpen(false);
        setCrvenaVinaSrbOpen(false);
        setVinoCasaOpen(false);
        setRozeVinaSrbOpen(false);
        setBelaVinaOpen(false);
        setTopliNapiciOpen(false);
        setSpecijalKafeOpen(false);
        setVodeOpen(false);
        setFlasiranaPivaOpen(false);
        setTocenaPivaOpen(false);
        setSomerbsyOpen(false);
        setSveziCedjeniOpen(false);
    }
    const handleTekilaClick = () => {
        setTekilaOpen(!tekilaOpen);
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
        setSosOpen(false);
        setKokteliOpen(false);
        setViskiOpen(false);
        setKonjakOpen(false);
        setLikeriVermutOpen(false);
        setVodkaDzinOpen(false);
        setRumOpen(false);
        setCrvenaVinaSrbOpen(false);
        setVinoCasaOpen(false);
        setRozeVinaSrbOpen(false);
        setBelaVinaOpen(false);
        setTopliNapiciOpen(false);
        setSpecijalKafeOpen(false);
        setVodeOpen(false);
        setFlasiranaPivaOpen(false);
        setTocenaPivaOpen(false);
        setSomerbsyOpen(false);
        setSveziCedjeniOpen(false);
    }
    const handleCrvenaVinaSrbClick = () => {
        setCrvenaVinaSrbOpen(!crvenaVinaSrbOpen)
        setTekilaOpen(false);
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
        setSosOpen(false);
        setKokteliOpen(false);
        setViskiOpen(false);
        setKonjakOpen(false);
        setLikeriVermutOpen(false);
        setVodkaDzinOpen(false);
        setRumOpen(false);
        setTekilaOpen(false);
        setVinoCasaOpen(false);
        setRozeVinaSrbOpen(false);
        setBelaVinaOpen(false);
        setTopliNapiciOpen(false);
        setSpecijalKafeOpen(false);
        setVodeOpen(false);
        setFlasiranaPivaOpen(false);
        setTocenaPivaOpen(false);
        setSomerbsyOpen(false);
        setSveziCedjeniOpen(false);
    }
    const handleVinoCasaClick = () => {
        setCrvenaVinaSrbOpen(false)
        setTekilaOpen(false);
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
        setSosOpen(false);
        setKokteliOpen(false);
        setViskiOpen(false);
        setKonjakOpen(false);
        setLikeriVermutOpen(false);
        setVodkaDzinOpen(false);
        setRumOpen(false);
        setTekilaOpen(false);
        setVinoCasaOpen(!vinoCasaOpen);
        setRozeVinaSrbOpen(false);
        setBelaVinaOpen(false);
        setTopliNapiciOpen(false);
        setSpecijalKafeOpen(false);
        setVodeOpen(false);
        setFlasiranaPivaOpen(false);
        setTocenaPivaOpen(false);
        setSomerbsyOpen(false);
        setSveziCedjeniOpen(false);
    }
    const handleRozeVinaSrbClick = () => {
        setCrvenaVinaSrbOpen(false)
        setTekilaOpen(false);
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
        setSosOpen(false);
        setKokteliOpen(false);
        setViskiOpen(false);
        setKonjakOpen(false);
        setLikeriVermutOpen(false);
        setVodkaDzinOpen(false);
        setRumOpen(false);
        setTekilaOpen(false);
        setVinoCasaOpen(false);
        setRozeVinaSrbOpen(!rozeVinaSrbOpen);
        setBelaVinaOpen(false);
        setTopliNapiciOpen(false);
        setSpecijalKafeOpen(false);
        setVodeOpen(false);
        setFlasiranaPivaOpen(false);
        setTocenaPivaOpen(false);
        setSomerbsyOpen(false);
        setSveziCedjeniOpen(false);
    }
    const handleBelaVinaClick = () => {
        setCrvenaVinaSrbOpen(false)
        setTekilaOpen(false);
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
        setSosOpen(false);
        setKokteliOpen(false);
        setViskiOpen(false);
        setKonjakOpen(false);
        setLikeriVermutOpen(false);
        setVodkaDzinOpen(false);
        setRumOpen(false);
        setTekilaOpen(false);
        setVinoCasaOpen(false);
        setRozeVinaSrbOpen(false);
        setBelaVinaOpen(!belaVinaOpen);
        setTopliNapiciOpen(false);
        setSpecijalKafeOpen(false);
        setVodeOpen(false);
        setFlasiranaPivaOpen(false);
        setTocenaPivaOpen(false);
        setSomerbsyOpen(false);
        setSveziCedjeniOpen(false);
    }
    const handleTopliNapiciClick = () => {
        setCrvenaVinaSrbOpen(false)
        setTekilaOpen(false);
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
        setSosOpen(false);
        setKokteliOpen(false);
        setViskiOpen(false);
        setKonjakOpen(false);
        setLikeriVermutOpen(false);
        setVodkaDzinOpen(false);
        setRumOpen(false);
        setTekilaOpen(false);
        setVinoCasaOpen(false);
        setRozeVinaSrbOpen(false);
        setBelaVinaOpen(false);
        setTopliNapiciOpen(!topliNapiciOpen);
        setSpecijalKafeOpen(false);
        setVodeOpen(false);
        setFlasiranaPivaOpen(false);
        setTocenaPivaOpen(false);
        setSomerbsyOpen(false);
        setSveziCedjeniOpen(false);
    }
    const handleSpecijalKafeClick = () => {
        setCrvenaVinaSrbOpen(false)
        setTekilaOpen(false);
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
        setSosOpen(false);
        setKokteliOpen(false);
        setViskiOpen(false);
        setKonjakOpen(false);
        setLikeriVermutOpen(false);
        setVodkaDzinOpen(false);
        setRumOpen(false);
        setTekilaOpen(false);
        setVinoCasaOpen(false);
        setRozeVinaSrbOpen(false);
        setBelaVinaOpen(false);
        setTopliNapiciOpen(false);
        setSpecijalKafeOpen(!specijalKafeOpen);
        setVodeOpen(false);
        setFlasiranaPivaOpen(false);
        setTocenaPivaOpen(false);
        setSomerbsyOpen(false);
        setSveziCedjeniOpen(false);

    }
    const handleVodeClick = () => {
        setCrvenaVinaSrbOpen(false)
        setTekilaOpen(false);
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
        setSosOpen(false);
        setKokteliOpen(false);
        setViskiOpen(false);
        setKonjakOpen(false);
        setLikeriVermutOpen(false);
        setVodkaDzinOpen(false);
        setRumOpen(false);
        setTekilaOpen(false);
        setVinoCasaOpen(false);
        setRozeVinaSrbOpen(false);
        setBelaVinaOpen(false);
        setTopliNapiciOpen(false);
        setSpecijalKafeOpen(false);
        setVodeOpen(!vodeOpen);
        setFlasiranaPivaOpen(false);
        setTocenaPivaOpen(false);
        setSomerbsyOpen(false);
        setSveziCedjeniOpen(false);

    }
    const handleFlasiranaPivaClick = () => {
        setCrvenaVinaSrbOpen(false)
        setTekilaOpen(false);
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
        setSosOpen(false);
        setKokteliOpen(false);
        setViskiOpen(false);
        setKonjakOpen(false);
        setLikeriVermutOpen(false);
        setVodkaDzinOpen(false);
        setRumOpen(false);
        setTekilaOpen(false);
        setVinoCasaOpen(false);
        setRozeVinaSrbOpen(false);
        setBelaVinaOpen(false);
        setTopliNapiciOpen(false);
        setSpecijalKafeOpen(false);
        setVodeOpen(false);
        setFlasiranaPivaOpen(!flasiranaPivaOpen);
        setTocenaPivaOpen(false);
        setSomerbsyOpen(false);
        setSveziCedjeniOpen(false);
    }
    const handleTocenaPivaClick = () => {
        setCrvenaVinaSrbOpen(false)
        setTekilaOpen(false);
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
        setSosOpen(false);
        setKokteliOpen(false);
        setViskiOpen(false);
        setKonjakOpen(false);
        setLikeriVermutOpen(false);
        setVodkaDzinOpen(false);
        setRumOpen(false);
        setTekilaOpen(false);
        setVinoCasaOpen(false);
        setRozeVinaSrbOpen(false);
        setBelaVinaOpen(false);
        setTopliNapiciOpen(false);
        setSpecijalKafeOpen(false);
        setVodeOpen(false);
        setFlasiranaPivaOpen(false);
        setTocenaPivaOpen(!tocenaPivaOpen);
        setSomerbsyOpen(false);
        setSveziCedjeniOpen(false);
    }
    const handleSomerbsyClick = () => {
        setCrvenaVinaSrbOpen(false)
        setTekilaOpen(false);
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
        setSosOpen(false);
        setKokteliOpen(false);
        setViskiOpen(false);
        setKonjakOpen(false);
        setLikeriVermutOpen(false);
        setVodkaDzinOpen(false);
        setRumOpen(false);
        setTekilaOpen(false);
        setVinoCasaOpen(false);
        setRozeVinaSrbOpen(false);
        setBelaVinaOpen(false);
        setTopliNapiciOpen(false);
        setSpecijalKafeOpen(false);
        setVodeOpen(false);
        setFlasiranaPivaOpen(false);
        setTocenaPivaOpen(false);
        setSomerbsyOpen(!somerbsyOpen);
        setSveziCedjeniOpen(false);
    }
    const handleSveziCedjeniClick = () => {
        setCrvenaVinaSrbOpen(false)
        setTekilaOpen(false);
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
        setSosOpen(false);
        setKokteliOpen(false);
        setViskiOpen(false);
        setKonjakOpen(false);
        setLikeriVermutOpen(false);
        setVodkaDzinOpen(false);
        setRumOpen(false);
        setTekilaOpen(false);
        setVinoCasaOpen(false);
        setRozeVinaSrbOpen(false);
        setBelaVinaOpen(false);
        setTopliNapiciOpen(false);
        setSpecijalKafeOpen(false);
        setVodeOpen(false);
        setFlasiranaPivaOpen(false);
        setTocenaPivaOpen(false);
        setSomerbsyOpen(false);
        setSveziCedjeniOpen(!sveziCedjeniOpen);
    }




    return (
        <div className='flex items-center flex-col'>
            <hr className='border w-[80%] text-white m-5' />
            <div className='text-white text-xl flex flex-wrap items-center justify-center gap-5'>
                <button className={dorucakOpen ? 'border border-solid border-white rounded-xl p-2' : null} onClick={handleDorucakClick}>Dorucak</button>
                <button className={svezeSalateOpen ? 'border border-solid border-white rounded-xl p-2' : null} onClick={handleSvezeSalateClick}>Sveze Salate</button>
                <button className={glavnoJeloOpen ? 'border border-solid border-white rounded-xl p-2' : null} onClick={handleGlavnoJeloClick}>Glavna jela</button>
                <button className={desertOpen ? 'border border-solid border-white rounded-xl p-2' : null} onClick={handleDesertClick}>Desert</button>
                <button className={steakOpen ? 'border border-solid border-white rounded-xl p-2' : null} onClick={handleSteakClick}>Steak</button>
                <button className={predjelaOpen ? 'border border-solid border-white rounded-xl p-2' : null} onClick={handlePredjelaClick}>Predjela</button>
                <button className={corbeOpen ? 'border border-solid border-white rounded-xl p-2' : null} onClick={handleCorbeClick}>Čorbe</button>
                <button className={obrokSalateOpen ? 'border border-solid border-white rounded-xl p-2' : null} onClick={handleObrokSalateClick}>Obrok Salate</button>
                <button className={pasteOpen ? 'border border-solid border-white rounded-xl p-2' : null} onClick={handlePasteClick}>Paste i Rize</button>
                <button className={piceOpen ? 'border border-solid border-white rounded-xl p-2' : null} onClick={handlePiceClick}>Pice</button>
                <button className={ribeOpen ? 'border border-solid border-white rounded-xl p-2' : null} onClick={handleRibeClick}>Ribe</button>
                <button className={prilogOpen ? 'border border-solid border-white rounded-xl p-2' : null} onClick={handlePrilogClick}>Prilog</button>
                <button className={sosOpen ? 'border border-solid border-white rounded-xl p-2' : null} onClick={handleSosClick}>Sosevi</button>
                <button className={kokteliOpen ? 'border border-solid border-white rounded-xl p-2' : null} onClick={handleKokteliClick}>Kokteli</button>
                <button className={viskiOpen ? 'border border-solid border-white rounded-xl p-2' : null} onClick={handleViskiClick}>Viski</button>
                <button className={konjakOpen ? 'border border-solid border-white rounded-xl p-2' : null} onClick={handleKonjakClick}>Konjak</button>
                <button className={likeriVermutOpen ? 'border border-solid border-white rounded-xl p-2' : null} onClick={handleLikeriVermutClick}>Likeri Vermut</button>
                <button className={vodkaDzinOpen ? 'border border-solid border-white rounded-xl p-2' : null} onClick={handleVodkaDzinClick}>Vodka i Džin</button>
                <button className={rumOpen ? 'border border-solid border-white rounded-xl p-2' : null} onClick={handleRumClick}>Rum</button>
                <button className={tekilaOpen ? 'border border-solid border-white rounded-xl p-2' : null} onClick={handleTekilaClick}>Tekila</button>
                <button className={crvenaVinaSrbOpen ? 'border border-solid border-white rounded-xl p-2' : null} onClick={handleCrvenaVinaSrbClick}>CRVENA VINA SRBIJE</button>
                <button className={vinoCasaOpen ? 'border border-solid border-white rounded-xl p-2' : null} onClick={handleVinoCasaClick}>VINO NA ČAŠU</button>
                <button className={rozeVinaSrbOpen ? 'border border-solid border-white rounded-xl p-2' : null} onClick={handleRozeVinaSrbClick}>ROZE VINA SRBIJE</button>
                <button className={belaVinaOpen ? 'border border-solid border-white rounded-xl p-2' : null} onClick={handleBelaVinaClick}>BELA VINA</button>
                <button className={topliNapiciOpen ? 'border border-solid border-white rounded-xl p-2' : null} onClick={handleTopliNapiciClick}>TOPLI NAPICI</button>
                <button className={specijalKafeOpen ? 'border border-solid border-white rounded-xl p-2' : null} onClick={handleSpecijalKafeClick}>SPECIJAL KAFE</button>
                <button className={vodeOpen ? 'border border-solid border-white rounded-xl p-2' : null} onClick={handleVodeClick}>VODE</button>
                <button className={flasiranaPivaOpen ? 'border border-solid border-white rounded-xl p-2' : null} onClick={handleFlasiranaPivaClick}>FLASIRANA PIVA</button>
                <button className={tocenaPivaOpen ? 'border border-solid border-white rounded-xl p-2' : null} onClick={handleTocenaPivaClick}>TOCENA PIVA</button>
                <button className={somerbsyOpen ? 'border border-solid border-white rounded-xl p-2' : null} onClick={handleSomerbsyClick}>SOMERBSY</button>
                <button className={sveziCedjeniOpen ? 'border border-solid border-white rounded-xl p-2' : null} onClick={handleSveziCedjeniClick}>SVEZE CEDJENENI SOKOVI</button>

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
            {kokteliOpen && <Kokteli />}
            {viskiOpen && <Viski />}
            {konjakOpen && <Konjak />}
            {likeriVermutOpen && <LikeriVermut />}
            {vodkaDzinOpen && <VodkaDzin />}
            {rumOpen && <Rum />}
            {tekilaOpen && <Tekila />}
            {crvenaVinaSrbOpen && <CrvenaVinaSrb />}
            {vinoCasaOpen && <VinoCasa />}
            {rozeVinaSrbOpen && <RozeVinaSrb />}
            {belaVinaOpen && <BelaVina />}
            {topliNapiciOpen && <TopliNapici />}
            {specijalKafeOpen && <SpecijalKafe />}
            {vodeOpen && <Vode />}
            {flasiranaPivaOpen && <FlasiranaPiva />}
            {tocenaPivaOpen && <TocenaPiva />}
            {somerbsyOpen && <Somerbsy />}
            {sveziCedjeniOpen && <SveziCedjeni />}


        </div>
    );
}

export default Meni;
