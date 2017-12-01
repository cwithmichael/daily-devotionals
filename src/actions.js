import fetch from 'cross-fetch'

export const REQUEST_DEVOTIONALS = 'REQUEST_DEVOTIONALS';
export const RECEIVE_DEVOTIONALS = 'RECEIVE_DEVOTIONALS';

function requestDevotionals() {
    return {
        type: REQUEST_DEVOTIONALS
    }
}

function receiveDevotionals(json) {
    return {
        type: RECEIVE_DEVOTIONALS,
        devotionals: json,
        receivedAt: Date.now()
    }
}

export function fetchDevotionals() {
    return dispatch => {
        dispatch(requestDevotionals())
        return fetch('http://localhost:8080/api/v1/devotionals')
            .then(response => response.json())
            .then(json => dispatch(receiveDevotionals(json)))
            .catch(err => {
                console.log(err)
                var json = [
                    {
                        "ID": "1",
                        "title":"Devotional Test 1", "brief":"Test", 
                        "content":"this is a test", 
                        "publish_date": "20110707"
                    },
                    {
                        "ID": "2",
                        "title":"Devotional Test 2", "brief":"Test 2", 
                        "content":"this is a test 2", 
                        "publish_date": "20171129"
                    }
                ]
                dispatch(receiveDevotionals(json))
            })
    }
}

function shouldFetchDevotionals(state) {
    const devotionals = state.devotionals
    if (!devotionals) {
        return true
    } else if (devotionals.isFetching) {
        return false
    } 
}

export function fetchDevotionalsIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchDevotionals(getState())) {
            return dispatch(fetchDevotionals())
        }
    }
}