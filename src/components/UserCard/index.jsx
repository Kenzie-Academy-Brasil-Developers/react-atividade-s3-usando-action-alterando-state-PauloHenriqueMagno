import { useDispatch } from "react-redux";
import { changeName } from "../../store/modules/user/action";
import { useState } from "react"

const UserCard = () => {
  const dispatch = useDispatch();

  const [newName, setNewName] = useState("")

  const handleClick = () => {
    dispatch(changeName(newName));
  }

  return (
    <div>
      <input type="text" onChange={(e)=> setNewName(e.target.value)} />
      <button onClick={handleClick}>Change</button>
    </div>
  )
}

export default UserCard;