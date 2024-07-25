import React from 'react'
import {Form, useLoaderData} from 'react-router-dom'
import {getContact} from './contacts'

export async function loader({params}) {
  const contact = await getContact(params.contactId)
  return {contact}
}

export default function Contact() {
  const {contact} = useLoaderData()

  //   const contact = {
  //     first: 'Your',
  //     last: 'Name',
  //     avatar: 'https://robohash.org/you.png?size=200x200',
  //     twitter: 'Description',
  //     text: 'Some Text'
  //   }

  return (
    <div id="contact">
      <div>
        <img
          key={contact.avatar}
          src={
            contact.avatar ||
            `https://robohash.org/${contact.id}.png?size=200x200`
          }
        />
      </div>
      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}
          <Favorite contact={contact} />
        </h1>
        {contact.twitter && (
          <p>
            <a target="blank" href={`https://twitter.com/${contact.twitter}`}>
              {contact.twitter}
            </a>
          </p>
        )}
        {contact.text && <p>{contact.text}</p>}
        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (!confirm('Please confirm you want to delete this record')) {
                event.preventDefault()
              }
            }}>
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  )
}

function Favorite({contact}) {
  const favorite = contact.Favorite
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? 'false' : 'true'}
        aria-label={favorite ? 'Remove from favorite' : 'Add to favorite'}>
        {favorite ? 'Thang' : 'jack'}
      </button>
    </Form>
  )
}
