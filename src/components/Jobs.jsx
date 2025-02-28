import { useState } from "react";
import { data } from "../assets/data";

export function Jobs() {
  const [isOpen, setIsOpen] = useState(true)
  const jobs = [];

  const handleClickJob = () => {
    setIsOpen(!isOpen)
  }

  const loadJobs = () => {
    for (let job in data.experience) {
      jobs.push(
        <article
          key={job}
          className={`${isOpen ? 'p-3' : 'p-4'} lg:p-4 rounded-sm md:rounded-md lg:rounded-lg overflow-hidden ${data.experience[job].bg.tailwind} transition-discrete duration-500 ease-in`}
        >
          {data.experience[job].url && (
            <h3 className="text-2xl underline">
              <a
                href={data.experience[job].url}
                rel="noreferrer"
                target="_blank"
              >
                {data.experience[job].name}
              </a>
            </h3>
          )}
          {!data.experience[job].url && (
            <h3 className="text-2xl underline">{data.experience[job].name}</h3>
          )}
          <div className={`${isOpen ? 'block' : 'hidden'}`}>
            <p>{data.experience[job].job}</p>
            <p>{data.experience[job].contract}</p>
            <ul className="list-disc list-inside flex flex-col gap-1 md:gap-2 text-sm lg:text-lg text-left">
              {data.experience[job].works.map((work) => (
                <li key={work}>{work}</li>
              ))}
            </ul>
            <ul className="mt-2 flex gap-1 md:gap-2 justify-center">
              {data.experience[job].tags.map((tag) => {
                return (
                  <li
                    key={tag.name}
                    className={`p-2 min-w-16 rounded-full text-sm lg:text-lg ${tag.bg.tailwind}`}
                  >
                    {tag.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </article >,
      );
    }
  };

  loadJobs();

  return (
    <>
      <section className="my-4 p-2 md:p-4 lg:p-6 rounded-sm md:rounded-md lg:rounded-lg bg-gray-950">
        <h2 className="text-2xl md:text-4xl">Experiência Profissional</h2>
        <button
          className={`mt-2 md:mt-4 p-2 md:p-2.5 lg:p-3 rounded-full text-sm lg:text-lg font-semibold bg-emerald-500 hover:bg-emerald-600 cursor-pointer ${isOpen ? 'hover:scale-[0.95]' : 'hover:scale-[1.05]'} transition-transform duration-300 ease-out`}
          onClick={handleClickJob}
        >
          {isOpen ? 'Contrair Tudo (-)' : 'Expandir Tudo (+)'}
        </button>
        <div className="flex flex-col gap-4 my-4">{jobs}</div>
      </section>
    </>
  );
}
