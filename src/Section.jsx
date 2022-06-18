import React from "react";
import {Typography, List, ListItem} from '@mui/material';
import {ListItemIcon} from "@mui/material";
import FiberSmartRecordIcon from '@mui/icons-material/FiberSmartRecord';
export default function Section({ title, light, id}) {
  const isCourses = (id === "courses" ? 1 : 0);
  return (
    <div className={"section" + (light ? " section-light" : " section-dark")}>
      <div className="section-content" id={id} style={{minHeight : '100vh', wordWrap: 'break-word', display:'flex', justifyContent:'center', alignItems:'left', flexDirection:'column'}}>
        <Typography variant="h2" align='left' color={'#ffe8b0'} marginLeft='0' gutterBottom >{title}</Typography>	
        {
           isCourses ? (
              <List>

                <ListItem>
                <ListItemIcon sx={{ color: "green" }}>
                    <FiberSmartRecordIcon/>
                </ListItemIcon>
                  <Typography variant="h4" color={'#ffffff'}>
                    <a className="course-underline-hover-effect" href="#courses">
                    COL215P: Digital Logic & System Design.
                    </a>
                  </Typography>
                </ListItem>    


                <ListItem>
                <ListItemIcon sx={{ color: "green" }}>
                    <FiberSmartRecordIcon/>
                </ListItemIcon>
                  <Typography variant="h4" color={'#ffffff'}>
                    <a className="course-underline-hover-effect" href="https://www.cse.iitd.ac.in/~rohanpaul/teaching/2021-col333.html" target="_blank" rel="noreferrer">
                    COL333: Principles of Artificial Intelligence.
                    </a>
                  </Typography>
                </ListItem>                

                <ListItem>
                <ListItemIcon sx={{ color: "green" }}>
                    <FiberSmartRecordIcon/>
                </ListItemIcon>
                  <Typography variant="h4" color={'#ffffff'}>
                    <a className="course-underline-hover-effect" href="https://www.cse.iitd.ac.in/~abhijnan/computer-networks-2021.html" target="_blank" rel="noreferrer">
                      COL334: Computer Networks.
                    </a>
                  </Typography>
                </ListItem>

                <ListItem>
                <ListItemIcon sx={{ color: "green" }}>
                    <FiberSmartRecordIcon/>
                </ListItemIcon>
                  <Typography variant="h4" color={'#ffffff'}>
                    <a className="course-underline-hover-effect" href="https://web.iitd.ac.in/~keerti/COL351-2022.htm" target="_blank" rel="noreferrer">
                      COL351: Analysis and Design of Algorithms.
                    </a>
                  </Typography>
                </ListItem>

                <ListItem>
                <ListItemIcon sx={{ color: "green" }}>
                    <FiberSmartRecordIcon/>
                </ListItemIcon>
                  <Typography variant="h4" color={'#ffffff'}>
                    <a className="course-underline-hover-effect" href="#courses">
                    COQ302: Seminar Course - II.
                    </a>
                  </Typography>
                </ListItem>   



                <ListItem>
                <ListItemIcon sx={{ color: "green" }}>
                    <FiberSmartRecordIcon/>
                </ListItemIcon>
                  <Typography variant="h4" color={'#ffffff'}>
                    <a className="course-underline-hover-effect" href="https://hss.iitd.ac.in/course/microeconomics" target="_blank" rel="noreferrer">
                      HUL212: Microeconomics.
                    </a>
                  </Typography>
                </ListItem>

                <ListItem>
                <ListItemIcon sx={{ color: "green" }}>
                    <FiberSmartRecordIcon/>
                </ListItemIcon>
                  <Typography variant="h4" color={'#ffffff'}>
                    <a className="course-underline-hover-effect" href="#courses">
                    SBL100: Introduction to Biology.
                    </a>
                  </Typography>
                </ListItem>    
               


              </List>
            ) :
          (<Typography variant="h5" align='left' color={'#ffffff'} paragraph marginTop='0.5vh'>
            I'm currently a junior undergraduate at the Indian Institute of Technology, Delhi. My interests include machine learning, competitive programming, programming languages and mathematical puzzles. I also like music and photography.<br/><br/>
            I also enjoy sports like volleyball and footall. In my leisure time, I watch anime and anime. Fiction books (manga XD) are also something that I love reading. I am a gamer at heart (plays Genshin Impact). Along with playing games, I enjoy making games too.
          </Typography> )
        }  
      </div>
    </div>
  );
}