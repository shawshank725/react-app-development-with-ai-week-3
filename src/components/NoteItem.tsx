import { Link } from 'react-router-dom'
import type { Note } from '../types/note'

interface NoteItemProps {
  note: Note
  onDelete: (id: string) => void
}

function NoteItem({ note, onDelete }: NoteItemProps) {
  const createdAt = new Date(note.createdAt).toLocaleString()

  return (
    <li className="note">
      <p className="note-content">{note.content}</p>
      <div className="note-footer">
        <time className="note-date" dateTime={note.createdAt}>
          {createdAt}
        </time>
        <div className="note-actions">
          <Link className="note-action" to={`/notes/${note.id}/edit`}>
            Edit
          </Link>
          <button
            type="button"
            className="note-action is-danger"
            onClick={() => onDelete(note.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  )
}

export default NoteItem
