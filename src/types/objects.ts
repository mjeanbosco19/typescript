let employee: {
  readonly id: number;
  name: string;
  retire?: (date: Date) => void;
} = {
  id: 1,
  name: '',
  retire: (date: Date) => {
    console.log(date);
  },
};
// retire? means optional
//  employee.id = 0; // Cannot assign to 'id' because it is a read-only property.
employee.name = 'Bosco';
