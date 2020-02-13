import React, { createContext } from "react";

const defaultTodos = [
    {
        "id": 1,
        "description": "Get out of bed"
      },
      {
        "id": 2,
        "description": "Brush teeth"
      },
      {
        "id": 3,
        "description": "Eat breakfast"
      }
]
export const TodosContext = createContext();