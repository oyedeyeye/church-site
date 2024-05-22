import EventsTimeline from 'react-events-timeline';
import 'react-events-timeline/dist/main.css';
 
const data = [
{
    date: 2019,
    title: 'Senior Developer',
    label: 'GitHub',
    location: 'Palo Alto, California (USA)',
    content: (<div>Description</div>),
},
{
    date: 2019,
    title: 'Senior Developer',
    label: 'GitHub',
    location: 'Palo Alto, California (USA)',
    content: (<div>Description</div>),
},
{
    date: 2019,
    title: 'Senior Developer',
    label: 'GitHub',
    location: 'Palo Alto, California (USA)',
    content: (<div>Description</div>),
}

];
const icon = <i className='fa fa-briefcase'/>;
 
const NewsEvent = () => (
  <div className="app">
    ...
    <EventsTimeline title='WORK HISTORY' icon={icon} color='blue' data={data} />
  </div>
);
export default NewsEvent;