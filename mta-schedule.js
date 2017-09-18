// This is the text editor interface. 
// Anything you type or change here will be seen by the other person in real time.

// They want you to build a garage management system
// They will provide a schedule of when each bus enters and leaves the garage
// ID      EnterTime      ExitTime
// 1       00:30          02:30
// 2       01:00          03:45
// 3       04:00          09:00
// 4       05:00          10:30
// 5       11:15          13:30
// 6       14:20          16:00
// :
// :
// :
// 234560  23:30          23:59


// GetCount(01:15) -> 2
// GetCount(14:00) -> 0

//need to lookup import for i/o scanner
import util.Scan

class mtaSchedule() {
    
    var id; //bus id
    var enter; //bus arrival
    var exit; //bus departure
    var mtaBus; //bus object
    var mtaArr; //collection of buses
    var garageArr; //buses in the garage
    var count; //count of buses in garage
    
    //will check syntax for scanner initialization
    Scanner scan = new Scanner
    
    getSchedule(schedule){
        //@param schedule is the schedule the user will provide
        //parse it into data structure
        mtaArr = new Array[]; //check syntax for this
        
        //loop to read each line of schedule
        for (int i = 0; i < schedule.length; i++){
            //create new bus object
            mtaBus = new Object(); //check syntax for this
            
            //loop to populate object properties
            for (int j = 0; j < 3; j++){
                //object properties
                mtaBus.id = scan.nextInt();
                mtaBus.enter = scan.nextDouble();
                mtaBus.exit = scan.nextDouble();
            }
            
            mtaArr[i] = mtaBus;
        }
    }
    
    
    getCount(time){
        //@param time is the time we want to check and see how many buses are there
        //given time, enter and exit properties will be basis of our check
        
        garageArr = new Array[]; //initialize arr
        count = 0;
        
        //loop through the array
        for (int a = 0; a < mtaArr.length; a++){
            //check the enter and exit property
            //if enter exit range holds the time
            //treating time as float with 2 decimal places given 24hr time format
            if(time >= mtaArr[a].enter && time <= mtaArr[a].exit){
                //add to garage arr
                //count
                count++;
            }
            
        }
        
        //print garage array length
        //print count
        return count;
    }
}