function Student(fname, lname) {
  this.fname = fname,
  this.lname = lname,
  this.name = function() {
    return (this.fname + " " + this.lname);
  },
  this.courseLoad = [],
  this.enroll = function(course) {
    for (var enCourse in this.courseLoad){
      if(course.conflictsWith(enCourse)){
        return "Course conflict";
      }
    }
    if (this.courseLoad.indexOf(course) === -1) {
      this.courseLoad.push(course);
      course.students.push(this);
    }
  }
}

function Course(course_name, department, num_credits, day, block) {
  this.name = course_name,
  this.department = department,
  this.num_credits = num_credits,
  this.day = day,
  this.block = block,
  this.students = [],
  this.addStudent = function(student) {
    if (this.students.indexOf(course) === -1) {
      this.students.push(student);
      student.courseLoad.push(this);
    }
  },
  this.conflictsWith = function(course){
    if(course.block === this.block && course.day === this.day){
      return true;
    } else {
      return false;
    }
  }
}

stud1 = new Student('mary', 'littlelamb');
course1 = new Course('javascript', 'nedpartment', 1000);
// console.log(stud1);
// console.log(course1);
stud1.enroll(course1);
// console.log(stud1.courseLoad);
console.log(course1.students);