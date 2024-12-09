function findHighestMarks() {
//    note: You can change the below numbers also
    const marks = [99, 92, 78, 95, 88]; 
    
    let highestMarks = marks[0];

    for (let i = 1; i < marks.length; i++) {
        highestMarks = marks[i] > highestMarks ? marks[i] : highestMarks;
    }

    console.log("The highest marks scored by a student is: " + highestMarks);
}

findHighestMarks();
