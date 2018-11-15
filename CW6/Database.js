class Student{

    constructor(id,name,gpa,courses){
        this.id = id;
        this.name = name;
        this.gpa = gpa;
        this.courses = courses;
    }
    toString() {
        return "Id = "+this.id+" Name = " +this.name +" Gpa = " + this.gpa+" Courses = "+this.courses;
    }
	
	readData(file) {
    fetch(url+file)
        .then(r => r.text(), report)
        .then(addStudents, report);
}
addStudents(txt) {
    let msg = "Students.txt = "+txt.length+" chars, ";
    let a = txt.split("\n");
    msg += a.length+" lines, ";
	
    for (let s of a) {
      let std = parseStudent(s);
	  database.students.set(std.id,std);
      //keys.push(std.id); vals.push(std);
    }
    report(msg + database.students.size+" students");
}
	parseStudent(line) {
		let b = line.split("\t");
		let id = b[0], name = b[1], gpa = b[2];
		let list = [];
		for (let i=3; i<b.length; i++) 
			list.push(b[i]);
		return {id, name, gpa, list};
	}
}

class Database{

	constructor() {
        this.courses = new Map();
		this.students = new Map();
		this.array = []
    }
	
	getCourses(){
		courses = new Map();
		courses.set("Mehmet","65");
		return courses;
	}
	
	readData(file) {
		console.log("readData "+file);
		fetch(url+file)
			.then(r => r.text(), report)
			.then(addStudents, report);
	}
	
	addStudents(txt) {
		let msg = txt.length+" chars, ";
		let a = txt.split("\n");
		msg += a.length+" lines, ";
		for (let s of a) {
		  let std = parseStudent(s);
		  keys.push(std.id); vals.push(std);
		  
		}
		report(msg + keys.length+" students");
	}
	
	parseStudent(line) {
		let b = line.split("\t");
		let id = b[0], name = b[1], gpa = b[2];
		let list = [];
		for (let i=3; i<b.length; i++) 
			list.push(b[i]);
		return {id, name, gpa, list};
	}

}


    