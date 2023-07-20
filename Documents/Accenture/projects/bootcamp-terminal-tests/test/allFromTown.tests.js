import assert from 'assert';
import allFromTown from '../allFromTown.js';



describe('Testing allFromTown function', function() {


var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CJ');
it('String input CL 124,CY 567,CL 345, CJ 456,CL 341, town code CJ we expect [\'CJ 456\']',function(){
  assert.deepEqual(fromStellies, ['CJ 456'])});


var fromKuilsriver = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CF');
it('String input CL 124,CY 567,CL 345, CJ 456,CL 341 ,town code CF we expect [ ]',()=>assert.deepEqual(fromKuilsriver, []));
  
  }
  );
  