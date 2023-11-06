import { useState } from "react";
import { useCreateTaskMutation } from "./taskSlice";

/** Form for creating new tasks */
export default function NewTask() {
  const [description, setDescription] = useState("");
  const [createTask] = useCreateTaskMutation();

  const create = async (evt) => {
    evt.preventDefault();
    createTask({ description });
  };

  return (
    <form onSubmit={create}>
      <label>
        Description
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <button>Create</button>
    </form>
  );
}
