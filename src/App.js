import React from "react";
import logo from "./logo.svg";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Feed from './Feed';
import "./App.css";


const posts = [
  {
    title: "The Title",
    lead: "Welcome to ABC.com, the biggest platform for the alphabet.",
    moreInfo: "Click here to learn more about learning ABC"
  },
  {
    title: "Another Title",
    lead: "Welcome to ABC.com, the biggest platform for the alphabet.",
    moreInfo: "Click here to learn more about learning ABC"
  },
  {
    title: "And One More",
    lead: "Welcome to ABC.com, the biggest platform for the alphabet.",
    moreInfo: "Click here to learn more about learning ABC"
  }
]

const App = () => {

  return (
    <div className="App">
      <NavBar logo={logo} />
      <Jumbotron 
        title="The Title"
        lead="Welcome to ABC.com, the biggest platform for the alphabet."
        moreInfo="Click here to learn more about learning ABC"
        buttonLabel="Start"
      />

      <div className="container">
        
  
              (post)=><Feed 
                image={post.image}
                title={post.title}
                description={post.description}
                buttonLabel="Read more"
              />
            )
        }
        
      </div>
    </div>
  );
};

export default App;
