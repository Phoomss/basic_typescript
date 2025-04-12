export const interfaceAndTypes = () => {
  interface User {
    name: string;
    age: number;
  }

  interface User {
    gender: string;
  }

  //   Using the interface to create an object
  const user: User = {
    name: "John",
    age: 30,
    gender: "Male",
  };

  interface Admin extends User {
    isAdmin: boolean;
  }

  const admin: Admin = {
    name: "John",
    age: 30,
    gender: "Female",
    isAdmin: true,
  };

  //   console.log(user.age, user.name,user.gender); // 30 John true
  //   console.log(admin.age, admin.name, admin.isAdmin); // 30 John true

  type Person = {
    name: string;
    age: number;
  };

  //   union type
  type Role = Person & { isAdmin: boolean };

  const person: Role = {
    name: "John",
    age: 30,
    isAdmin: true,
  };
  console.log(person)
};
