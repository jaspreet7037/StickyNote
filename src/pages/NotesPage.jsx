import React from 'react';
import { useContext } from "react";
import { NoteContext } from "../context/NoteContext";
import Controls from '../components/Controls'
//import { useState, useEffect } from 'react';
import NoteCard from "../components/NoteCard"
//import {fakeData as notes} from '../assets/fakeData.js'
//import { db } from "../appwrite/databases";

const NotesPage = () => {
  const { notes, setNotes } = useContext(NoteContext);
  //const [notes, setNotes] = useState([]);
  //useEffect(() => {
  //  init();
  //}, []);

  //const init = async () => {
  //  const response = await db.notes.list();
  //  setNotes(response.documents);
  //};
  return (
    <div>
      {notes.map((note) => (
        <NoteCard key={note.$id} note={note} />
      ))}
      <Controls />
    </div>
  )
}

export default NotesPage