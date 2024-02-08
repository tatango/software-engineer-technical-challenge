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
        // TO-DO: How to guarantee that data is an array of Task?
        setTasks(data)
      })
  }, [])

  const handleCheckboxChange = (task: Task, completed: Task['completed']) => {
    // TO-DO: Persist the changes to the database
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
        {/* TO-DO: Implement the new task feature */}
        New Task
      </Button>
    </Stack>
  )
}
