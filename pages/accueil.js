// pages/accueil.js

import React from "react";
import styles from '../styles/accueil.module.css'


export default function accueil(){
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Accueil</h2>
            <p className={styles.description}>
            Bienvenue sur notre site de cartes magiques !
            </p>

            <p>
            Magic : L'Assemblée est un jeu de cartes à jouer et à collectionner inventé par Richard Garfield en 1993.
            </p>
            <p>
            Il est souvent cité comme le jeu référence dans le monde des jeux de cartes à jouer.
            </p>
            <p>
            <p>Ce jeu se distingue des jeux de cartes traditionnels par le fait qu'il existe plus de 20 000 cartes différentes avec lesquelles chaque joueur doit construire son propre paquet de cartes, appelé deck1. Régulièrement, de nouvelles éditions, avec de nouvelles règles voient le jour.</p>
            <p> Le jeu reste donc le même, mais est en perpétuelle évolution.</p>
            <p> Chaque carte possède des capacités diverses (actions possibles, puissance, contraintes).</p>
            <p>Les cartes sont classées parmi quatre types de raretés (rares mythiques, rares, peu communes ou unco pour «uncommon», communes).</p>
            <p>Les cartes sont vendues, par thématiques (decks pré-construits), par pochettes de quinze cartes semi-aléatoires (boosters), ou dans des éditions spéciales (Duel Decks, Event Decks…)2.</p>
            <p>Le jeu voit deux joueurs ou plus s'affronter, chacun avec un deck de 60 cartes minimum (40 cartes dans certaines variantes regroupées sous le nom de « limité »).</p>
            <p>Certaines variantes permettent d'associer davantage de joueurs : « l'empereur » qui se joue à six ; le « troll à deux têtes » qui permet de jouer à quatre, deux contre deux.</p>
            </p>
        </div>
    )
}