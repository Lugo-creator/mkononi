import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Protected = (props) => {
  const naviget = useNavigate();
  const { Component } = props;
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (!login) { 
      localStorage.setItem("loginStatus", "Sign in to Skiza Mkononi!")
      naviget("/", {replace: true});
    }
  }, [naviget]);
  return (
    <div>
      <Component />
    </div>
  )
}

export default Protected
