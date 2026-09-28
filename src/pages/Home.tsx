import { Link } from 'react-router-dom'
import NoteItem from '../components/NoteItem'
import { useNotes } from '../hooks/useNotes'

function Home() {
  const { notes, deleteNote } = useNotes()
  const count = notes.length

  return (
    <main className="page">
      <header className="page-header">
        <div>
          <h1>Notes</h1>
          <p className="page-meta">
            {count === 0
              ? 'Nothing saved yet'
              : `${count} saved note${count === 1 ? '' : 's'}`}
          </p>
        </div>
        <Link to="/notes/new" className="button">
          Add Note
        </Link>
      </header>

      {count === 0 ? (
        <div className="empty">
          <p className="empty-title">No notes found.</p>
          <p className="empty-text">
            Create your first note to see it listed here.
          </p>
          <Link to="/notes/new" className="button">
            Add Note
          </Link>
        </div>
      ) : (
        <ul className="note-list">
          {notes.map((note) => (
            <NoteItem key={note.id} note={note} onDelete={deleteNote} />
          ))}
        </ul>
      )}
    </main>
  )
}

export default Home
