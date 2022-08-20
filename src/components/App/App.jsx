import { Component } from 'react';
import styles from './App.module.css';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleSubmit = ev => {
    ev.preventDefault();
    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === this.state.name.toLowerCase()
      )
    ) {
      alert(`${this.state.name} is already in contacts.`);
    } else {
      this.setState({
        contacts: [
          ...this.state.contacts,
          {
            name: this.state.name,
            number: this.state.number,
            id: `id-${this.state.contacts.length + 1}`,
          },
        ],
      });
    }
  };

  handleInput = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  deleteContact = (ev) => {
    const newContacts = this.state.contacts.filter((contact) => contact.id !== ev.target.parentNode.id);
    this.setState({ contacts: newContacts });
  }

  render() {
    return (
      <div className={styles.container}>
        <h2>Phonebook</h2>
        <Form
          handleSubmit={this.handleSubmit}
          name={this.state.name}
          handleInput={this.handleInput}
          number={this.state.number}
        />
        <h2>Contacts</h2>
        <Filter handleInput={this.handleInput} filter={this.state.filter} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
