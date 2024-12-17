import type React from "react";
import { useEffect, useState } from "react";

interface Program {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
}

const Programs: React.FC = () => {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => response.json())
      .then((data) => setPrograms(data));
  }, []);

  return (
    <div>
      <h1>Liste des Séries</h1>
      <ul>
        {programs.map((program) => (
          <li key={program.id}>
            <h2>{program.title}</h2>
            <img src={program.poster} alt={`${program.title} Poster`} />
            <p>{program.synopsis}</p>
            <small>
              {program.country} - {program.year}
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Programs;
