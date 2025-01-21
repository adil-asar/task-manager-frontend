import React from 'react'
import Task from './Task'

const Container = () => {
  return (
<section className="grid grid-cols-4 mt-5 gap-6">
<Task />
<Task />
<Task />
<Task />
</section>
  )
}

export default Container