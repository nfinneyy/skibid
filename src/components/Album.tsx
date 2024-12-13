import React from "react";
import { Link } from "react-router-dom";
interface AlbumProps {
  logo: string;
  name: string;
  author: string;
  track: string[];
  className?: string;
  playlistLink: string;
}
import { Disc } from "lucide-react";
import { cn } from "@/lib/utils";

const Album: React.FC<AlbumProps> = ({
  logo,
  name,
  author,
  track,
  className,
  playlistLink,
}) => {
  return (
    <div
      className={cn(
        "flex mx-auto flex-row sm:flex-col items-start justify-start w-3/4 bg-stone-900 rounded-2xl p-4 shadow-lg transition duration-500 hover:scale-105 hover:shadow-green-950",
        className
      )}
    >
      <div className="flex flex-col sm:flex-row items-start justify-start w-2/6 mr-8">
        <img src={logo} alt={`${name} logo`} className="w-full sm:w-1/2" />
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-2xl font-bold underline">
            <Link to={playlistLink}>{name}</Link>
          </h1>
          <h2 className="text-md text-slate-400 mb-4">By {author}</h2>
        </div>
      </div>
      <table className="flex-1 items-start justify-start text-left">
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th>Track</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody className="gap-2">
          {track.map((t, index) => (
            <tr key={index} className="hover:bg-stone-800 rounded-3xl p-8">
              <td>
                <Disc />
              </td>
              <td>{index + 1}</td>
              <td>
                <div className="flex flex-col items-start justify-start">
                  <div>{t}</div>
                  <div className="text-xs text-slate-400">{author}</div>
                </div>
              </td>
              <td>03:45</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Album;
