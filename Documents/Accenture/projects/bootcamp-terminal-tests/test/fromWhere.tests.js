import assert from 'assert';
import fromWhere from '../fromWhere.js';

describe('Testing fromWhere fuction',function(){

    const testData = [
        { registrationNumber: 'CY 123', expectedTown: 'Bellville' },
        { registrationNumber: 'CJ 456', expectedTown: 'Paarl' },
        { registrationNumber: 'CA 789', expectedTown: 'Cape Town' },
        { registrationNumber: 'CF 123', expectedTown: 'Some other place!' },
        { registrationNumber: 'CJ 987', expectedTown: 'Paarl' },
        { registrationNumber: 'CA 246', expectedTown: 'Cape Town' },
        { registrationNumber: 'CK 789', expectedTown: 'Some other place!' }
        ];

    testData.forEach(data => it(`For ${data.registrationNumber} it should return ${data.expectedTown}`,()=>
        assert.equal(fromWhere(data.registrationNumber), data.expectedTown)
    ))
     
})