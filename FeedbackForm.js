// FeedbackForm.js
import React from 'react';
import { useForm } from 'react-hook-form';

const FeedbackForm = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    // Handle the submission, e.g., send data to your bug tracking system
    console.log('User Feedback:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Issue Description:
        <textarea name="issueDescription" ref={register({ required: true })} />
      </label>
      {errors.issueDescription && <span>This field is required</span>}

      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;
