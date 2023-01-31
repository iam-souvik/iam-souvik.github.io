import React from 'react'
import GitHubCalendar from "react-github-calendar"
import "./githubCalendar.css"

const Github = () => {
  return (
    <section>

      <div className='container experience_container about github_status'>
        <div className="git_stats">
          <a href="https://github.com/iam-souvik?tab=repositories">
            <img alt="Souvik patra's github stats"
              src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=iam-souvik&hide_border=true&theme=react&hide_border=true&bg_color=0D1117" />
          </a>
        </div>
        <div className="git_stats">
          <img src="https://github-readme-streak-stats.herokuapp.com/?user=iam-souvik&theme=algolia&hide=smalltalk&layout=compact" alt="iam-souvik" />
        </div>
      </div>

      <div className="container github_calendar">
        <GitHubCalendar username="iam-souvik" />
      </div>


    </section>
  )
}

export default Github