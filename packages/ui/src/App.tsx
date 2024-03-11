import Delete from '@mui/icons-material/Delete'
import Button from '@mui/joy/Button'
import Checkbox from '@mui/joy/Checkbox'
import IconButton from '@mui/joy/IconButton'
import List from '@mui/joy/List'
import ListDivider from '@mui/joy/ListDivider'
import ListItem from '@mui/joy/ListItem'
import Stack from '@mui/joy/Stack'
import Typography from '@mui/joy/Typography'
import { Task } from '@prisma/client'
import { Fragment, useEffect, useState } from 'react'

const API_URL = process.env.API_URL

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    fetch(`${API_URL}/tasks`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        /**
         * TO-DO: How to guarantee that data is an array of Task?
         *
         * The endpoint is expected to return an array of Task. However, the data can be anything.
         * The data can be a string, an object, undefined, or what we want: an array of Task.
         * How would you guarantee that during runtime?
         */
        setTasks(data)
      })
  }, [])

  const handleCheckboxChange = (task: Task, completed: Task['completed']) => {
    /**
     * TO-DO: Persist the changes to the database
     *
     * The current implementation updates the local state. However, the changes are not persisted to the backend.
     * Persist the changes to the backend.
     * Update the client state on success.
     */
    setTasks(tasks.map(t => (t.id === task.id ? { ...t, completed } : t)))
  }

  const handleDeleteTask = (task: Task) => {
    fetch(`${API_URL}/tasks/${task.id}`, {
      method: 'delete',
    })
      .then(res => {
        return res.json()
      })
      .then(() => {
        setTasks([...tasks.filter(t => t.id !== task.id)])
      })
  }

  return (
    <Stack
      gap={2}
      style={{
        maxWidth: 500,
        margin: 'auto',
        alignItems: 'center',
      }}>
      <Typography color='primary' level='h1'>
        Task List
      </Typography>
      <List
        variant='outlined'
        sx={{
          borderRadius: 'sm',
          width: '100%',
        }}>
        {tasks.map((task, index) => (
          <Fragment key={task.id}>
            {index > 0 && <ListDivider />}
            <ListItem
              key={task.id}
              endAction={
                <IconButton
                  aria-label='Delete'
                  size='sm'
                  color='danger'
                  onClick={() => handleDeleteTask(task)}>
                  <Delete />
                </IconButton>
              }>
              <Checkbox
                label={task.title}
                sx={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                }}
                checked={task.completed}
                onChange={event =>
                  handleCheckboxChange(task, event.target.checked)
                }
              />
            </ListItem>
          </Fragment>
        ))}
      </List>
      <Button fullWidth>
        {/**
         * TO-DO: Implement the new task feature
         *
         * The button is not functional. Implement the new task feature.
         * You ask provide a way for the user to input the task title and create a new task in the backend.
         * Update the client state on success.
         */}
        New Task
      </Button>
    </Stack>
  )
}
