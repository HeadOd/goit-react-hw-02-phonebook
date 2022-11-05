import { ContactList } from "./Contacts.styled";

export const Contacts = ({ contacts }) => {
  return <ContactList>
      {contacts.map(({ id, name, number }) => {
        return(
        <li key={id}>{name}: {number}</li>
      )})}
    </ContactList>
}