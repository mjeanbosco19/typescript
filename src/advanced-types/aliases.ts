type Employer = {
  readonly id: number;
  name: string;
  retire?: (date: Date) => void;
};
let employer: Employer = {
  id: 1,
  name: '',
  retire: (date: Date) => {
    console.log(date);
  },
};

// retire? means optional
//  employer.id = 0; // Cannot assign to 'id' because it is a read-only property.
employer.name = 'Bosco';
