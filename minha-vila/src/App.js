import { useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function App() {
const [bubble, setBubble] = useState({ show: false, x: 0, y: 0, text: '' });

function onObjectClick(e) {
const name = e.target.name;
const x = e.clientX;
const y = e.clientY;

console.log("clicou no:", name); // DEBUG - ver no console

let message = '';

switch (name) {
case 'Chão':
message = "Welcome to my village!";
break;
case 'Casa biscoitos':
message = "In this house, we bake delicious cookies! Can you smell it?";
break;
case 'Casa sonhos':
message = "This is my dream house! My best friend will live right next door! So fun!";
break;
case 'Casa gatos':
message = "Here we have 13 cats, they're all adorable!";
break;
case 'Casa fofa':
message = "It's just a cute little house!";
break;
case 'Coelho':
message = "I came to deliver Easter eggs! But shh, don’t tell anyone my secret!";
break;
case 'Casa up':
message = "This house is ready to fly away with balloons! Just like in the movie UP!";
break;
default:
message = '';
}

if (!message) return;

setBubble({
show: true,
x,
y: y - 50,
text: message,
});

setTimeout(() => {
setBubble({ ...bubble, show: false });
}, 3500);
}

return (
<div style={{ width: '100vw', height: '100vh' }}>
<Spline
scene="https://prod.spline.design/NNNNw56pa0rAuAmU/scene.splinecode"
onMouseDown={onObjectClick} // EVENTO CERTOO
renderOnDemand={true}
/>

{bubble.show && (
<div
style={{
position: 'absolute',
top: bubble.y,
left: bubble.x,
backgroundColor: 'white',
padding: '10px 14px',
borderRadius: '12px',
border: '2px solid black',
transform: 'translate(-50%, -100%)',
maxWidth: '200px',
fontFamily: 'Arial, sans-serif',
fontSize: '14px',
textAlign: 'center',
zIndex: 10,
boxShadow: '0px 3px 10px rgba(0,0,0,0.3)',
}}
>
{bubble.text}
<div
style={{
position: 'absolute',
bottom: '-10px',
left: '50%',
marginLeft: '-5px',
width: '0',
height: '0',
borderLeft: '5px solid transparent',
borderRight: '5px solid transparent',
borderTop: '10px solid white',
}}
></div>
</div>
)}
</div>
);
}
