function queueForShower(students, timetable){
    let time =0;
        for(let i =0; i< timetable.length; i++) {
            for(let j=0; j<students.length;j++) {
            if(students[j]+time<= timetable[i][0]) {
                time += students[j];
                students.splice(j,1);
                j=-1;
            } 
                
            }
            if(students.length>0) {
                time = timetable[i][1];
            }
            
           
        }
        if(students.length>0) {
            for(let i=0; i< students.length;i++) {
                time += students[i];
            }
        }
        
    return time;
}


