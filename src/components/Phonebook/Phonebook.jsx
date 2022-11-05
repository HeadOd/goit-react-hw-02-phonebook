import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { Section } from "../Section/Section";
import { PhoneForm } from "../PhoneForm/PhoneForm";
import { Contacts } from "../Contacts/Contacts";
import { Filter } from '../Filter/Filter';

export class Phonebook extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    name: '',
    number: '',
    filter: '',
  }

  onLeaveContact = (e) => {
    e.preventDefault();
    const {elements: { name, number }}  = e.currentTarget;

    let contact = {
      number: number.value,
      name: name.value,
      id: nanoid()
    }

    this.setState(({ contacts }) => ({ contacts : [contact, ...contacts]}));
  }

  findContact = (e) => {
    const { value } = e.currentTarget;
    this.setState({filter: value});
  }

  renderContacts = () => {
    const { contacts, filter } = this.state;
    let filtered = contacts;
    if (filter) {
      filtered = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return filtered;
  };

  render() {
    const { contacts } = this.state;

    return <div> <Section title='Phonebook'>
                    <PhoneForm onLeaveContact={this.onLeaveContact} />
                  </Section>

                  <Filter findContact={this.findContact} />

                  <Section title='Contacts'>
                    <Contacts
                    contacts={this.renderContacts()} />
                  </Section>
                    </div>
  }
}
