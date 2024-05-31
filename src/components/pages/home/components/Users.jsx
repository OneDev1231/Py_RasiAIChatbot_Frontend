import React from 'react'
import { SingleUser } from './SingleUser'

export const Users = ({usersData}) => {
  return (
    <div>
        <div className="py-2 flex flex-col gap-1 overflow-y-scroll max-h-[75vh]">
        { usersData.map(({ id, name }) => {
            return (
                <div key={id}>
                    <SingleUser key={id} name={name} />
                </div>
            )
        }) }
        </div>
    </div>
  )
}
