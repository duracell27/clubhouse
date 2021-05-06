import Link from "next/link";
import { Button } from "../components/Button";
import { ConversationCard } from "../components/ConversationCard";
import { Header } from "../components/Header";
import React from 'react'
import axios from "../core/axios";


export default function Rooms({rooms = []}) {
  
  return (
    <>
      <Header />
      <div className="container mt-40 d-flex align-items-center justify-content-between">
        <h1>All conversations</h1>
        <Button color="green">+ Start room</Button>
      </div>
      <div className="container grid mt-20">
        {rooms.map(obj=>(
          <Link key={obj.id} href={`rooms/${obj.id}`}>
          <a >
          <ConversationCard
            title={obj.title}
            avatars={obj.picture}
            guests={obj.guests}
            guestsCount={obj.guestsCount}
            speakersCount={obj.speakersCount}
          /></a>
        </Link>
        ))}
      </div>
    </>
  );
}


export const getServerSideProps = async () => {
  try{
    const {data} = await axios.get('/rooms.json');
    return {
      props: {
        rooms: data,
      }
    }
  }catch(error){
    return {
      props: {
        rooms: [],
      }
    }
  }
  
}