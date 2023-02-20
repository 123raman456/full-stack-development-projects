import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



// let age=10;
// if(age<=10){
//   age=15;
// }
// const myElements=<p>{age}</p>;
// const str="Raman";
// const elem1=<h1>React is loved by {str}</h1>

// const nav=(<div style={{backgroundColor:"gray"}}><ul><li><a href="#">Home</a></li><li><a href="#">About</a></li><li><a href="#">Contact Us</a></li><li><a href="#">Register</a></li></ul></div>)

function Text3(){
 return (
   <>
     <header>
       <nav>
         <ul>
           <li><a href='#'>Home</a></li>
           <li><a href='#'>About</a></li>
           <li><a href='#'>Contact Us</a></li>
         </ul>
       </nav>
     </header>
   </>
 )
}
function Text(){
  return (
    <>
    <div>
    <section>
      <ol>
        <li>It's a popular library, so I'll be able to fit in with the cool kids!</li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
      </section>
      <footer>
        <p>© 2022 Zill development. All rights reserved.</p>
      </footer>
      </div>
    </>
  );
 }
 function Text2(){
  return (
    <>
      <h1>Reasons I'm excited to learn React</h1>
    </>
  );
 }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<> <Text3/><Text2/> <Text/></>);



// <React.StrictMode>
//   <App />
// </React.StrictMode>


