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
import Energija from './Energija';
import GaziraneVode from './GaziraneVode';
import GaziraniSokovi from './GaziraniSokovi';
import NegaziraniSokovi from './NegaziraniSokovi';
import { FaInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { IoWifiSharp } from "react-icons/io5";
import Rakije from './Rakije';
import Burger from './Burger';
import { motion } from 'framer-motion'

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
    const [energijaOpen, setEnergijaOpen] = useState(false);
    const [gaziraneVodeOpen, setGaziraneVodeOpen] = useState(false);
    const [gaziraniSokoviOpen, setGaziraniSokoviOpen] = useState(false);
    const [negaziraniSokoviOpen, setNegaziraniSokoviOpen] = useState(false);
    const [rakijeOpen, setRakijeOpen] = useState(false);
    const [burgerOpen, setBurgerOpen] = useState(false);
    const [meni1, setMeni1] = useState(false);
    const [meni2, setMeni2] = useState(false)
    const [meni3, setMeni3] = useState(false);





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
        setEnergijaOpen(false);
        setGaziraneVodeOpen(false);
        setGaziraniSokoviOpen(false);
        setNegaziraniSokoviOpen(false);
        setRakijeOpen(false);
        setBurgerOpen(false);


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
        setEnergijaOpen(false);
        setGaziraneVodeOpen(false);
        setGaziraniSokoviOpen(false);
        setNegaziraniSokoviOpen(false);
        setRakijeOpen(false);
        setBurgerOpen(false);


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
        setEnergijaOpen(false);
        setGaziraneVodeOpen(false);
        setGaziraniSokoviOpen(false);
        setNegaziraniSokoviOpen(false);
        setRakijeOpen(false);
        setBurgerOpen(false);

    };

    const handleDesertClick = () => {
        setDesertOpen(!desertOpen);
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
        setEnergijaOpen(false);
        setGaziraneVodeOpen(false);
        setGaziraniSokoviOpen(false);
        setNegaziraniSokoviOpen(false);
        setRakijeOpen(false);
        setBurgerOpen(false);

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
        setEnergijaOpen(false);
        setGaziraneVodeOpen(false);
        setGaziraniSokoviOpen(false);
        setNegaziraniSokoviOpen(false);
        setRakijeOpen(false);
        setBurgerOpen(false);
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
        setEnergijaOpen(false);
        setGaziraneVodeOpen(false);
        setGaziraniSokoviOpen(false);
        setNegaziraniSokoviOpen(false);
        setRakijeOpen(false);
        setBurgerOpen(false);
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
        setEnergijaOpen(false);
        setGaziraneVodeOpen(false);
        setGaziraniSokoviOpen(false);
        setNegaziraniSokoviOpen(false);
        setRakijeOpen(false);
        setBurgerOpen(false);

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
        setEnergijaOpen(false);
        setGaziraneVodeOpen(false);
        setGaziraniSokoviOpen(false);
        setNegaziraniSokoviOpen(false);
        setRakijeOpen(false);
        setBurgerOpen(false);
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
        setEnergijaOpen(false);
        setGaziraneVodeOpen(false);
        setGaziraniSokoviOpen(false);
        setNegaziraniSokoviOpen(false);
        setRakijeOpen(false);
        setBurgerOpen(false);
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
        setEnergijaOpen(false);
        setGaziraneVodeOpen(false);
        setGaziraniSokoviOpen(false);
        setNegaziraniSokoviOpen(false);
        setRakijeOpen(false);
        setBurgerOpen(false);
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
        setEnergijaOpen(false);
        setGaziraneVodeOpen(false);
        setGaziraniSokoviOpen(false);
        setNegaziraniSokoviOpen(false);
        setRakijeOpen(false);
        setBurgerOpen(false);
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
        setEnergijaOpen(false);
        setGaziraneVodeOpen(false);
        setGaziraniSokoviOpen(false);
        setNegaziraniSokoviOpen(false);
        setRakijeOpen(false);
        setBurgerOpen(false);
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
        setEnergijaOpen(false);
        setGaziraneVodeOpen(false);
        setGaziraniSokoviOpen(false);
        setNegaziraniSokoviOpen(false);
        setRakijeOpen(false);
        setBurgerOpen(false);
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
        setEnergijaOpen(false);
        setGaziraneVodeOpen(false);
        setGaziraniSokoviOpen(false);
        setNegaziraniSokoviOpen(false);
        setRakijeOpen(false);
        setBurgerOpen(false);
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
        setEnergijaOpen(false);
        setGaziraneVodeOpen(false);
        setGaziraniSokoviOpen(false);
        setNegaziraniSokoviOpen(false);
        setRakijeOpen(false);
        setBurgerOpen(false);
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
        setEnergijaOpen(false);
        setGaziraneVodeOpen(false);
        setGaziraniSokoviOpen(false);
        setNegaziraniSokoviOpen(false);
        setRakijeOpen(false);
        setBurgerOpen(false);
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
        setEnergijaOpen(false);
        setGaziraneVodeOpen(false);
        setGaziraniSokoviOpen(false);
        setNegaziraniSokoviOpen(false);
        setRakijeOpen(false);
        setBurgerOpen(false);
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
        setEnergijaOpen(false);
        setGaziraneVodeOpen(false);
        setGaziraniSokoviOpen(false);
        setNegaziraniSokoviOpen(false);
        setRakijeOpen(false);
        setBurgerOpen(false);
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
        setEnergijaOpen(false);
        setGaziraneVodeOpen(false);
        setGaziraniSokoviOpen(false);
        setNegaziraniSokoviOpen(false);
        setRakijeOpen(false);
        setBurgerOpen(false);
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
        setEnergijaOpen(false);
        setGaziraneVodeOpen(false);
        setGaziraniSokoviOpen(false);
        setNegaziraniSokoviOpen(false);
        setRakijeOpen(false);
        setBurgerOpen(false);
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
        setEnergijaOpen(false);
        setGaziraneVodeOpen(false);
        setGaziraniSokoviOpen(false);
        setNegaziraniSokoviOpen(false);
        setRakijeOpen(false);
        setBurgerOpen(false);
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
        setEnergijaOpen(false);
        setGaziraneVodeOpen(false);
        setGaziraniSokoviOpen(false);
        setNegaziraniSokoviOpen(false);
        setRakijeOpen(false);
        setBurgerOpen(false);
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
        setEnergijaOpen(false);
        setGaziraneVodeOpen(false);
        setGaziraniSokoviOpen(false);
        setNegaziraniSokoviOpen(false);
        setRakijeOpen(false);
        setBurgerOpen(false);
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
        setEnergijaOpen(false);
        setGaziraneVodeOpen(false);
        setGaziraniSokoviOpen(false);
        setNegaziraniSokoviOpen(false);
        setRakijeOpen(false);
        setBurgerOpen(false);
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
        setEnergijaOpen(false);
        setGaziraneVodeOpen(false);
        setGaziraniSokoviOpen(false);
        setNegaziraniSokoviOpen(false);
        setRakijeOpen(false);
        setBurgerOpen(false);
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
        setEnergijaOpen(false);
        setGaziraneVodeOpen(false);
        setGaziraniSokoviOpen(false);
        setNegaziraniSokoviOpen(false);
        setRakijeOpen(false);
        setBurgerOpen(false);

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
        setEnergijaOpen(false);
        setGaziraneVodeOpen(false);
        setGaziraniSokoviOpen(false);
        setNegaziraniSokoviOpen(false);
        setRakijeOpen(false);
        setBurgerOpen(false);

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
        setEnergijaOpen(false);
        setGaziraneVodeOpen(false);
        setGaziraniSokoviOpen(false);
        setNegaziraniSokoviOpen(false);
        setRakijeOpen(false);
        setBurgerOpen(false);
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
        setEnergijaOpen(false);
        setGaziraneVodeOpen(false);
        setGaziraniSokoviOpen(false);
        setNegaziraniSokoviOpen(false);
        setRakijeOpen(false);
        setBurgerOpen(false);
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
        setEnergijaOpen(false);
        setGaziraneVodeOpen(false);
        setGaziraniSokoviOpen(false);
        setNegaziraniSokoviOpen(false);
        setRakijeOpen(false);
        setBurgerOpen(false);
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
        setEnergijaOpen(false);
        setGaziraneVodeOpen(false);
        setGaziraniSokoviOpen(false);
        setNegaziraniSokoviOpen(false);
        setRakijeOpen(false);
        setBurgerOpen(false);
    }
    const handleEnergijaClick = () => {
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
        setSveziCedjeniOpen(false);
        setEnergijaOpen(!energijaOpen);
        setGaziraneVodeOpen(false);
        setGaziraniSokoviOpen(false);
        setNegaziraniSokoviOpen(false);
        setRakijeOpen(false);
        setBurgerOpen(false);
    }
    const handleGaziraneVodeClick = () => {
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
        setSveziCedjeniOpen(false);
        setEnergijaOpen(false);
        setGaziraneVodeOpen(!gaziraneVodeOpen);
        setGaziraniSokoviOpen(false);
        setNegaziraniSokoviOpen(false);
        setRakijeOpen(false);
        setBurgerOpen(false);
    }
    const handleGaziraniSokoviClick = () => {
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
        setSveziCedjeniOpen(false);
        setEnergijaOpen(false);
        setGaziraneVodeOpen(false);
        setGaziraniSokoviOpen(!gaziraniSokoviOpen);
        setNegaziraniSokoviOpen(false);
        setRakijeOpen(false);
        setBurgerOpen(false);

    }
    const handleNegaziraniSokoviClick = () => {
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
        setSveziCedjeniOpen(false);
        setEnergijaOpen(false);
        setGaziraneVodeOpen(false);
        setGaziraniSokoviOpen(false);
        setNegaziraniSokoviOpen(!negaziraniSokoviOpen);
        setRakijeOpen(false);
        setBurgerOpen(false);
    }
    const handleRakijeClick = () => {
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
        setSveziCedjeniOpen(false);
        setEnergijaOpen(false);
        setGaziraneVodeOpen(false);
        setGaziraniSokoviOpen(false);
        setNegaziraniSokoviOpen(false);
        setRakijeOpen(!rakijeOpen);
        setBurgerOpen(false);
    }
    const handleBurgerClick = () => {
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
        setSveziCedjeniOpen(false);
        setEnergijaOpen(false);
        setGaziraneVodeOpen(false);
        setGaziraniSokoviOpen(false);
        setNegaziraniSokoviOpen(false);
        setRakijeOpen(false);
        setBurgerOpen(!burgerOpen);
    }
    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            x: 100

        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.1,
                duration: 3
            }
        }
    }


    const handleMeni1 = () => {
        setMeni1(!meni1)
        setMeni2(false)
        setMeni3(false)
    }
    const handleMeni2 = () => {
        setMeni1(false)
        setMeni2(!meni2)
        setMeni3(false)
    }
    const handleMeni3 = () => {
        setMeni1(false)
        setMeni2(false)
        setMeni3(!meni3)
    }


    return (
        <motion.div
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{
                once: true,
            }}>
            <div className='flex flex-col'>

                {/* Glavni Kontenjer Menija */}
                {/* Jelovnik */}
                <div className='text-white flex flex-col items-center p-5' >
                    <h1 onClick={handleMeni1} className='text-white border-solid border-gray-dark hover:text-l hover:scale-125 hover:transition-all font-link border-2 bg-mis m-2 p-4 rounded-xl cursor-pointer w-[129px]'>JELOVNIK</h1>
                    <div className={meni1 ? 'flex flex-col justify-center visible cursor-pointer items-center m-2 p-2 gap-1' : 'flex flex-col justify-center hidden items-center cursor-pointer'}>
                        <button className={dorucakOpen ? 'border border-solid border-white rounded-xl p-2 visible' : 'hover:text-l hover:scale-125 hover:transition-all hover:text-gray'} onClick={handleDorucakClick}>DORUČAK</button>
                        {dorucakOpen && <Dorucak />}
                        <button className={predjelaOpen ? 'border border-solid border-white rounded-xl p-2' : 'hover:text-l hover:scale-125 hover:transition-all hover:text-gray'} onClick={handlePredjelaClick}>PREDJELA</button>
                        {predjelaOpen && <Predjela />}
                        <button className={corbeOpen ? 'border border-solid border-white rounded-xl p-2' : 'hover:text-l hover:scale-125 hover:transition-all hover:text-gray'} onClick={handleCorbeClick}>ČORBE</button>
                        {corbeOpen && <Corbe />}
                        <button className={glavnoJeloOpen ? 'border border-solid border-white rounded-xl p-2' : 'hover:text-l hover:scale-125 hover:transition-all hover:text-gray'} onClick={handleGlavnoJeloClick}>GLAVNA JELA</button>
                        {glavnoJeloOpen && <GlavnoJelo />}
                        <button className={steakOpen ? 'border border-solid border-white rounded-xl p-2' : 'hover:text-l hover:scale-125 hover:transition-all hover:text-gray'} onClick={handleSteakClick}>STEAK SELECTION</button>
                        {steakOpen && <Steak />}
                        <button className={burgerOpen ? 'border border-solid border-white rounded-xl p-2' : 'hover:text-l hover:scale-125 hover:transition-all hover:text-gray'} onClick={handleBurgerClick}>BURGERI</button>
                        {burgerOpen && <Burger />}
                        <button className={obrokSalateOpen ? 'border border-solid border-white rounded-xl p-2' : 'hover:text-l hover:scale-125 hover:transition-all hover:text-gray'} onClick={handleObrokSalateClick}>OBROK SALATE</button>
                        {obrokSalateOpen && <ObrokSalate />}
                        <button className={pasteOpen ? 'border border-solid border-white rounded-xl p-2' : 'hover:text-l hover:scale-125 hover:transition-all hover:text-gray'} onClick={handlePasteClick}>PASTE I RIŽOTA</button>
                        {pasteOpen && <Paste />}
                        <button className={piceOpen ? 'border border-solid border-white rounded-xl p-2' : 'hover:text-l hover:scale-125 hover:transition-all hover:text-gray'} onClick={handlePiceClick}>PIZZE</button>
                        {piceOpen && <Pice />}
                        <button className={ribeOpen ? 'border border-solid border-white rounded-xl p-2' : 'hover:text-l hover:scale-125 hover:transition-all hover:text-gray'} onClick={handleRibeClick}>RIBA</button>
                        {ribeOpen && <Ribe />}
                        <button className={svezeSalateOpen ? 'border border-solid border-white rounded-xl p-2' : 'hover:text-l hover:scale-125 hover:transition-all hover:text-gray'} onClick={handleSvezeSalateClick}>SVEŽE SALATE</button>
                        {svezeSalateOpen && <SvezeSalate />}
                        <button className={prilogOpen ? 'border border-solid border-white rounded-xl p-2' : 'hover:text-l hover:scale-125 hover:transition-all hover:text-gray'} onClick={handlePrilogClick}>PRILOZI</button>
                        {prilogOpen && <Prilog />}
                        <button className={sosOpen ? 'border border-solid border-white rounded-xl p-2' : 'hover:text-l hover:scale-125 hover:transition-all hover:text-gray'} onClick={handleSosClick}>SOSEVI</button>
                        {sosOpen && <Sos />}
                        <button className={desertOpen ? 'border border-solid border-white rounded-xl p-2' : 'hover:text-l hover:scale-125 hover:transition-all hover:text-gray'} onClick={handleDesertClick}>DESERT</button>
                        {desertOpen && <Desert />}







                    </div>
                    {/* karta pica */}
                    <h1 onClick={handleMeni2} className='text-white border-solid border-gray-dark hover:text-l hover:scale-125 hover:transition-all font-link border-2 bg-mis m-2 p-4 rounded-xl cursor-pointer'>KARTA PIĆA</h1>
                    <div className={meni2 ? 'flex flex-col justify-center visible cursor-pointer items-center m-2 p-2 gap-1 ' : 'flex flex-col justify-center items-center hidden cursor-pointer'}>

                        <button className={topliNapiciOpen ? 'border border-solid border-white rounded-xl p-2' : 'hover:text-l hover:scale-125 hover:transition-all hover:text-gray'} onClick={handleTopliNapiciClick}>TOPLI NAPICI</button>
                        {topliNapiciOpen && <TopliNapici />}
                        <button className={specijalKafeOpen ? 'border border-solid border-white rounded-xl p-2' : 'hover:text-l hover:scale-125 hover:transition-all hover:text-gray'} onClick={handleSpecijalKafeClick}>SPECIJALITETI OD KAFE</button>
                        {specijalKafeOpen && <SpecijalKafe />}
                        <button className={vodeOpen ? 'border border-solid border-white rounded-xl p-2' : 'hover:text-l hover:scale-125 hover:transition-all hover:text-gray'} onClick={handleVodeClick}>NEGAZIRANE VODE</button>
                        {vodeOpen && <Vode />}
                        <button className={gaziraneVodeOpen ? 'border border-solid border-white rounded-xl p-2' : 'hover:text-l hover:scale-125 hover:transition-all hover:text-gray'} onClick={handleGaziraneVodeClick}>GAZIRANE VODE</button>
                        {gaziraneVodeOpen && <GaziraneVode />}
                        <button className={gaziraniSokoviOpen ? 'border border-solid border-white rounded-xl p-2' : 'hover:text-l hover:scale-125 hover:transition-all hover:text-gray'} onClick={handleGaziraniSokoviClick}>GAZIRANI SOKOVI</button>
                        {gaziraniSokoviOpen && <GaziraniSokovi />}
                        <button className={negaziraniSokoviOpen ? 'border border-solid border-white rounded-xl p-2' : 'hover:text-l hover:scale-125 hover:transition-all hover:text-gray'} onClick={handleNegaziraniSokoviClick}>NEGAZIRANI SOKOVI</button>
                        {negaziraniSokoviOpen && <NegaziraniSokovi />}
                        <button className={sveziCedjeniOpen ? 'border border-solid border-white rounded-xl p-2' : 'hover:text-l hover:scale-125 hover:transition-all hover:text-gray'} onClick={handleSveziCedjeniClick}>SVEŽE CEĐENI SOKOVI</button>
                        {sveziCedjeniOpen && <SveziCedjeni />}
                        <button className={energijaOpen ? 'border border-solid border-white rounded-xl p-2' : 'hover:text-l hover:scale-125 hover:transition-all hover:text-gray'} onClick={handleEnergijaClick}>ENERGETSKI NAPICI</button>
                        {energijaOpen && <Energija />}
                        <button className={flasiranaPivaOpen ? 'border border-solid border-white rounded-xl p-2' : 'hover:text-l hover:scale-125 hover:transition-all hover:text-gray'} onClick={handleFlasiranaPivaClick}>FLAŠIRANA PIVA</button>
                        {flasiranaPivaOpen && <FlasiranaPiva />}
                        <button className={tocenaPivaOpen ? 'border border-solid border-white rounded-xl p-2' : 'hover:text-l hover:scale-125 hover:transition-all hover:text-gray'} onClick={handleTocenaPivaClick}>TOČENA PIVA</button>
                        {tocenaPivaOpen && <TocenaPiva />}
                        <button className={somerbsyOpen ? 'border border-solid border-white rounded-xl p-2' : 'hover:text-l hover:scale-125 hover:transition-all hover:text-gray'} onClick={handleSomerbsyClick}>SOMERBSY</button>
                        {somerbsyOpen && <Somerbsy />}
                        <button className={rakijeOpen ? 'border border-solid border-white rounded-xl p-2' : 'hover:text-l hover:scale-125 hover:transition-all hover:text-gray'} onClick={handleRakijeClick}>RAKIJE SRBIJE</button>
                        {rakijeOpen && <Rakije />}
                        <button className={likeriVermutOpen ? 'border border-solid border-white rounded-xl p-2' : 'hover:text-l hover:scale-125 hover:transition-all hover:text-gray'} onClick={handleLikeriVermutClick}>LIKERI I VERMUTI</button>
                        {likeriVermutOpen && <LikeriVermut />}
                        <button className={vodkaDzinOpen ? 'border border-solid border-white rounded-xl p-2' : 'hover:text-l hover:scale-125 hover:transition-all hover:text-gray'} onClick={handleVodkaDzinClick}>VODKA I DŽIN</button>
                        {vodkaDzinOpen && <VodkaDzin />}
                        <button className={rumOpen ? 'border border-solid border-white rounded-xl p-2' : 'hover:text-l hover:scale-125 hover:transition-all hover:text-gray'} onClick={handleRumClick}>RUM</button>
                        {rumOpen && <Rum />}
                        <button className={tekilaOpen ? 'border border-solid border-white rounded-xl p-2' : 'hover:text-l hover:scale-125 hover:transition-all hover:text-gray'} onClick={handleTekilaClick}>TEKILA</button>
                        {tekilaOpen && <Tekila />}
                        <button className={viskiOpen ? 'border border-solid border-white rounded-xl p-2' : 'hover:text-l hover:scale-125 hover:transition-all hover:text-gray'} onClick={handleViskiClick}>VISKI</button>
                        {viskiOpen && <Viski />}
                        <button className={konjakOpen ? 'border border-solid border-white rounded-xl p-2' : 'hover:text-l hover:scale-125 hover:transition-all hover:text-gray'} onClick={handleKonjakClick}>KONJAK</button>
                        {konjakOpen && <Konjak />}
                        <button className={kokteliOpen ? 'border border-solid border-white rounded-xl p-2' : 'hover:text-gray'} onClick={handleKokteliClick}>KOKTELI</button>
                        {kokteliOpen && <Kokteli />}
                    </div>
                    {/* desert
                 */}
                    <h1 onClick={handleMeni3} className='text-white border-solid border-gray-dark hover:text-l hover:scale-125 hover:transition-all font-link border-2 bg-mis m-2 p-4 rounded-xl cursor-pointer'>KARTA VINA</h1>
                    <div className={meni3 ? 'flex flex-col justify-center visible cursor-pointer items-center m-2 p-2 gap-1' : 'flex flex-col items-center justify-center hidden cursor-pointer'}>
                        <button className={belaVinaOpen ? 'border border-solid border-white rounded-xl p-2' : 'hover:text-l hover:scale-125 hover:transition-all hover:text-gray'} onClick={handleBelaVinaClick}>BELA VINA</button>
                        {belaVinaOpen && <BelaVina />}
                        <button className={crvenaVinaSrbOpen ? 'border border-solid border-white rounded-xl p-2' : 'hover:text-l hover:scale-125 hover:transition-all hover:text-gray'} onClick={handleCrvenaVinaSrbClick}>CRVENA VINA SRBIJE</button>
                        {crvenaVinaSrbOpen && <CrvenaVinaSrb />}
                        <button className={rozeVinaSrbOpen ? 'border border-solid border-white rounded-xl p-2' : 'hover:text-l hover:scale-125 hover:transition-all hover:text-gray'} onClick={handleRozeVinaSrbClick}>ROZE VINA SRBIJE</button>
                        {rozeVinaSrbOpen && <RozeVinaSrb />}
                        <button className={vinoCasaOpen ? 'border border-solid border-white rounded-xl p-2' : 'hover:text-l hover:scale-125 hover:transition-all hover:text-gray'} onClick={handleVinoCasaClick}>VINO NA ČAŠU</button>
                        {vinoCasaOpen && <VinoCasa />}
                        <img className='w-[390px] h-[350px] rounded-3xl' src="/39.jpg" alt="" />

                    </div>
                </div >

            </div >
        </motion.div>
    );
}

export default Meni;
