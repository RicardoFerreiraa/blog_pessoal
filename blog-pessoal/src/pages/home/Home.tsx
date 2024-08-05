import React from 'react'
import './Home.css'
import homeLogo from '../../assets/house-keys-bask-warm-sunset-glow-balcony-overlooking-palmlined-vista.jpg'

function Home(){
    return (
        <>
            <h1 className="titulo">Home</h1>
            <img src={homeLogo} alt="Imagem Tela Inicial" className="img"/>
        </>
    );
}

export default Home;