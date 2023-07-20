import assert from 'assert';
import isWeekday from '../isWeekday.js';

describe("Testing isWeekday function",function(){
    let weekdays={
        'Monday': 'first',
        'Tuesday': 'second',
        'Wednesday': 'third',
        'Thursday': 'fourth',
        'Friday': 'fifth'
       }

    const daysOftheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let testData=[];
    let day;

    for(let i=0;i<10;i++){
        day=daysOftheWeek[Math.floor(Math.random()*daysOftheWeek.length)]
        testData.push({'day':day,'truth':day in weekdays})
    }
    testData.forEach(function(data){
        it(`For ${data.day} we expect ${data.truth}`,function(){
            assert.equal(isWeekday(data.day),data.truth)
        })
    } )    
    })