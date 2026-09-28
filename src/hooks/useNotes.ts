import { useCallback, useState } from 'react'
import type { Note } from '../types/note'
import { loadNotes, saveNotes } from '../utils/notesStorage'

function createId(): string {
  return (
    crypto.randomUUID?.() ??
    `${Date.now()}-${Math.random().toString(16).slice(2)}`
  )
}

function createNote(content: string): Note {
  return {
    id: createId(),
    content,
    createdAt: new Date().toISOString(),
  }
}

export function useNotes() {
  const [notes, setNotes] = useState<Note[]>(loadNotes)

  const addNote = useCallback(
    (content: string) => {
      const next = [createNote(content), ...notes]
      saveNotes(next)
      setNotes(next)
    },
    [notes],
  )

  const updateNote = useCallback(
    (id: string, content: string) => {
      const next = notes.map((note) =>
        note.id === id ? { ...note, content } : note,
      )
      saveNotes(next)
      setNotes(next)
    },
    [notes],
  )

  const deleteNote = useCallback(
    (id: string) => {
      const next = notes.filter((note) => note.id !== id)
      saveNotes(next)
      setNotes(next)
    },
    [notes],
  )

  return { notes, addNote, updateNote, deleteNote }
}
