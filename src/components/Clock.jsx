import React, { useState, useEffect } from 'react';

const Clock = () => {
    let [time, setTime] = useState(()=>{new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})})
    const liveTick = () => {
      setTime(new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}))
    }
    setInterval(liveTick, 1000)

    const altHours = () => {
    let firstCycle = new Date();
    let secondCycle = new Date();
    let thirdCycle = new Date();
    let fourthCycle = new Date();
    let fifthCycle = new Date();
    let sixthCycle = new Date();
  //https://stackoverflow.com/questions/3674539/incrementing-a-date-in-javascript. 
  //(I modified date with hours and minutes. Please tell me there's a better way to increment minutes, unlike incrementing after hours as below)

    firstCycle.setHours(firstCycle.getHours() + 1);
    firstCycle.setMinutes(firstCycle.getMinutes() + 44);

    secondCycle.setHours(secondCycle.getHours() + 3);
    secondCycle.setMinutes(secondCycle.getMinutes() + 14);

    thirdCycle.setHours(thirdCycle.getHours() + 4);
    thirdCycle.setMinutes(thirdCycle.getMinutes() + 44);

    fourthCycle.setHours(fourthCycle.getHours() + 6);
    fourthCycle.setMinutes(fourthCycle.getMinutes() + 14);

    fifthCycle.setHours(fifthCycle.getHours() + 7);
    fifthCycle.setMinutes(fifthCycle.getMinutes() + 44);

    sixthCycle.setHours(sixthCycle.getHours() + 9);
    sixthCycle.setMinutes(sixthCycle.getMinutes() + 14);

// https://stackoverflow.com/questions/17913681/how-do-i-use-tolocaletimestring-without-displaying-seconds
    const first = firstCycle.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    const second = secondCycle.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    const third = thirdCycle.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    const fourth = fourthCycle.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    const fifth = fifthCycle.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    const sixth = sixthCycle.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})

    return [first, second, third, fourth, fifth, sixth]
    }
    //calling altHours returns an array. We're gonna have to map through the array to make our code shorter.


    // useEffect autoClick to add classes to recommended buttons on load
    const recommended = document.getElementsByClassName('recommended')
    const [_, setRecommended] = useState([])
    useEffect(()=>{
      setRecommended(()=>{
        Array.from(recommended).forEach(el=> el.click())
      })
    }, [])
  return (
    <section id='main' className="">
      <h1 id='current-time' className="">{time}<span id="now">  now.</span> </h1>
      {/* https://stackoverflow.com/questions/41027663/how-to-map-an-array-of-objects-in-react */}
      <div className='black-box'>
        <p id="wake-up-text">If you're gonna go to sleep now, You should wake up around these times to wake up energized:</p>
      
        <section className="rows-box">{altHours().map(el => {
        return (    
          
            <section className="rows" id={altHours().indexOf(el)} key={altHours().indexOf(el)}>
              <section className="tiny-times">
              { altHours()[altHours().indexOf(el)] }
              </section>
              <div className="recommended" onClick={
                (e)=>{
                  if(e.target.parentNode.id < 3){
                    e.target.className = "recommended-nap"
                    e.target.innerText = "nap"
                  } else if( e.target.parentNode.id < 4){
                    e.target.className = 'recommended-blank'
                    e.target.innerText = "Mood reset"
                  } else e.target.className = 'recommended'
                }
              }>Recommended</div>
            </section>    
        )
        })}</section>

      </div>
    </section>
  )
}

export default Clock
