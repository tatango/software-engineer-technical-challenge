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

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  // TO-DO: This request is running twice. How to fix that?
  useEffect(() => {
    fetch('http://localhost:3000/tasks')
      .then(res => {
        return res.json()
      })
      .then(data => {
        // TO-DO: How to guarantee that data is an array of Task?
        setTasks(data)
      })
  }, [])

  const handleCheckboxChange = (
    changedTask: Task,
    completedStatus: Task['completed']
  ) => {
    // TO-DO: Persist the changes to the backend.
    setTasks(
      tasks.map(task =>
        task.id === changedTask.id
          ? { ...task, completed: completedStatus }
          : task
      )
    )
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
                <IconButton aria-label='Delete' size='sm' color='danger'>
                  {/* TO-DO: Implement the delete feature */}
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
