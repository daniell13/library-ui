import {all, fork, takeEvery} from 'redux-saga/effects';

// workers
function* printTest() {
    yield console.log('test')
}
function* printError() {
    yield console.log("test error")
}

// watchers
export function* test() {
    yield takeEvery('TEST', printTest)
    yield takeEvery('TEST_ERROR', printError)
}

export default function* rootSaga() {
    yield all([
        fork(test)
    ])
}
