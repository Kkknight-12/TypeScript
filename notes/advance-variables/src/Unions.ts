/* Union with Types and Tagged Union */

let u1: string | boolean = true;
type UStringBoolean = string | boolean;
let u2: UStringBoolean = "knight";

// Example 1
interface InterfaceA {
  discriminant: "InterfaceA"; // This is not a string type, but InterfaceA type
  m0: number;
}
interface InterfaceB {
  discriminant: "InterfaceB"; // This is not a string type, but InterfaceB type
  m1: string;
}
interface InterfaceC {
  discriminant: "InterfaceC"; // This is not a string type, but InterfaceC type
  m2: string;
}
function unionWithDiscriminant(p: InterfaceA | InterfaceB | InterfaceC) {
  switch (
    p.discriminant // Only common members available
  ) {
    case "InterfaceA":
      console.log(p.m0); // Only InterfaceA members available
      break;
    case "InterfaceB":
      console.log(p.m1); // Only InterfaceB members available
      break;
    case "InterfaceC":
      console.log(p.m2); // Only InterfaceC members available
      break;
  }
}

const IntA: InterfaceA = { discriminant: "InterfaceA", m0: 3444 };
unionWithDiscriminant(IntA); // 3444

// ------------------------------------------------------------------------

/* Discriminated Unions in Practice */

// Example 1
// using Enum
const enum ContactType {
  Phone,
  Email,
}

type Contact =
  | { type: ContactType.Email; email: string }
  | { type: ContactType.Phone; phone: number };

let CContact: Contact = { type: 1, email: "something1" };
let CContact2: Contact = { type: 0, email: "somethingElse" };

// ------------------------------------------------------------------------

// Example 2
// Multiple discriminating properties
type Foo =
  | { kind: "A"; type: "X"; abc: string }
  | { kind: "A"; type: "Y"; xyz: string }
  | { kind: "B"; type: "X"; rty: string };

declare const foo: Foo;

if (foo.kind === "A" && foo.type === "X") {
  console.log(foo.abc);
}

// Exercise
/* Create types for the following domain:
 * Users place orders for products. Users have contact information, email or postal
 * addresses, and at least one is required. Orders should include price, product
 * name, quantity, payment date, paid amount, sending date, and delivery date.  */

// solution
type Customer = {
  name: string;
  contactInfo: ContactInfo;
};

type ContactInfo =
  | { kind: "emailOnly"; email: string }
  | { kind: "postalOnly"; address: string }
  | { kind: "emailAndPostal"; email: string; address: string };

type PaidOrderData = { paymentDate: Date; amount: number };
type SentOrderData = { sendingDate: Date };
type DeliveredOrderData = { deliveryDate: Date };

type OrderState =
  | { kind: "new" }
  | { kind: "paid"; paidData: PaidOrderData }
  | { kind: "sent"; paidData: PaidOrderData; sentData: SentOrderData }
  | {
      kind: "delivered";
      data: PaidOrderData;
      sentData: SentOrderData;
      deliveredData: DeliveredOrderData;
    };

type Order = {
  customer: Customer;
  state: OrderState;
  productName: string;
  price: number;
  quantity: number;
};

let myOrder: Order = {
  customer: {
    name: "knight",
    contactInfo: { kind: "emailOnly", email: "someemailgmail.com" },
  },
  state: {
    kind: "paid",
    paidData: { paymentDate: new Date(), amount: 567 },
  },
  productName: "Lunix Book",
  price: 1231231,
  quantity: 123123,
};