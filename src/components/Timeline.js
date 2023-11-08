import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {GiElectric} from '@react-icons/all-files/gi/GiElectric';


const Timeline = () => {
    return(
        <div className="timeline">

		
				<VerticalTimeline animate={true}>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#92A8D1', color: 'white' }}
                        contentArrowStyle={{ borderRight: '7px solid  #92A8D1' }}
           
                        iconStyle={{ background: '#92A8D1', color: 'white' }}
                        icon={<GiElectric/>}
                    >
                        <h3 className="vertical-timeline-element-title">Cu ce ne ocupam ?</h3>
              
                        <p>
                        In linii mari, sarcina oricarui electrician este de a instala, intretine si repara dispozitive/instalatii electrice. Compania noastra se ocupa pentru:
                        </p>
                        <ul>
                            <li>
                            Planificarea aspectului si instalarii cablajului intr-o cladire.
                            </li>
                            <li>
                            Instalarea sistemelor de telefonie, securitate si alarma de incendiu.
                            </li>
                            <li>
                            Intretinerea intrerupatoarelor, sigurantelor si cablajului.
                            </li>
                            <li>
                            Testarea, gasirea si repararea defectiunilor sau a functionarii defectuase a sistemelor.
                            </li>
                            <li>
                            Revizuind lucrarile pe care le-au facut alti electricieni pentru a asigura ca respecta standardele de siguranta.
                            </li>
                        </ul>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#E9897E', color: 'white' }}
                        contentArrowStyle={{ borderRight: '7px solid  #E9897E' }}
           
                        iconStyle={{ background: '#E9897E', color: 'white' }}
                        icon={<GiElectric/>}
                    >
                        <h3 className="vertical-timeline-element-title">De ce sa ne alegei pe noi ?</h3>
            
                        <p>
                        Echipa noastra de electricieni calificati ofera ani de experienta si formare profesionala. Clientii pot fi asigurati ca vor fi pe maini bune la fiecare pas. Electricienii nostri sunt in timp util, amabili, cinstiti si lucreaza din greu pentru a face treaba bine. Cu o privire rapida la recenziile noastre, puteti vedea ca nu doar o spunem, ci o spunem cu adevarat.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#926AA6', color: 'white' }}
                        contentArrowStyle={{ borderRight: '7px solid  #926AA6' }}
          
                        iconStyle={{ background: '#926AA6', color: 'white' }}
                        icon={<GiElectric/>}
                    >
                        <h3 className="vertical-timeline-element-title">Intrebare ?</h3>
             
                        <p>
                            ...
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#939597', color: 'white' }}
                        contentArrowStyle={{ borderRight: '7px solid  #939597' }}
            
                        iconStyle={{ background: '#939597', color: 'white' }}
                        icon={<GiElectric/>}
                    >
                        <h3 className="vertical-timeline-element-title">Inca o intrebare ?</h3>
                 
                        <p>
                            ...
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>


		</div>
    );
}

export default Timeline;