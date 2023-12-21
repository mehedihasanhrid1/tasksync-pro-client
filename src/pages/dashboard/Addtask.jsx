import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

const Addtask = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
      try {
          const response = await axios.post('http://localhost:5000/api/tasks', data);
        if (response.data) {
          toast.success('Task added successfully!');
          reset();
        } else {
          console.error('Failed to add task');
        }
      } catch (error) {
        console.error('Error submitting the form:', error);
      }
    };
  
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" {...register('title', { required: true })} />

        <label htmlFor="description">Description:</label>
        <textarea id="description" {...register('description', { required: true })} />

        <label htmlFor="deadline">Deadline:</label>
        <input type="text" id="deadline" {...register('deadline')} />

        <label htmlFor="priority">Priority:</label>
        <select id="priority" {...register('priority')}>
          <option value="Low">Low</option>
          <option value="Moderate">Moderate</option>
          <option value="High">High</option>
        </select>

        <button type="submit">Submit</button>
      </form>
      <ToastContainer position="top-center" autoClose={3000} />
        </div>
    );
};

export default Addtask;