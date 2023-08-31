interface Contact {
  name: string
  email: string
  phone: string
}

const ContactList = ({ contacts }: { contacts: Contact[] }) => (
  <div>
    {contacts.map((contact) => (
      <div key={contact.name}>
        <h2>{contact.name}</h2>
        <p>Email: {contact.email}</p>
        <p>Telefone: {contact.phone}</p>
      </div>
    ))}
  </div>
)

export default ContactList
