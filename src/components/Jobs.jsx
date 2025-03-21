import { useState } from 'react'

import data from '../assets/data.json'

export function Jobs() {
  const [expand, setExpand] = useState(true)
  const jobs = []

  const handleClickJob = () => {
    setExpand(!expand)
  }

  const loadJobs = () => {
    for (let job in data.experience) {
      jobs.push(
        <article
          key={job}
          className={`${expand ? 'p-3' : 'p-4'} overflow-hidden rounded-sm md:rounded-md lg:rounded-lg lg:p-4 ${data.experience[job].bg.tailwind} transition-discrete duration-500 ease-in`}
        >
          {data.experience[job].url && (
            <h3 className="text-2xl underline">
              <a href={data.experience[job].url} rel="noreferrer" target="_blank">
                {data.experience[job].name}
              </a>
            </h3>
          )}
          {!data.experience[job].url && (
            <h3 className="text-2xl underline">{data.experience[job].name}</h3>
          )}
          <div className={`${expand ? 'block' : 'hidden'}`}>
            <p>{data.experience[job].job}</p>
            <p>
              Contrato: <strong>{data.experience[job].contract}</strong>
            </p>
            <ul className="flex list-inside list-disc flex-col gap-1 text-left text-sm md:gap-2 md:text-base lg:text-lg">
              {data.experience[job].works.map((work) => (
                <li key={work}>{work}</li>
              ))}
            </ul>
          </div>
          <ul className="mt-2 flex justify-center gap-1 md:gap-2">
            {data.experience[job].tags.map((tag) => {
              return (
                <li
                  key={tag.name}
                  className={`min-w-16 rounded-full p-2 text-sm lg:text-lg ${tag.bg.tailwind}`}
                >
                  {tag.name}
                </li>
              )
            })}
          </ul>
        </article>,
      )
    }
  }

  loadJobs()

  return (
    <>
      <section className="my-4 rounded-sm bg-gray-950 p-2 md:rounded-md md:p-4 lg:rounded-lg lg:p-6">
        <h2 className="text-2xl md:text-4xl">Experiência Profissional</h2>
        <button
          className={`mt-2 cursor-pointer rounded-full bg-emerald-500 p-2 text-sm font-semibold hover:bg-emerald-600 md:mt-4 md:p-2.5 lg:p-3 lg:text-lg ${expand ? 'hover:scale-[0.95]' : 'hover:scale-[1.05]'} transition-transform duration-300 ease-out`}
          onClick={handleClickJob}
        >
          {expand ? 'Contrair Tudo (-)' : 'Expandir Tudo (+)'}
        </button>
        <div className="my-4 flex flex-col gap-4">{jobs}</div>
      </section>
    </>
  )
}
