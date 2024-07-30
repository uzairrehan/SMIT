"use client";

import { useState } from "react";
import { UserType } from "./usertype";
const users: UserType[] = [
  {
    email: "haider@gmail.com",
    password: "123456",
    userName: "haider",
    hobbies: ["swimming", "gardening"],
    post: [
      {
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure inventore est neque, ducimus culpa totam numquam quibusdam maiores eius consectetur. Sed fugiat velit illo alias a pariatur? Aspernatur, non laboriosam?",
        likes: 10,
      },
      {
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure inventore est neque, ducimus culpa totam numquam quibusdam maiores eius consectetur. Sed fugiat velit illo alias a pariatur? Aspernatur, non laboriosam?",
        likes: 15,
      },
    ],
  },
  {
    email: "abdullah@gmail.com",
    password: "123456",
    userName: "abdullah",
    hobbies: ["gym", "video games"],
    post: [
      {
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure inventore est neque, ducimus culpa totam numquam quibusdam maiores eius consectetur. Sed fugiat velit illo alias a pariatur? Aspernatur, non laboriosam?",
        likes: 10,
      },
      {
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure inventore est neque, ducimus culpa totam numquam quibusdam maiores eius consectetur. Sed fugiat velit illo alias a pariatur? Aspernatur, non laboriosam?",
        likes: 15,
      },
    ],
  },
  {
    email: "sara@gmail.com",
    password: "123456",
    userName: "sara",
    hobbies: ["reading", "painting"],
    post: [
      {
        content:
          "Reading is to the mind what exercise is to the body. I love getting lost in a good book.",
        likes: 20,
      },
      {
        content:
          "Painting allows me to express my creativity and emotions. It's my escape from reality.",
        likes: 25,
      },
    ],
  },
  {
    email: "umar@gmail.com",
    password: "123456",
    userName: "umar",
    hobbies: ["hiking", "photography"],
    post: [
      {
        content:
          "Exploring nature through hiking is the best way to clear my mind and find peace.",
        likes: 18,
      },
      {
        content:
          "Capturing moments through my lens is my passion. Every picture tells a story.",
        likes: 22,
      },
    ],
  },
  {
    email: "ayesha@gmail.com",
    password: "123456",
    userName: "ayesha",
    hobbies: ["baking", "traveling"],
    post: [
      {
        content:
          "Baking is my therapy. I love experimenting with new recipes and sharing treats with friends.",
        likes: 30,
      },
      {
        content:
          "Traveling opens up new worlds and experiences. I live for the thrill of discovering new places.",
        likes: 35,
      },
    ],
  },
  {
    email: "uzair@gmail.com",
    password: "123456",
    userName: "Uzair Rehan",
    hobbies: ["cycling", "gaming"],
    post: [
      {
        content:
          "Cycling keeps me fit and allows me to explore the city. It's a great way to stay active.",
        likes: 12,
      },
      {
        content:
          "Gaming is not just a hobby, it's a way of life. I love the challenges and the community.",
        likes: 19,
      },
    ],
  },
  {
    email: "hira@gmail.com",
    password: "123456",
    userName: "hira",
    hobbies: ["writing", "yoga"],
    post: [
      {
        content:
          "Writing is my passion. It allows me to express my thoughts and ideas creatively.",
        likes: 28,
      },
      {
        content:
          "Yoga helps me stay balanced and centered. It's essential for my physical and mental health.",
        likes: 24,
      },
    ],
  },
  {
    email: "kamran@gmail.com",
    password: "123456",
    userName: "kamran",
    hobbies: ["music", "fishing"],
    post: [
      {
        content:
          "Music is the soundtrack of my life. It lifts my spirits and keeps me motivated.",
        likes: 16,
      },
      {
        content:
          "Fishing is a great way to relax and connect with nature. Patience is the key to success.",
        likes: 20,
      },
    ],
  },
];

type LoginType = {
  authenticate: (auth: boolean) => void;
  setUser: (user: UserType) => void;
};

export default function Login({ authenticate, setUser }: LoginType) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    let [userFound] = users.filter(
      (user) => email === user.email && password === user.password
    );
    if (userFound) {
      authenticate(true);
      setUser(userFound);
    }
  };

  return (
    <>
      
        <label htmlFor="email">
          <span className="text">Email : </span>
          <input
            className="input"
            type="text"
            id="input email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label htmlFor="password">
          <span className="text">Passw : </span>
          <input
            className="input"
            type="text"
            id="input password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <br />

        <button onClick={loginHandler}>
          <span className="text">Login</span>
        </button>
      
    </>
  );
}
