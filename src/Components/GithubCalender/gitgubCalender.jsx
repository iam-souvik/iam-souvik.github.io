import React from 'react'
import GitHubCalendar from "react-github-calendar"
import "./githubCalendar.css"

const Github = () => {
  return (
    <section>
      <div className="container github_calendar">
      <GitHubCalendar username="iam-souvik"/>
      </div> 
        </section>
  )
}

export default Github