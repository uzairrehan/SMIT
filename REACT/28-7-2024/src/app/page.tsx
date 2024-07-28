"use client";
import Login from "../../Components/Login";
import Welcome from "../../Components/Welcome";

export default function Home() {
  return (<>
  {
  false ? <Login /> : <Welcome />
  }
  </>);
}
