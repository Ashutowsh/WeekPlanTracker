import React, { useState, createContext, useEffect } from "react";
export const NoteContext = createContext({
  allIdeas: null,
  setAllIdeas: null,
  formData: null,
  setFormData: null,
  handleInput: null,
  handleSubmit: null,
  getLocalItems: null,
});

export const NoteProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [date, setDate] = useState(new Date());

  // to get data using local storage

  const getLocalItems = () => {
    let list = localStorage.getItem("lists");

    if (list) return JSON.parse(localStorage.getItem("lists"));
    else return [];
  };

  const [allIdeas, setAllIdeas] = useState(getLocalItems());

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
    setInfo({ ...info, [name]: value });
  };
  // add data to local storage
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(allIdeas));
  }, [allIdeas]);

  const handleDateOnchange = (date) => {
    setDate(date);
  };

  const handleSubmit = (event) => {
    const cdate = date.getDate();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    event.preventDefault();
    // console.log(allIdeas);
    const newIdea = {
      ...formData,
      id: new Date().getTime().toString(),
      date: `${cdate}/${month}/${year}`,
    };
    setAllIdeas([...allIdeas, newIdea]);
    formData.title = "";
    formData.content = "";
  };

  const value = {
    allIdeas,
    setAllIdeas,
    formData,
    setFormData,
    handleInput,
    handleSubmit,
    date,
    handleDateOnchange,
  };
  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
};
