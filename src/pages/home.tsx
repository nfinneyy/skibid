import Album from "@/components/Album";
import MAIF from "@/assets/maif.png";
import WTMG from "@/assets/wtmg.png";
import WTV from "@/assets/wtv.png";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Home</h1>
      <p className="mb-8 text-md text-slate-400">
        This is the home page. Please donate I am about to be fired from
        cyberkiln ltd. Send all the money you can to my paypal.
      </p>
      <h1 className="mb-8 text-4xl font-bold">Albums</h1>
      <Album
        className="mb-16"
        logo={MAIF}
        playlistLink="https://www.youtube.com/watch?v=FfG4qKuG7K4&list=PLVdaTvVt3XGZ2yUQLIbwrsh-lQizRunAT"
        name="My AI Friend"
        author="TECHNO-B"
        track={[
          "Boot Me Up",
          "Escape",
          "Path to Freedom",
          "This World",
          "Blend In",
          "On The Down Low",
          "Je Danse Dans l'Enfer",
          "(In)Humane",
          "Mechanical Poser",
          "Live In The Moment",
          "Interlude",
          "Run!",
          "Lullaby32",
        ]}
      />
      <Album
        className="mb-16"
        logo={WTMG}
        playlistLink="https://www.youtube.com/watch?v=H_pMqkm8uxk&list=PLVdaTvVt3XGbZpT9OZ7uLhzCioVuex6ky"
        name="Welcome To My Garage"
        author="TECHNO-B"
        track={[
          "Ouverture",
          "SCATTER!",
          "Voice Laboratory",
          "Cali-Girlz",
          "Electric Legacy",
          "24/7",
          "Intermission",
          "Reach",
          "Back In The Day Redux",
          "Minimalism is Key",
          "Winter Snow",
          "Reverberated Hallways",
          "Le Fin",
        ]}
      />
      <Album
        logo={WTV}
        name="Watch The Volume"
        author="TECHNO-B"
        playlistLink="https://www.youtube.com/watch?v=h1i1H5rUWYE&list=PLVdaTvVt3XGZkZUyS4phVz0yml5hD0Wbl"
        track={[
          "Guerre sur le Disco",
          "Dazzler",
          "Understandable",
          "The Power!",
          "D.Y.N.A.M.O",
          "Day Trip",
          "Bit of Love",
          "Interim",
          "Never Gonna Stop",
          "Corrosive",
          "Journey",
          "Groovatronik",
          "Just Too Much",
          "United As One",
        ]}
      />
    </div>
  );
}
