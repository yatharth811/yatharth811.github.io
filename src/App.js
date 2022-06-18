import React from 'react';
import './App.css';
// import {Link} from 'react-router-dom';
import Section from './Section';
import MainSection from './MainSection';
import ProjectSection from './ProjectSection';
import { Typography, Button, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, useMediaQuery, SwipeableDrawer, IconButton} from '@mui/material';
import { makeStyles } from '@mui/material/styles';
import MaterialUISwitch from './MaterialUISwitch';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Avatar from '@mui/material/Avatar';

// Icons
import { Menu as MenuIcon, CloseRounded as CloseRoundedIcon } from '@mui/icons-material';

const themeLight = createTheme({
  	palette: {
		background: {
		// default: "#e4f0e2"
		default: "#5ad9e5"
		},
  	}, 
  	typography: {
    	fontFamily: [
			"Nunito",
			"Roboto",
			"Helvetica Neue",
			"Arial",
			"sans-serif"
    	].join(",")
  	}
});

const themeDark = createTheme({
  	palette: {
    	background: {
      	default: "#26262a"
    },
    text: {
     	primary: "#000000"
    }
 	}, 
  	typography: {
    	fontFamily: [
      	"Nunito",
      	"Roboto",
      	"Helvetica Neue",
      	"Arial",
      	"sans-serif"
    	].join(",")
  	}
});

const avatarSource = "https://raw.githubusercontent.com/cat-milk/Anime-Girls-Holding-Programming-Books/master/C%2B%2B/Kitagawa_My_Dress_Up_Darling_cpp.jpg"
const githubLink = "https://github.com/yatharth811"
const linkedinLink = "https://www.linkedin.com/in/yatharth-kumar-540530a8/"

function App() {
  const [light, setLight] = React.useState(false);
  const is600pxBreakpointHit = useMediaQuery("(max-width: 600px)");
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const mainData = <div className='left-side' style={{backgroundColor: (light ? '#444444' : '#f2b205'), overflowY:'hidden', overflowX:'hidden'}}>
  <Container maxWidth="lg" align="center">
	  <MainSection src={avatarSource} title={"Hi!"} subtitle={"I'm Yatharth, a junior undergraduate pursuing computer science at Indian Institute of Technology, Delhi!"} light={light} id={"home"}/>
	  <Section title={'About'} light = {light} id={'about'}/>	
	  <ProjectSection title={'Projects'} light={light} id={"projects"}/>
	  <Section title="Courses" light = {light} id={'courses'}/>
  </Container>
</div>;
  const sideBarData = <Container maxWidth="md" align="center">	
	  <Typography marginBottom={'2vh'}></Typography>
	  <MaterialUISwitch onChange={() => setLight((prev) => !prev)}/>
	  <Typography></Typography> 
	  <Typography variant='h5' color={(light ? '#444444': '#c9c6be')} marginTop={'28.5vh'} marginBottom={'1.5vh'}><a className="underline-hover-effect" href="#home">Home</a></Typography>
	  <Typography></Typography>
	  <Typography variant='h5' color={(light ? '#444444': '#c9c6be')} marginBottom={'1.5vh'}><a className="underline-hover-effect" href="#about">About</a></Typography>
	  <Typography></Typography>
	  <Typography variant='h5' color={(light ? '#444444': '#c9c6be')} marginBottom={'1.5vh'}><a className="underline-hover-effect" href="#projects">Projects</a></Typography>
	  <Typography></Typography>
	  <Typography variant='h5' color={(light ? '#444444': '#c9c6be')} marginBottom={'1.5vh'}><a className="underline-hover-effect" href="#courses">Courses</a></Typography>
	  <Typography></Typography>
	  <Typography variant='h5' color={(light ? '#444444': '#c9c6be')} marginBottom={'1.5vh'}><a className="underline-hover-effect" href={githubLink} target="_blank"  rel="noreferrer">Github</a></Typography>
	  <Typography></Typography>
	  <Typography variant='h5' color={(light ? '#444444': '#c9c6be')} marginBottom={'1.5vh'}><a className="underline-hover-effect" href={linkedinLink} target="_blank"  rel="noreferrer">Linkedin</a></Typography>
	  {/* <Typography variant='h5' color={(light ? '#444444': '#c9c6be')} ><br/></Typography> */}
  </Container>;

  return (
    <ThemeProvider theme={light ? themeLight : themeDark}>
      	<CssBaseline />
	  	{/* {
			light ? (
				<div className='left-panel' style={{height : '100vh', width : '70vw', backgroundColor: '#444444'}}>
				<MaterialUISwitch onChange={() => setLight((prev) => !prev)}/>

				</div>
			) : (
				<div className='left-panel' style={{height : '100vh', width : '70vw', backgroundColor: '#f2b205'}}>
				<MaterialUISwitch onChange={() => setLight((prev) => !prev)}/>

				</div>
			)
		} */}

		{is600pxBreakpointHit && <SwipeableDrawer
			onClose={() => setIsDrawerOpen(false)}
			onOpen={() => setIsDrawerOpen(true)}
			open={isDrawerOpen}
			anchor={"right"}
		><div style={{height: '100vh', width: '100vw', ...(light ? {background: '#5ad9e5'} : {background: "black"})}}>{sideBarData}</div></SwipeableDrawer>}

		{is600pxBreakpointHit && <div
			className='hamburger-icon'
			onClick={() => setIsDrawerOpen(prev => !prev)}
			style={{
				"--background-color": light ? '#444444' : '#f2b205',
				"--color": light ? 'white' : 'black'
			}}>
			{isDrawerOpen ? <CloseRoundedIcon /> : <MenuIcon />}
		</div>}

		<main>
			{is600pxBreakpointHit ? mainData : <Grid container spacing={0}>
				<Grid item xs={9}>
					{mainData}
				</Grid>
				<Grid item xs={3}>
					{/* // backgroundColor: (light ? '#e4f0e2' : '#26262a') */}
					<div className='right-side' style={{ height:'100vh', width:'25vw', position:'fixed'}}>
						{sideBarData}
					</div>
				</Grid>
			</Grid>}
		</main>

		

    </ThemeProvider>
	
  );
}

export default App;
