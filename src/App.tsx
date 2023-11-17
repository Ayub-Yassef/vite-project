import { useState, ChangeEventHandler, useEffect } from 'react';
import NoteItem from './components/NoteItem';
import axios from "axios";

type noteType = {
  id: string;
  title: string;
  description?: string;
};

//let title = "";
const App = () => {
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  
  const [count, setCount] = useState(0);
  const [noteToView, setNoteToView] = useState<noteType>();
  const [notes, setNotes] = useState<noteType[]>([]);
  const [values, setValues] = useState({
    title: "",
    description: "",
  });
  const [selectedNoteId, setSelectedNoteId] = useState("");

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = ({ target }) => {
    const { name, value } = target;
    setValues({ ...values, [name]: value });
  };

};