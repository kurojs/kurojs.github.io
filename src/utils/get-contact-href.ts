import { btoa } from "abab";

const getContactHref = (name: string, contact: string) => {
  const hrefs: { [key: string]: string } = {
    email: btoa(contact) || "",
    github: `https://github.com/${contact}`,
    linkedin: `https://www.linkedin.com/in/${contact}`,
  };

  return hrefs[name] ?? contact;
};

export default getContactHref;
