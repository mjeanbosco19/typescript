// Others codes are in corresponding files
class myPerson {
  constructor(public firstName: string, public lastName: string) {}
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }
  walk() {
    console.log('Walking');
  }
}
class Principal extends myPerson {
  override get fullName() {
    return 'Principal ' + super.fullName;
  }
}

printNames([
  //   new Student(1, 'John', 'Smith'),
  //   new Teacher('Bosco', 'Etite'),
  new Principal('Mugiraneza', 'Bosco'),
]);

function printNames(people: myPerson[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}
