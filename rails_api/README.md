# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## QUERIES

### Get a Note
query {
  fetchNote(id: 2) {
    id
    title
    body
  }
}

### Get Notes
query {
  fetchNotes {
    id
    title
    body
  }
}

## MUTATION
mutation {
  addNote(input: { params: { title: "GraphQL notes", body: "A long body of text about GraphQL"  }}) {
    note {
      id
      title
      body
    }
  }
}