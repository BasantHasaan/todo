import { gql } from "@apollo/client";
import { client } from "./client";

class GraphCMSContent {
  constructor(props) {
  }
   fetchTodo(id) {
    const QUERY = gql`
    query {
      item( where: { id: "${id}"}){
        id
        title
        details
        isCompleted
        dueDate
      }
    }
  `;
  return QUERY;
  }

  fetchTodos() {
    const QUERY = gql`
      query  {
        items{
          id
          title
          details
          isCompleted
        }
      }
    `;
    return QUERY;
  }
  async createTodo({ title, details, dueDate }) {
    const QUERY = gql`
    mutation{
            createItem(data: {
                title: "${title}",
                 details: "${details}",
                dueDate:"${dueDate}",
                isCompleted: false
            }) {
                id
                title
                details
                isCompleted     
            }
        }
    `;

    try {
      const data = await client.mutate({ mutation: QUERY });
      return data;
    } catch (error) {
      console.log("Error at createTodo:>>", error);
      return false;
    }
  }
  async updateTodo(id, isCompleted) {
    const QUERY = gql`
    mutation {
    updateItem(
      where: { id: "${id}"}
      data: {isCompleted: ${isCompleted}}
    ) {
        id
        title
       details
       dueDate
       isCompleted
    }
  } `;
  try {
      const data = await client.mutate({ mutation: QUERY });
      return data;
    } catch (error) {
      console.log("Error at createTodo:>>", error);
      return false;
    }
  }
}

export default GraphCMSContent;
