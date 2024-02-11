import SessionItem from "./SessionItem"

type SessionListProps = {
  sessions:{
    id:string,
    title:string,
    summary:string,
    image:string
  }[]
}

export default function SessionList({sessions}:SessionListProps){
  return (
    <ul id="sessions-list">
      {sessions.map((session) => {
      return <li key={session.id}> <SessionItem  {...session}/> </li>
      })}
    </ul>
  )
}