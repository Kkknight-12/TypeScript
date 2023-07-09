interface Form<T> {
  errors: {
    [P in keyof T]?: string;
  };
  values: T;
}

interface ContactI {
  name: string;
  email: string;
}

const contactForm: Form<ContactI> = {
  errors: {
    email: "This must be a valid email address",
  },
  values: {
    name: "Bob",
    email: "bob@someemail.com",
  },
};

console.log(contactForm);