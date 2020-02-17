import { useState, useEffect } from 'react';
import axios from 'axios';

const useInput = (defaultValue) => {
  const [todo, setTodo] = useState(defaultValue);
  const [listLoadComplete, setlistLoadComplete] = useState(null);
  useEffect(() => {
    const someFunc = async () => {
      try {
        const response = await axios.get('http://localhost:8080/notes');
        setTodo(response.data);
        setlistLoadComplete(true);
      } catch (e) {
        setlistLoadComplete(false);
      }
    };
    someFunc();
  }, []);
  return [todo, setTodo, listLoadComplete];
};

export default useInput;
