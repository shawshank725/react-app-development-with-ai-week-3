import { useState, type FormEvent } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useNotes } from '../hooks/useNotes'

function EditNote() {
  const { id } = useParams()
  const { notes, updateNote } = useNotes()
  const navigate = useNavigate()

  const note = id ? notes.find((item) => item.id === id) : undefined
  const [content, setContent] = useState(note?.content ?? '')

  const trimmed = content.trim()
  const isEmpty = trimmed.length === 0

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isEmpty || !note) return

    updateNote(note.id, trimmed)
    navigate('/')
  }

  if (!note) {
    return (
      <main className="page">
        <div className="empty">
          <p className="empty-title">Note not found</p>
          <p className="empty-text">
            This note may have been deleted or the link is invalid.
          </p>
          <Link to="/" className="button">
            Back to Home
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="page">
      <header className="page-header">
        <h1>Edit Note</h1>
        <p className="page-meta">
          Created {new Date(note.createdAt).toLocaleString()}
        </p>
      </header>

      <form className="note-form" onSubmit={handleSubmit}>
        <label className="note-label" htmlFor="note-content">
          Note
        </label>
        <textarea
          id="note-content"
          className="note-input"
          name="content"
          rows={6}
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <div className="form-actions">
          <button type="submit" className="button" disabled={isEmpty}>
            Save Changes
          </button>
          <Link to="/" className="button button-ghost">
            Cancel
          </Link>
        </div>
      </form>
    </main>
  )
}

export default EditNote
