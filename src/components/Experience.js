import * as React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocationIcon from '@material-ui/icons/LocationOn';
import { ExpData } from './ExpData'

export default function Skills() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="dataa">
      <div className="status">
        <h1 style={{ textAlign: 'center' }}>Professional Experience  <span>💻</span></h1>
      </div>
      <div className="cards" style={{ paddingTop: 50 }} >
        {ExpData.map((item, key) => {
          return (
            <Accordion  key={item.id} expanded={expanded === key} onChange={handleChange(key)}>
              <AccordionSummary className='card'
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <div >
                  <h2 style={{ fontSize: 20 }} >{item.title} - {item.company}</h2>
                  <h5 style={{ color: 'grey' }}>{item.year}</h5>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <LocationIcon style={{ fontSize: '0.8rem' }} />{item.location}
                </Typography>
              </AccordionDetails>
              <AccordionDetails>
                <div>
                  <p>{item.description}</p>
                </div>
              </AccordionDetails>
              <AccordionDetails>
              {item.skills.map((i,key) =>
              (
                <h5 key={key}  className="round"> {i} 
                </h5>
  

              ))}
                
              </AccordionDetails>
            </Accordion>

          )
        })}
      </div>

    </div>
  );
}
