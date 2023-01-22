import { Box, IconButton } from '@mui/material'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit'
import { useState } from 'react'
import CheckIcon from '@mui/icons-material/Check'
import Delete from './Delete'
import { Stack } from '@mui/system'
import Apiservices from '../../services/ApiServices'
function Actions({
  isCheck,
  setIsCheck,
  item,
  setItem,
  setEditItem,
  edititem,userImg
}) {
  const handelEdit = () => {
    const newData = new FormData()
    newData.append('file', userImg)
    newData.append('data', JSON.stringify(edititem))
    if (edititem.title && edititem.des&&edititem.name) {
      Apiservices.put(`/blog/${item.id}`, newData).then((res) => {
        setItem(edititem)
        setIsCheck(false)
      })
    } else {
      alert('you have to write the form')
    }
  }
  return (
    <Stack direction={'row'} justifyContent={'center'}>
      {!isCheck ? (
        <IconButton onClick={() => setIsCheck(true)}>
          <EditIcon />
        </IconButton>
      ) : (
        <IconButton onClick={handelEdit}>
          <CheckIcon />
        </IconButton>
      )}
      <Delete item={item} />
    </Stack>
  )
}

export default Actions
