// Returns a random DNA base    
const returnRandBase = () => {                         
    const dnaBases = ['A', 'T', 'C', 'G']              
    return dnaBases[Math.floor(Math.random() * 4)]     
  }
  console.log(returnRandBase()); // prints a random base

  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {             
    const newStrand = []                   
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase()) 
    }
    return newStrand  
  }
  
  console.log(mockUpStrand()); // prints 15 bases
  
  
  pAequorFactory = (num, arr) => {  // factory function
    return {
      specimenNum: num, // property
      dna: arr, // property
      mutate() { // method
        let randIndex = Math.floor(Math.random() * this.dna.length); // random index
        let randBase = returnRandBase(); // random base
        while (this.dna[randIndex] === randBase) { // if the random base is the same as the base at the random index
          randBase = returnRandBase(); // generate a new random base
        }
        this.dna[randIndex] = randBase; // replace the base at the random index with the new random base
        return this.dna; // return the mutated dna
      },
      compareDNA(pAequor) { // method
        let count = 0; // counter
        for (let i = 0; i < this.dna.length; i++) { // loop through the dna
          if (this.dna[i] === pAequor.dna[i]) { // if the base at the current index is the same as the base at the same index in the other pAequor's dna
            count++; // increment the counter
          }
        }
        let percentage = (count / this.dna.length) * 100; // calculate the percentage
        console.log( // log the percentage
          `specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${percentage.toFixed( // round the percentage to 2 decimal places
            2 // 2 decimal places
          )}% DNA in common.`  // log the percentage
        );
      },
      willLikelySurvive() { // method
        let count = 0; // counter
        for (let i = 0; i < this.dna.length; i++) { // loop through the dna
          if (this.dna[i] === 'C' || this.dna[i] === 'G') { // if the base at the current index is 'C' or 'G'
            count++; // increment the counter
          }
        }
        let percentage = (count / this.dna.length) * 100; // calculate the percentage
        if (percentage >= 60) {  // if the percentage is greater than or equal to 60
          return true;  // return true
        } else {  // otherwise
          return false;  // return false
        }
      },
      complementStrand() {  // method
        let compStrand = [];  // empty array
        for (let i = 0; i < this.dna.length; i++) {  // loop through the dna
          if (this.dna[i] === 'A') {  // if the base at the current index is 'A'
            compStrand.push('T');  // push 'T' to the compStrand array
          } else if (this.dna[i] === 'T') {  // if the base at the current index is 'T'
            compStrand.push('A');  // push 'A' to the compStrand array
          } else if (this.dna[i] === 'C') {  // if the base at the current index is 'C'
            compStrand.push('G');  // push 'G' to the compStrand array
          } else if (this.dna[i] === 'G') {  // if the base at the current index is 'G'
            compStrand.push('C');  // push 'C' to the compStrand array
          }   
        }
        return compStrand;  // return the compStrand array
      },
    };
  };
  
   // group the console logs
  // log the pAequor object
  console.log(pAequorFactory(1, mockUpStrand()).mutate());  // log the mutated dna
  console.log(pAequorFactory(1, mockUpStrand()).compareDNA(pAequorFactory(2, mockUpStrand()))); // log the percentage of DNA in common
  console.log(pAequorFactory(1, mockUpStrand()).willLikelySurvive()); // log whether the pAequor will likely survive
  console.log(pAequorFactory(1, mockUpStrand()).complementStrand()); // log the complement strand
  console.log(pAequorFactory(1, mockUpStrand()).complementStrand().join('')); // log the complement strand as a string
   