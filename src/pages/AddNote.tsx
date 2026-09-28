import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useNotes } from '../hooks/useNotes'

function AddNote() {
  const [content, setContent] = useState('')
  const { addNote } = useNotes()
  const navigate = useNavigate()

  const trimmed = content.trim()
  const isEmpty = trimmed.length === 0

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isEmpty) return

    addNote(trimmed)
    navigate('/')
  }

  return (
    <main className="page">
      <header className="page-header">
        <div>
          <h1>Add Note</h1>
          <p className="page-meta">Write something and save it locally.</p>
        </div>
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
          placeholder="Write your note..."
          onChange={(event) => setContent(event.target.value)}
        />
        <div className="form-actions">
          <button type="submit" className="button" disabled={isEmpty}>
            Add Note
          </button>
          <Link to="/" className="button button-ghost">
            Cancel
          </Link>
        </div>
      </form>
    </main>
  )
}

export default AddNote
