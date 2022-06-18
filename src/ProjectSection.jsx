import React from "react";
import {Typography, Grid, Card, CardContent, CardMedia, CardActions, Button} from '@mui/material';

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const cards = [
  {
    title: "DS Coin",
    description: "This project implements a cryptocurrency called DSCoin develped as a part of COL106- Data Structures Algorithm course under Prof. Amitabha Bagchi and Prof. Venkata Koppula.",
    // image: "https://w0.peakpx.com/wallpaper/955/918/HD-wallpaper-ethereum-x-dragon-ball-ethereum-crypto-currency-anime-dragon-ball.jpg",
    image : "https://raw.githubusercontent.com/cat-milk/Anime-Girls-Holding-Programming-Books/master/C%2B%2B/Frederica_Rosenfort_CPP.jpg",
    link: "https://github.com/yatharth811/DSCoin"
  },
  {
    title: "FAID",
    description: "Developed a web application for easy visualisations of complex fair division algorithms like Greedy Cycle Elimination under Prof. Rohit Vaish at IIT Delhi. ",
    image: "https://raw.githubusercontent.com/cat-milk/Anime-Girls-Holding-Programming-Books/master/Javascript/Monogatari_Shinobu_Speaking_Javascript.png",
    link: "https://github.com/yatharth811/FAID"
  },
  {
    title: "IITD Maze Game",
    description: "A muliplayer maze game based on the IIT Delhi map, built using SDL2 library and TCP Sockets in C++ as a part of Design Practices course under Prof. Riju Rekha Sen.",
    image: "https://raw.githubusercontent.com/cat-milk/Anime-Girls-Holding-Programming-Books/master/C%2B%2B/Sakura_Nene_CPP.jpg",
    link: "https://github.com/yatharth811/Maze-Game"
  },
  {
    title: "WHILE Language",
    description: "Built a lexer, parser and interpreter using SML,ML-Lex and ML-Yacc for a toy language named While.This language supports all basic functionalities. This was made as the course project for COL226-Programming Languages course, under Prof. S. Arun Kumar",
    image: "https://raw.githubusercontent.com/cat-milk/Anime-Girls-Holding-Programming-Books/master/Haskell/Kujou_Karen_Learns_Haskell.png",
    link: "https://github.com/yatharth811/TypeChecker-Evaluator"
  },
  {
    title: "BitLord Bot",
    description: "Bitlord is a discord bot centered around compiling and executing the code in the discord itself. This bot is great for prototyping ideas, or testing concepts on-the-fly with very little effort. It supports more than 21 programming languages.",
    image: "https://raw.githubusercontent.com/cat-milk/Anime-Girls-Holding-Programming-Books/master/Python/Moka_Hoto_Holding_Python_For_Beginners.png",
    link: "https://github.com/yatharth811/CampusHack2021"
  },
  {
    title: "More Projects",
    description: "For more amazing projects, do check out my github! ",
    image: "https://raw.githubusercontent.com/cat-milk/Anime-Girls-Holding-Programming-Books/master/Compilers/Tohru_Kanna_Kobayashi_Excited_for_Dragon_book.png",
    link: "https://github.com/yatharth811/"
  },
]

export default function ProjectSection({ title, light, id }) {
  return (
    <div className={"section" + (light ? " section-light" : " section-dark")}>
      <div className="section-content" id={id} style={{ wordWrap: 'break-word'}}>
        <Typography variant="h2" align='center' color={'#ffe8b0'} paddingTop='3vh' marginLeft='0' gutterBottom>{title}</Typography>				
		    {/* <Typography variant="h4" align='left' color={'#ffe8b0'} paragraph marginTop='0.5vh'>{subtitle}</Typography>  */}
        <Grid container spacing={4}>
          {cards.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
              <Card className='card' style={{
                border: "none",
                boxShadow: "none"
              }}>
                <CardMedia
                    className='card-media' 
                    image={card.image} 
                    title="Image Title"
                />
                <CardContent className='card-content'>
                  <Typography gutterBottom variant="h4">
                    {card.title}
                  </Typography>
                  <Typography gutterBottom variant="h5" className='card-content'>
                    {card.description}
                  </Typography>
                </CardContent>
                <CardActions style={{justifyContent: "center", backgroundColor:"#26262a"}}>
                    <Button size="medium" style={{color: "yellow"}} href={card.link} target="_blank">
                      View
                    </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
			  </Grid>
      </div>
    </div>
  );
}