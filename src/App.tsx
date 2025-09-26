import ProfileCard from "./components/ProfileCard";
import "./App.css";

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
    rate: 20,
    picture:
      "https://plus.unsplash.com/premium_photo-1708275672423-837db6d3d700?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
  };

  return (
    <>
      <Card
        id={profile1.id}
        name={profile1.name}
        designation={profile1.designation}
        rate={profile1.rate}
        picture={profile1.picture}
      />
    </>
  );
}

export default App;
