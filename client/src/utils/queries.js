import { gql } from '@apollo/client';

export const QUERY_EVENT = gql`
  query event($id: ID!) {
    event(_id: $id) {
      _id
      title
      firstName
      startDate
      dueDate
    }
  }
`;