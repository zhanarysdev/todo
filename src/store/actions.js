import {store} from './store'
export const logInAct = () => ({
  type: 'LOG_IN',
  login: true,
});

export const logOutAct = () => ({
  type: 'LOG_OUT',
  login: false
});

export const isModal = (isModal) => {
  console.log(!isModal)
  return({
	type: 'IS_MODAL',
	changer: !isModal
})}

export const fetchData = (page=1, sort_field, sort_direction) => {
  console.log("from action", page, sort_field, sort_direction)
	return (dispatch)=>{
	dispatch({
      type: 'FETCH_DATA',
    });
    // &sort_field=id&sort_direction=desc
    // &sort_field=${sort_field}&sort_direction=${sort_direction}
	return fetch(`https://uxcandy.com/~shapoval/test-task-backend/?developer=Zhanarys&page=${page !==null ? page : ''}&sort_field=${sort_field}&sort_direction=${sort_direction}`)
		 .then(response => response.json().then(body => ({ response, body })))
      		.then(({ response, body }) => {
        if (!response.ok) {
          // If request was failed, dispatching FAILURE action.
          dispatch({
            type: 'FETCH_DATA_NOK',
            error: body.error
          });
        } else {
          
          // When everything is ok, dispatching SUCCESS action.
          
          dispatch({
            type: 'FETCH_DATA_OK',
            tasks: body.message,
            page: page
          });
        }
      })
    }

}

