export const PROBLEM_GET = 'problems/GET'
export const PROBLEM_GET_SUCCESS = 'problems/GET_SUCCESS'
export const PROBLEM_GET_FAILED = 'problems/GET_FAILED'
export const PROBLEM_UPDATE = 'problems/UPDATE'
export const PROBLEM_UPDATE_SUCCESS = 'problems/UPDATE_SUCCESS'
export const PROBLEM_UPDATE_FAILED = 'problems/UPDATE_FAILED'
export const PROBLEM_GET_LIST = 'problems/GET_LIST'
export const PROBLEM_GET_LIST_SUCCESS = 'problems/GET_LIST_SUCCESS'
export const PROBLEM_GET_LIST_FAILED = 'problems/GET_LIST_FAILED'
export const PROBLEM_DELETE = 'problems/DELETE'
export const PROBLEM_DELETE_SUCCESS = 'problems/DELETE_SUCCESS'
export const PROBLEM_DELETE_FAILED = 'problems/DELETE_FAILED'
export const PROBLEM_CREATE = 'problems/CREATE'
export const PROBLEM_CREATE_SUCCESS = 'problems/CREATE_SUCCESS'
export const PROBLEM_CREATE_FAILED = 'problems/CREATE_FAILED'

const getProblemDetail = id => ({
  type: PROBLEM_GET,
  id,
})

const getProblemDetailSuccess = problem => ({
  type: PROBLEM_GET_SUCCESS,
  problem,
})

const getProblemDetailFailed = error => ({
  type: PROBLEM_GET_FAILED,
  error,
})

const getProblem = ({ problem }) => problem.problem
const getError = ({ problem }) => problem.error

export const actions = {
  getProblemDetail,
  getProblemDetailSuccess,
  getProblemDetailFailed,
}

export const selectors = {
  getProblem,
  getError,
}

const initialState = {
  isLoading: false,
  problem: {},
  error: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case PROBLEM_GET: {
      const newState = { ...state }
      newState.isLoading = true
      return newState
    }
    case PROBLEM_GET_SUCCESS: {
      const newState = { ...state }
      newState.isLoading = false
      newState.problem = action.problem
      newState.error = null
      return newState
    }
    case PROBLEM_GET_FAILED: {
      const newState = { ...state }
      newState.isLoading = false
      newState.error = action.error
      return newState
    }
    default: return state;
  }
}
