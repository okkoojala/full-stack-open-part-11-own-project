import React from 'react'
import { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'

const Notification = ({ notification }) => {
  const dispatch = useDispatch()

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    position:'fixed',
    top:0,
    right:0
  }

  useEffect(() => {

    if(notification.title)
    {
      let timeout = setTimeout(() => {
        dispatch({
          type:'CHANGE',
          data:{ title:'',delay:5 }
        })
      },notification.delay * 1000)

      return(() => {
        clearTimeout(timeout)
      })
    }
  // eslint-disable-next-line
  },[notification])

  return (

    notification.title
      ?
      <div style={style}>
        {notification.title}
      </div>
      :
      null
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification