import { Button } from "../components/Button";
import { ConversationCard } from "../components/ConversationCard";
import { Header } from "../components/Header";

export default function Rooms() {
  return (
    <>
      <Header />
      <div className="container mt-40 d-flex align-items-center justify-content-between">
        <h1>All conversations</h1>
        <Button color='green'>+ Start room</Button>
      </div>
      <div className="mt-20">
        <ConversationCard />
      </div>
    </>
  );
}
