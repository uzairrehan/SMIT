"use client";
import Login from "../../Components/Login";
import Welcome from "../../Components/Welcome";
import Link from "next/link";

export default function Home() {
  return (<>
  {
  true ? <Login />: <Welcome />
  }
  <Link href="/About">About</Link>
0
  </>);
}
