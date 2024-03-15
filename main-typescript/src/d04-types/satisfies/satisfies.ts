type personInfo = personName | otherDetails;

type personName = "John" | "Jack" | "Justin";

type otherDetails = {
    age: number;
    gender: string;
};

type Person = {
  myBasicInfo: personInfo;
  myOtherInfo: personInfo;
};

/* --- Without 'satisfies' keyword will throw error as myBasicInfo can be a string or an object. --- */

// const applicant: Person = {
//     myBasicInfo: "John",
//     myOtherInfo: { age: 22, gender: "Male" },
// }

const applicant = {
    myBasicInfo: 'John',
    myOtherInfo: { age: 22, gender: "Male" },
} satisfies Person;

applicant.myBasicInfo.toUpperCase();