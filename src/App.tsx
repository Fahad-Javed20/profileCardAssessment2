
import "./App.css";
import Card from "./components/ProfileCard";

export type ProfileCard = {
  id: number;
  name: string;
  designation: string;
  rate: number;
  picture: string;
};

function App() {
  const profile1: ProfileCard = {
    id: 1,
    name: "Fahad Bin Javed",
    designation: "Website Developer",
    rate: 34,
    picture:
      "https://plus.unsplash.com/premium_photo-1708275672423-837db6d3d700?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
  }

  const profile2: ProfileCard = {
    id: 1,
    name: "Fahad Bin Javed",
    designation: "Website Developer",
    rate: 20,
    picture:
      "https://images.unsplash.com/photo-1602471615287-d733c59b79c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
  }

  const profile3: ProfileCard = {
    id: 1,
    name: "Fahad Bin Javed",
    designation: "Website Developer",
    rate: 40,
    picture:
      "https://images.unsplash.com/photo-1602471615287-d733c59b79c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
  }

  const profile4: ProfileCard = {
    id: 1,
    name: "Fahad Bin Javed",
    designation: "Website Developer",
    rate: 20,
    picture:
"https://images.unsplash.com/photo-1602471615287-d733c59b79c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww"  }

  return (
    <>
    <div className=" min-h-screen min-w-sceen bg-gradient-to-r from-pink-400 via-red-300 to-orange-300 flex items-center justify-center">
      <div className="flex gap-6">

      <Card
        id={profile1.id}
        name={profile1.name}
        designation={profile1.designation}
        rate={profile1.rate}
        picture={profile1.picture}
        />

      <Card
        id={profile2.id}
        name={profile2.name}
        designation={profile2.designation}
        rate={profile2.rate}
        picture={profile2.picture}
        />

      <Card
        id={profile3.id}
        name={profile3.name}
        designation={profile3.designation}
        rate={profile3.rate}
        picture={profile3.picture}
        />

      <Card
        id={profile4.id}
        name={profile4.name}
        designation={profile4.designation}
        rate={profile4.rate}
        picture={profile4.picture}
        />
        </div>
        </div>
    </>
  );
}

export default App;
