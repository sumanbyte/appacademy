const { or, and, calculateTruthTable } = require('../../utils/truthTableHelpers');

// Implement the imported helper functions from line 1
//    Read the export file for the explanation of how they work

// Example workflow for the problem directly below:
//    A    B     !A || (A && B)
//    -------------------
//    0    1      ?

//    1. !A -> 1
//    2. calculateTruthTable(0, and, 1) -> 0
//    3. calculateTruthTable(1, or, 0) -> 1
//    4. Answer: 1

/******************************************************************************/

// Update arguments to calculate and console.log returned value
/*
!A = 1
!A = 1
!A = 0
!A = 0


*/
// console.log("A && B")
// calculateTruthTable(1, and, 1); // and 
// console.log("!A || A && B")
calculateTruthTable(0, or, 0); // or