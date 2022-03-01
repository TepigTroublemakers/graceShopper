import React, { useEffect } from "react";
import { getAllPots } from '../store/pots';
import { useDispatch, useSelector } from "react-redux";

const AllPots = () => {
  const { allPots } = useSelector((state) => {
    return {
      allPots: state.allPots
    }
  })

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPots())
  }, [])

  return (
    <div>
      {allPots.map(pot => {
        return pot
      })}
    </div>
  )
}

export default AllPots
